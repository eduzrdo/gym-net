export type Exercise = {
  id: number;
  title: string;
  sets: number;
  reps: number[][];
  weight?: number[];
};

export type WorkoutPlan = {
  title: string;
  exercises: Exercise[];
}[];

export const workoutPlan: WorkoutPlan = [
  {
    title: "(Push 1) Dorsal e Bíceps",
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
    title: "(Push 2) Peito, ombros, e tríceps",
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
];

// push 2:
// - Supino inclinado com halter 4x12
// - ⁠Supino reto máquina 3x12/10/8 (triset)
// - ⁠Crossover 4x12/10 (biset)
// - ⁠Desenvolvimento 3x12
// - ⁠Elevação lateral com halter 4x12/10 (biset diminuindo a carga)
// - ⁠Elevação frontal com halter 4x12
// - ⁠Tríceps na Barra w (polia) 3x12
// - ⁠Tríceps testa 3x12
// - ⁠Tríceps corda unilateral 3x12
