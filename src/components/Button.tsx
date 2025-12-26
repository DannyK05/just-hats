import type { HtmlHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type TButton = HtmlHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
  variant?: "black" | "white";
};

export default function Button({
  className,
  children,
  variant = "black",
  ...rest
}: TButton) {
  return (
    <button
      {...rest}
      type="button"
      className={twMerge(
        className,
        `${
          variant == "black" ? "black-variant" : "white-variant"
        } h-10 px-3 py-2 cursor-pointer rounded-lg text-sm`
      )}
    >
      {children}
    </button>
  );
}
