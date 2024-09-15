"use client";

import { signInWithProvider } from "@/app/actions";
import { useAuthModal } from "@/app/providers/AuthModalProvider";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { ImCross } from "react-icons/im";

export default function LoginModal() {
  const { isAuthModalOpen, closeAuthModal } = useAuthModal();
  const [provider, setProvider] = useState<"google" | "github" | "email" | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  if (!isAuthModalOpen) return null;

  async function handleSignIn(formData: FormData) {
    setPending(true);
    const res = await signInWithProvider(provider as any, formData);
    setPending(false);
    return res;
  }

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      className="
        fixed
        inset-0
        z-50
        overflow-y-auto
        bg-gray-900
        bg-opacity-50
        flex
        items-center
        justify-center
        transition
        duration-300
        ease-in-out
      "
      onClickCapture={(e) => {
        if (e.target === e.currentTarget) {
          closeAuthModal();
        }
      }}
    >
      <div className="relative p-4 w-full max-w-xl max-h-full">
        <div className="relative rounded-3xl shadow bg-background text-onBackground pb-10">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <button
              onClick={() => closeAuthModal()}
              className="
                text-gray-400
                bg-transparent
                hover:bg-gray-200
                hover:text-gray-900
                rounded-lg
                text-sm
                ms-auto
                inline-flex
                justify-center
                items-center
                dark:hover:bg-gray-600
                dark:hover:text-white
              "
              data-modal-hide="default-modal"
            >
              <ImCross className="w-5 h-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="flex flex-col p-4 md:p-5 space-y-4 items-center">
            <h2 className="text-xl font-semibold text-onBackground mb-5">Log In</h2>
            <div className="flex flex-col w-80 space-y-4">
              <form className="flex flex-col w-full space-y-4" action={handleSignIn}>
                <button
                  disabled={pending}
                  onClick={() => setProvider("google")}
                  className="
                  flex
                  items-center
                  justify-center
                  w-full
                  py-2.5
                  px-5
                  rounded-lg
                  text-xs
                  font-medium
                  text-neutral-900
                  bg-neutral-100
                  hover:bg-neutral-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-neutral-200
                "
                >
                  <FcGoogle className="w-6 h-6 me-2" />
                  Continue with Google
                </button>
                <button
                  disabled={pending}
                  onClick={() => setProvider("github")}
                  className="
                  flex
                  items-center
                  justify-center
                  w-full
                  py-2.5
                  px-5
                  rounded-lg
                  text-xs
                  font-medium
                  text-white
                  bg-black
                  hover:opacity-80
                  focus:outline-none
                  focus:ring-2
                  focus:ring-black
                "
                >
                  <FaGithub className="w-6 h-6 me-2" />
                  Continue with Github
                </button>
              </form>

              <div className="flex items-center justify-center w-full py-5">
                <div className="w-full h-0.5 bg-neutral-500"></div>
                <p className="text-xs text-onBackground my-2 mx-2">{"Or"}</p>
                <div className="w-full h-0.5 bg-neutral-500"></div>
              </div>

              <div className="flex items-center justify-center w-full">
                <p className=" text-[0.7rem] text-neutral-300 text-center">
                  Log in with email and password
                </p>
              </div>

              <form className="flex flex-col w-full space-y-4 py-5" action={handleSignIn}>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  disabled
                  className="
                    w-full
                    px-3
                    py-2.5
                    border
                    border-neutral-300
                    rounded-lg
                    text-xs
                    text-white-900
                    focus:outline-none
                    focus:ring-2
                    focus:ring-neutral-200
                    disabled:opacity-50
                  "
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  disabled
                  className="
                    w-full
                    px-3
                    py-2.5
                    border
                    border-neutral-300
                    rounded-lg
                    text-xs
                    text-white-900
                    focus:outline-none
                    focus:ring-2
                    focus:ring-neutral-200
                    disabled:opacity-50
                  "
                />

                <button
                  type="submit"
                  disabled={pending || true}
                  onClick={() => setProvider("email")}
                  className="
                  flex
                  items-center
                  justify-center
                  w-full
                  py-2.5
                  px-5
                  !mt-8
                  rounded-lg
                  text-xs
                  font-medium
                  text-white
                  bg-primary
                  hover:opacity-80
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                  disabled:opacity-50
                "
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
