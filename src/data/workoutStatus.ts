export enum WorkoutStatusType {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export type WorkoutStatus = {
  workoutIndex: number;
  status: WorkoutStatusType;
};
