"use client";

import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

export default function ControlButtons() {
  const router = useRouter();

  return (
    <div className="hidden md:flex gap-x-2 items-center">
      <button
        className="
          rounded-md
          bg-black
          flex
          items-center
          justify-center
          hover:opacity-75
          transition
        "
      >
        <RxCaretLeft className="text-white" size={35} onClick={() => router.back()} />
      </button>
      <button
        className="
          rounded-md
          bg-black
          flex
          items-center
          justify-center
          hover:opacity-75
          transition
        "
      >
        <RxCaretRight className="text-white" size={35} onClick={() => router.forward()} />
      </button>
    </div>
  );
}
