import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle?: "default" | "danger";
};

export function Button({ buttonStyle = "default", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-full text-white font-semibold rounded-xl py-2 px-4 h-[52px] transition-colors cursor-pointer",
        buttonStyle === "danger"
          ? "bg-red-600 active:bg-red-700"
          : "bg-green-600 active:bg-green-700"
      )}
      {...props}
    />
  );
}
