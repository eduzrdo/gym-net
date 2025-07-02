import { TimerContextProvider } from "@/src/hooks/useTimer";

export default function WorkoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TimerContextProvider>{children}</TimerContextProvider>;
}
