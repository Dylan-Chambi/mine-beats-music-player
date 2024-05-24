import { FaPlay } from "react-icons/fa6";

export default function PlayButton() {
  return (
    <button
      className="
        transition
        opacity-0
        rounded-full
        flex
        items-center
        p-4
        drop-shadow-md
        translate
        translate-y-1/4
        group-hover:opacity-100
        group-hover:translate-y-0
        hover:scale-110
        justify-center
      "
    >
      <FaPlay className="text-primary w-full h-full" size={80} />
    </button>
  );
}
