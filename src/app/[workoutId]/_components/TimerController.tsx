import { IconPlayerStop, IconRotate2 } from "@tabler/icons-react";

import { IconButton } from "@/src/components";
import { Timer } from "./Timer";

import { useTimer } from "@/src/hooks/useTimer";

type TimerControllerProps = {
  callback?: () => void;
};

export function TimerController({ callback }: TimerControllerProps) {
  const { totalSeconds, currentSeconds, resetCurrentSeconds, handleStop } =
    useTimer();

  const handleClick = () => {
    handleStop();
    callback?.();
  };

  return (
    <div className="flex items-center gap-5 py-3 px-5 bg-white border-t-1 border-zinc-200">
      <IconButton icon={IconPlayerStop} onClick={handleClick} />
      <Timer time={totalSeconds} timeType="total" />
      <Timer time={currentSeconds} timeType="current" />
      <IconButton icon={IconRotate2} onClick={resetCurrentSeconds} />
    </div>
  );
}
