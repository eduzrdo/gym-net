import { IconListLetters } from "@tabler/icons-react";
import colors from "tailwindcss/colors";

type HeaderProps = {
  title: string;
  onClickHeaderIcon?: () => void;
};

export function Header({ title, onClickHeaderIcon }: HeaderProps) {
  return (
    <div className="flex items-center p-5 pt-10 bg-green-600 rounded-br-xl rounded-bl-xl gap-4">
      <p className="flex-1 text-white text-xl font-bold overflow-ellipsis truncate">
        {title}
      </p>

      <button
        onClick={onClickHeaderIcon}
        className="bg-white w-8 h-8 flex justify-center items-center rounded-full active:bg-zinc-100"
      >
        <IconListLetters color={colors.green[600]} size={24} />
      </button>
    </div>
  );
}
