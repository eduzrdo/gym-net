import { WelcomeHeader } from "@/src/components/WelcomeHeader";

import { workoutPlan } from "@/src/data/workoutPlan";
import { WorkoutCard } from "../components/WorkoutCard";

export default function Home() {
  return (
    <div>
      <WelcomeHeader />

      <div className="flex flex-col gap-4 p-5">
        {workoutPlan.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} number={index} />
        ))}
      </div>
    </div>
  );
}
