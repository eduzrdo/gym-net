export type Exercise = {
  id: number;
  title: string;
  sets: number;
  reps: number[][];
  weight?: number[];
};

export type Workout = {
  title: string;
  exercises: Exercise[];
};

export type WorkoutPlan = Workout[];

export const workoutPlan: WorkoutPlan = [
  {
    title: "Push 1 • Peito e tríceps",
    exercises: [
      {
        id: 0,
        title: "⁠Supino inclinado com halter",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 1,
        title: "⁠Supino reto máquina (drop-set)",
        sets: 4,
        reps: [[10], [10]],
      },
      {
        id: 2,
        title: "⁠Crossover",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 3,
        title: "⁠Desenvolvimento",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 4,
        title: "⁠Elevação lateral com halter sentado",
        sets: 4,
        reps: [[10], [10]],
      },
      {
        id: 5,
        title: "⁠Elevação frontal com halter",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 6,
        title: "⁠Tríceps na Barra W (polia)",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 7,
        title: "⁠Tríceps testa (barra)",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 8,
        title: "⁠Tríceps corda unilateral (polia)",
        sets: 3,
        reps: [[6, 10]],
      },
    ],
  },
  {
    title: "Pull • Dorsal e Bíceps",
    exercises: [
      {
        id: 0,
        title: "Puxada alta com pegada aberta",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 1,
        title: "⁠Puxada alta com triângulo",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 2,
        title: "⁠Remada baixa com triângulo",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 3,
        title: "⁠Serrote com halter",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 4,
        title: "⁠Posterior de ombro na máquina",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 5,
        title: "⁠Encolhimento no smith",
        sets: 3,
        reps: [[6, 10]],
      },
      {
        id: 6,
        title: "⁠Rosca direta no banco inclinado",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 7,
        title: "⁠Rosca direta na corda",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 8,
        title: "⁠Rosca direta na barra com pegada pronada",
        sets: 4,
        reps: [[6, 10]],
      },
    ],
  },

  {
    title: "Push 2 • Ombros e trapézio",
    exercises: [
      {
        id: 0,
        title: "Desenvolvimento com halter",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 1,
        title: "Elevação lateral com halter (drop-set)",
        sets: 4,
        reps: [[10], [10]],
      },
      {
        id: 2,
        title: "Elevação frontal na polia",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 3,
        title: "Crucifixo invertido máquina",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 4,
        title: "Encolhimento com halter",
        sets: 4,
        reps: [[6, 10]],
      },
      {
        id: 5,
        title: "Remada alta nas costas (smith)",
        sets: 4,
        reps: [[6, 10]],
      },
    ],
  },
];
