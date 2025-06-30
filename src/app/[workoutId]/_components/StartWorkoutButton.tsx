import { Button } from "@/src/components/ui/button";

import { useTimer } from "@/src/hooks/useTimer";

type StartWorkoutButtonProps = {
  callback?: () => void;
};

export function StartWorkoutButton({ callback }: StartWorkoutButtonProps) {
  const { handleStart } = useTimer();

  const handleClick = () => {
    handleStart();
    callback?.();
  };

  return (
    <div className="py-3 px-5 bg-white border-t-1 border-zinc-200">
      <Button onClick={handleClick} className="w-full">
        Começar treino
      </Button>
    </div>
  );
}
