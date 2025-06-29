import { TimerContextProvider } from "@/src/hooks/useTimer";

export default function WorkoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1">
      <TimerContextProvider>{children}</TimerContextProvider>
    </div>
  );
}
