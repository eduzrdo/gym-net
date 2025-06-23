import { ButtonHTMLAttributes } from "react";
import { Icon } from "@tabler/icons-react";
import colors from "tailwindcss/colors";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: Icon;
};

export function IconButton({ icon: Icon, ...props }: IconButtonProps) {
  return (
    <button
      className="p-2 rounded-lg bg-green-600 hover:bg-green-500 transition-colors cursor-pointer"
      {...props}
    >
      <Icon color={colors.white} />
    </button>
  );
}
