"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

export default function Slider({ value = 0.5, onChange }: SliderProps) {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className="
      relative
      flex
      items-center
      select-none
      touch-none
      w-full
      h-10
    "
      defaultValue={[0.5]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
    >
      <RadixSlider.Track
        className="
          bg-neutral-600
          relative
          grow
          rounded-full
          h-[3px]
          transition
          duration-200
          cursor-pointer
        "
      >
        <RadixSlider.Range
          className="
            absolute
            bg-white
            rounded-full
            h-full
            transition
            duration-200
          "
        ></RadixSlider.Range>
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="
          absolute
          w-2
          h-2
          bg-white
          shadow-md
          -translate-x-1/2
          -translate-y-1/2
          cursor-pointer
          focus:w-2.5
          focus:h-2.5
          focus:outline-none
          focus:bg-secondary
        "
        data-orientation="horizontal"
      />
    </RadixSlider.Root>
  );
}
