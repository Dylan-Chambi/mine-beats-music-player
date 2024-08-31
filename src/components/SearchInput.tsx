"use client";
import qs from "query-string";
import { useDebounce } from "@/hooks/useDebounde";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("title") || "");
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query.title ? query : {},
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you want to listen?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
