// import { Subscription, UserDetails } from "@/types/types";
import { createClient } from "@/utils/supabase/client";
import { AuthUser } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

type useUserReturn = {
  accessToken: string | null;
  user: AuthUser | null;
  isLoading: boolean;
  // userDetail: UserDetails | null;
  // subscription: Subscription | null;
};

export interface Props {
  [propName: string]: any;
}

const UserContext = createContext<useUserReturn | undefined>(undefined);

export function MyUserContextProvider(props: Props) {

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  // const [userDetail, setUserDetail] = useState<UserDetails | null>(null);
  // const [subscription, setSubscription] = useState<Subscription | null>(null);


  useEffect(() => {
    const supabase = createClient();

    const getUser = () => supabase.auth.getUser();
    const getAccessToken = () => supabase.auth.getSession();

    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
        setAccessToken(null);
        // setUserDetail(null);
        // setSubscription(null);
      }
    });

    const fetchData = async () => {
        setIsLoading(true);

        Promise.allSettled([
          getUser(),
          getAccessToken(),
          // getUserDetails(),
          // getSubscription(),
        ]).then((results) => {
          const userPromise = results[0];
          const accessTokenPromise = results[1];
          // const userDetailsPromise = results[2];
          // const subscriptionPromise = results[3];

          if (userPromise.status === "fulfilled") {
            setUser(userPromise.value.data.user);
          }

          if (accessTokenPromise.status === "fulfilled") {
            setAccessToken(
              accessTokenPromise.value.data.session?.access_token || null
            );
          }

          // if (userDetailsPromise.status === "fulfilled") {
          //   setUserDetail(
          //     userDetailsPromise.value.data as unknown as UserDetails
          //   );
          // }

          // if (subscriptionPromise.status === "fulfilled") {
          //   setSubscription(
          //     subscriptionPromise.value.data as unknown as Subscription
          //   );
          // }

          setIsLoading(false);
        });
      };

    fetchData();
  }, []);

  const value = {
    accessToken,
    user,
    isLoading,
    // userDetail,
    // subscription,
  };

  return <UserContext.Provider value={value} {...props} />;
}

export const useUserClient = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
