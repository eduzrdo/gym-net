import { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-full bg-green-600 text-white font-semibold rounded-xl py-2 px-4 active:bg-green-700 h-[52px] transition-colors cursor-pointer"
      {...props}
    />
  );
}
