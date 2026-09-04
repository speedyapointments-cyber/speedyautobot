export type BoardTopic =
  | "Ask Speedy"
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

export const TOPICS: BoardTopic[] = ["Ask Speedy", "Customers", "Mechanics", "EV", "Roadside", "Shop talk"];

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
    id: "b-book",
    topic: "Customers",
    title: "Do you come to the house or do I drop it?",
    body: "Car is in the driveway and will not crank.",
    author: "Customer",
    official: false,
    createdAt: "2026-09-02T11:00:00.000Z",
    replies: [
      {
        id: "b-book-r1",
        author: "Speedy",
        official: true,
        body: "Both. Pin the car in the app. If it is in the 25-mile radius we come to you. Or bring it to 6016 McDaniel Lane Suite D.",
        createdAt: "2026-09-02T11:12:00.000Z",
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
        body: "L2 is $38 a flagged hour. Two hours = $76 labor to you. Parts are not commissioned. EV is a different ladder.",
        createdAt: "2026-09-03T09:08:00.000Z",
      },
    ],
  },
  {
    id: "b-ev",
    topic: "EV",
    title: "Can any L2 take a high-voltage isolation?",
    body: "I do brakes on Teslas. That is HV right?",
    author: "Applicant",
    official: false,
    createdAt: "2026-09-03T16:00:00.000Z",
    replies: [
      {
        id: "b-ev-r1",
        author: "Speedy",
        official: true,
        body: "No. Pads on an EV is not HV. Isolation and orange-cable work needs EV skill + in-date gloves. Entrance test and EV Academy first.",
        createdAt: "2026-09-03T16:10:00.000Z",
      },
    ],
  },
  {
    id: "b-road",
    topic: "Roadside",
    title: "Do you take insurance roadside or only cash?",
    body: "I have a club card.",
    author: "Customer",
    official: false,
    createdAt: "2026-09-04T10:00:00.000Z",
    replies: [
      {
        id: "b-road-r1",
        author: "Speedy",
        official: true,
        body: "We can work club and insurance jobs once the vendor is set up. Call (704) 835-2577 if you are on the shoulder now.",
        createdAt: "2026-09-04T10:06:00.000Z",
      },
    ],
  },
];
