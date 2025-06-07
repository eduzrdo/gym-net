export type Exercise = {
  id: string;
  title: string;
  reps: number[][];
  weight: number[];
  execution?: "dropset" | "range";
};
export type Workout = { id: string; title: string; exercises: Exercise[] };

export type WorkoutPlan = Workout[];

export const workoutPlan: WorkoutPlan = [
  {
    id: "3f5e7d1e-9d8f-4d17-8e9f-ec1d96255d47",
    title: "Peito e dorsal",
    exercises: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        title: "⁠Supino inclinado com halteres",
        reps: [
          [6, 8],
          [6, 8],
          [6, 8],
        ],
        execution: "range",
        weight: [20, 22, 22],
      },
      {
        id: "9b2f08fa-3f27-4cdd-9f36-2d7d1bff4fd3",
        title: "Puxada alta aberta",
        reps: [
          [6, 8],
          [6, 8],
          [6, 8],
        ],
        execution: "range",
        weight: [59, 61, 61],
      },
      {
        id: "3e1f1c70-983d-4b95-9edc-cfd3f648d7d7",
        title: "Crucifixo máquina",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [79, 86, 93],
      },
      {
        id: "e2e9c3bb-424f-4d70-90cc-5e99edb54b34",
        title: "Remada unilateral máquina",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [0, 0, 0],
      },
      {
        id: "8433a162-9abf-4f14-8f6c-f0e21e1eb1a3",
        title: "Crossover polia alta",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [17, 17, 17],
      },
      {
        id: "d88d48bb-1ef4-43c4-9e50-bb4ebd4071e3",
        title: "Remada com halteres no banco inclinado",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [20, 22, 22],
      },
      {
        id: "72c89b79-0f92-4e5e-9872-4bb5d64d41f6",
        title: "Abdominal declinado",
        reps: [[20], [20], [20], [20]],
        weight: [15, 15, 15, 15],
      },
    ],
  },
  {
    id: "7c3bfe76-2b6e-4370-a2f9-3738f1f1cc88",
    title: "Braços",
    exercises: [
      {
        id: "1a7f0eb2-7e3d-44de-9fe3-2ecbbdbf4472",
        title: "Rosca Bayesian",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [10, 12.5, 12.5],
      },
      {
        id: "d31995ff-d2a6-490f-82f5-0c7b2e2caa33",
        title: "Tríceps pulley barra reta",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [26, 28, 30],
      },
      {
        id: "9e4d50c3-03b3-4d1d-9b91-2fdb4cb2269c",
        title: "Rosca direta com halteres com giro",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [16, 16, 16],
      },
      {
        id: "aaf7d152-4c80-4377-b3c6-7b4356ea0b99",
        title: "Tríceps testa com barra W",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [25, 25, 25],
      },
      {
        id: "0f4a8c3f-6217-4f41-a42b-d8cce25e6ef9",
        title: "Rosca scott na polia",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [41, 41, 41],
      },
      {
        id: "6c3bc6e1-3c28-44cb-832a-b2ae7e2ff147",
        title: "Tríceps francês",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [22, 22, 22],
      },
      {
        id: "194e0a2f-1427-40c0-85db-0e64fd40dc16",
        title: "Abdominal infra",
        reps: [[20], [20], [20], [20]],
        weight: [0, 0, 0],
      },
    ],
  },
  {
    id: "1b9bfa4e-8ce6-48f0-b6d6-65ab2c1ff12e",
    title: "Ombros e trapézio",
    exercises: [
      {
        id: "4fbb80b3-d487-4a5c-944e-f013556d31d9",
        title: "Desenvolvimento com halter",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [16, 18, 18],
      },
      {
        id: "25e29583-169c-4434-9c9f-c5c12ef85e62",
        title: "Elevação lateral com halter",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "dropset",
        weight: [12, 14, 14],
      },
      {
        id: "9b7df2e1-b94b-4c5c-a2dc-49ae01e7d5f0",
        title: "Elevação frontal na polia",
        reps: [
          [10, 10],
          [10, 10],
          [10, 10],
        ],
        execution: "range",
        weight: [15, 15, 15],
      },
      {
        id: "fba34b2d-d7dc-4de3-b90e-908fb4cdbdde",
        title: "Crucifixo invertido máquina",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [60, 60, 60],
      },
      {
        id: "742dd5d1-fb7b-4d40-8427-b734f3347465",
        title: "Encolhimento com halter",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [26, 26, 26],
      },
      {
        id: "8222c16a-d36d-4fa1-a62c-71248c3e40b4",
        title: "Remada alta nas costas (smith)",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [12.5, 12.5, 12.5],
      },
      {
        id: "5bfcf964-2b25-40fd-a5e2-f21bb19c259e",
        title: "Abdominal lateral",
        reps: [[20], [20], [20], [20]],
        weight: [0, 0, 0, 0],
      },
    ],
  },
];

// "3f5e7d1e-9d8f-4d17-8e9f-ec1d96255d47"
// "7c3bfe76-2b6e-4370-a2f9-3738f1f1cc88"
// "1b9bfa4e-8ce6-48f0-b6d6-65ab2c1ff12e"
// "c2179e3a-9b5f-4c40-8bc5-efda5c5c56c9"
