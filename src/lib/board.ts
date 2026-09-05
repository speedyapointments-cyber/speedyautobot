export type BoardTopic =
  | "Ask Speedy"
  | "App feedback"
  | "Customers"
  | "Mechanics"
  | "EV"
  | "Roadside"
  | "Shop talk";

export type BoardPost = {
  id: string;
  topic: BoardTopic;
  title: string;
  body: string;
  author: string;
  official: boolean;
  createdAt: string;
  replies: { id: string; author: string; official: boolean; body: string; createdAt: string }[];
};

export const TOPICS: BoardTopic[] = [
  "Ask Speedy",
  "App feedback",
  "Customers",
  "Mechanics",
  "EV",
  "Roadside",
  "Shop talk",
];

export const BOARD_KEY = "speedy.board.v1";

export const SEED: BoardPost[] = [
  {
    id: "b-hours",
    topic: "Ask Speedy",
    title: "When is the shop open?",
    body: "Need Saturday hours before I book.",
    author: "Customer",
    official: false,
    createdAt: "2026-09-01T14:00:00.000Z",
    replies: [
      {
        id: "b-hours-r1",
        author: "Speedy",
        official: true,
        body: "Mon–Fri 8–6, Sat 8–2, Sunday closed. After-hours roadside is a different ticket.",
        createdAt: "2026-09-01T14:20:00.000Z",
      },
    ],
  },
  {
    id: "b-app",
    topic: "App feedback",
    title: "Text Start did not open Messages",
    body: "Tapped the gold button on iPhone and nothing happened.",
    author: "Guest",
    official: false,
    createdAt: "2026-09-04T18:00:00.000Z",
    replies: [
      {
        id: "b-app-r1",
        author: "Speedy",
        official: true,
        body: "Use /text if the button fails. Draft should already say Start. Tell us phone model if it still dies.",
        createdAt: "2026-09-04T18:12:00.000Z",
      },
    ],
  },
  {
    id: "b-pay",
    topic: "Mechanics",
    title: "What does L2 actually pay on a 2-hour brake job?",
    body: "Need the number before I apply.",
    author: "Applicant",
    official: false,
    createdAt: "2026-09-03T09:00:00.000Z",
    replies: [
      {
        id: "b-pay-r1",
        author: "Speedy",
        official: true,
        body: "L2 is $38 a flagged hour. Two hours = $76 labor to you. Parts are not commissioned.",
        createdAt: "2026-09-03T09:08:00.000Z",
      },
    ],
  },
];
