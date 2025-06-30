export type Exercise = {
  id: string;
  title: string;
  reps: number[][];
  weight: number[];
  execution?: "dropset" | "range";
  notes?: string | null;
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
        weight: [22, 24, 24],
        notes: null,
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
        weight: [59, 61.3, 63.6],
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
        weight: [86, 93, 93],
        notes: "Sportfit: 60/65/70",
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
        weight: [60, 60, 60],
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
        notes: "Sportfit: 15-15",
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
        weight: [45, 50, 50],
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
    title: "Membros superiores",
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
        weight: [12.5, 10, 10],
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
        weight: [26.1, 26.1, 26.1],
        notes:
          "Sportfit: barra W - 25, 27,5, 27,5 (cotovelo levemente dolorido) (fazer próxima com 30 no máximo)",
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
        weight: [14, 16, 16],
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
        notes: "Sportfit: 25, 25, 27,5",
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
        weight: [21, 21, 21],
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
        notes: "Sportfit: corda - 15",
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
        weight: [14, 16, 18],
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
        weight: [7.5, 7.5, 7.5],
        notes: "Sportfit: polia - 7,5, 7,5, 10",
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
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Membros inferiores",
    exercises: [
      {
        id: "b3e1c45d-9a6a-4c3e-92c1-6c2d17fe6a58",
        title: "Cadeira abdutora",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [59, 63, 68.68],
      },
      {
        id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        title: "Agachamento smith",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [20.3, 30, 35],
      },
      {
        id: "e2f3c4b5-d6a7-4e98-a3fc-98e5a7b0de49",
        title: "Leg 45",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [81, 81, 81],
      },
      {
        id: "7d3e1a2f-8b0c-45fd-bb79-d1e2f3c4a5b6",
        title: "Cadeira extensora",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [50.59, 63, 68],
      },
      {
        id: "0f1a2b3c-4d5e-6789-abcd-ef0123456789",
        title: "Cadeira flexora",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [50, 54, 54],
      },
      {
        id: "9a8b7c6d-5e4f-20a2-1c0d-9e8f7a6b5c4d",
        title: "Elevação Pélvica",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [20, 20, 20],
      },
      {
        id: "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
        title: "Cadeira adutora",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [63, 65, 65],
      },
      {
        id: "3c2d1e0f-4a5b-6c7d-8e9f-0a1b2c3d4e5f",
        title: "Panturrilha",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [81, 81, 90, 90],
      },
    ],
  },
];
