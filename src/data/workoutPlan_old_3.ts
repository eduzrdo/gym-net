import { WorkoutPlan } from "@/src/hooks/useWorkoutPlan";

export const workoutPlan: WorkoutPlan = [
  {
    id: "1",
    title: "Peito, tríceps e ombro",
    exercises: [
      {
        id: "11",
        title: "supino inclinado com halteres",
        reps: [
          [6, 8],
          [6, 8],
          [6, 8],
        ],
        execution: "range",
        weight: [22, 22, 24],
        notes: "Aquecer com 16",
      },
      {
        id: "12",
        title: "Crucifixo máquina",
        reps: [
          [6, 8],
          [6, 8],
          [6, 8],
        ],
        execution: "range",
        weight: [86, 86, 86],
        notes: "Sportfit: 60/65/70",
      },
      {
        id: "13",
        title: "Crossover polia alta (declinado)",
        reps: [
          [6, 8],
          [6, 8],
          [6, 8],
        ],
        execution: "range",
        weight: [14, 14, 14],
        notes: "Sportfit: 15-15",
      },
      {
        id: "14",
        title: "Elevação lateral com halter",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [12, 12, 12],
      },
      {
        id: "15",
        title: "Tríceps francês na polia",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [14.7, 14.7, 14.7],
        notes: "SmartFit - Cross menor | Sportfit: corda - 15",
      },
      {
        id: "16",
        title: "Tríceps pulley corda",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [7.9, 7.9, 7.9],
        notes: "Tríceps pulley unilateral com pegador",
      },
      {
        id: "17",
        title: "Abdominal declinado",
        reps: [[20], [20], [20], [20]],
        weight: [15, 15, 15, 15],
      },
    ],
  },
  {
    id: "2",
    title: "Dorsal, bíceps",
    exercises: [
      {
        id: "21",
        title: "Puxada alta aberta",
        reps: [
          [6, 8],
          [6, 8],
          [6, 8],
        ],
        execution: "range",
        weight: [59, 61.3, 61.3],
        notes: "Lat pulldown máquina: 72, 77, 81 (banco 5, joelho 3)",
      },
      {
        id: "22",
        title: "Remada baixa (triângulo)",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [63, 65, 68],
        notes:
          "Remada sentada máquina unilateral: 68, 72, 72 (banco 1 peito 8)",
      },
      {
        id: "23",
        title: "Remada declinada (barra)",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [50, 50, 50],
        notes: "Barra livre na gaiola",
      },
      {
        id: "24",
        title: "Rosca Bayesian",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [10, 10, 10],
        notes: "Banco 45⁰ - 12kg | polia ajuste (4)",
      },
      {
        id: "25",
        title: "Rosca direta com giro (halteres)",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [14, 14, 14],
      },
      {
        id: "26",
        title: "Rosca scott na polia",
        reps: [
          [8, 10],
          [8, 10],
          [8, 10],
        ],
        execution: "range",
        weight: [21, 21, 21],
        notes:
          "Testar bíceps Hulk unilateral na polia | Substituir por rosca invertida com barra W: 20kg",
      },
      {
        id: "27",
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
        id: "28",
        title: "Abdominal infra",
        reps: [[20], [20], [20], [20]],
        weight: [0, 0, 0],
      },
    ],
  },
  {
    id: "3",
    title: "Ombros e trapézio",
    exercises: [
      {
        id: "9b2f08fa-3f27-4cdd-9f36-2d7d1bff4fd3",
        title: "Desenvolvimento máquina fechado",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [],
      },
      {
        id: "e2e9c3bb-424f-4d70-90cc-5e99edb54b34",
        title: "Desenvolvimento unilateral halter",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [],
      },
      {
        id: "e2e9c3bb-424f-4fa0-90cc-5e99edb54b34",
        title: "Elevação lateral halter",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [],
      },
      {
        id: "1a7f0eb2-7e3d-44de-9fe3-2ecbbdbf4472",
        title: "Crucifixo invertido máquina / polia",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [12.5, 10, 10],
      },
      {
        id: "9e4d50c3-03b3-4d1d-9b91-2fdb4cb2269c",
        title: "Remada nas costas no smith",
        reps: [
          [6, 10],
          [6, 10],
          [6, 10],
        ],
        execution: "range",
        weight: [14, 16, 16],
      },
    ],
  },
  {
    id: "4",
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
    ],
  },
];
