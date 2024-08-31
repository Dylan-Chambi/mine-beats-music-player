import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={`
          flex
          w-full
          rounded-md
          bg-neutral-700
          border
          border-transparent
          px-3
          py-3
          text-xs
          file:border-0
          file:bg-transparent
          file:font-medium
          placeholder-neutral-400
          disabled:cursor-not-allowed
          disabled:opacity-50
          focus:outline-none
      `}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
