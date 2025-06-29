import { formatTime } from "@/src/utils/formatTime";

type TimerProps = {
  time: number;
  timeType: "total" | "current";
  showHours?: boolean;
};

export function Timer({ time, showHours, timeType }: TimerProps) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 p-2 rounded-lg bg-zinc-100">
      <span className="text-xs">
        {timeType === "total" ? "Tempo de treino" : "Descanso"}
      </span>
      <span className="font-medium">{formatTime(time, showHours)}</span>
    </div>
  );
}
