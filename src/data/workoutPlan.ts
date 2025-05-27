export type Exercise = {
  id: number;
  title: string;
  reps: number[][];
  weight?: number[];
  execution?: "dropset" | "range";
};
export type Workout = { title: string; exercises: Exercise[] };
export type WorkoutPlan = Workout[];
export const workoutPlan: WorkoutPlan = [
  {
    title: "Peito e dorsal",
    exercises: [
      {
        id: 0,
        title: "⁠Supino inclinado com halteres",
        reps: [
          [6, 8],
          [6, 8],
          [6, 8],
        ],
        execution: "range",
      },
      {
        id: 1,
        title: "Puxada aberta na polia",
        reps: [
          [6, 8],
          [6, 8],
          [6, 8],
        ],
        execution: "range",
      },
      {
        id: 2,
        title: "Crucifixo máquina",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 3,
        title: "Pull down na polia",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 4,
        title: "Crossover polia alta",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 5,
        title: "Remada com halteres no banco",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 6,
        title: "Abdominal declinado",
        reps: [[20], [20], [20], [20]],
      },
    ],
  },
  {
    title: "Braços",
    exercises: [
      {
        id: 0,
        title: "Rosca Bayesian",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 1,
        title: "Tríceps pulley barra reta",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 2,
        title: "Rosca direta com halteres com giro",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 3,
        title: "Tríceps testa com barra W",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 4,
        title: "Rosca scott com halter unilateral",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 5,
        title: "Tríceps francês",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
      },
      {
        id: 6,
        title: "Abdominal infra",
        reps: [[20], [20], [20], [20]],
      },
    ],
  },
  {
    title: "Ombros e trapézio",
    exercises: [
      {
        id: 0,
        title: "Desenvolvimento com halter",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
      },
      {
        id: 1,
        title: "Elevação lateral com halter (drop-set)",
        reps: [
          [10, 10],
          [10, 10],
          [10, 10],
        ],
        execution: "dropset",
      },
      {
        id: 2,
        title: "Elevação frontal na polia",
        reps: [
          [10, 10],
          [10, 10],
          [10, 10],
        ],
        execution: "range",
      },
      {
        id: 3,
        title: "Crucifixo invertido máquina",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
      },
      {
        id: 4,
        title: "Encolhimento com halter",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
      },
      {
        id: 5,
        title: "Remada alta nas costas (smith)",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
      },
      {
        id: 6,
        title: "Abdominal lateral",
        reps: [[20], [20], [20], [20]],
      },
    ],
  },
];
