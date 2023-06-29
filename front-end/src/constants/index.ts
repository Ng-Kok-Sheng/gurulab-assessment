type feedbackConstant = {
  title: string;
  value: string;
  emoji: string;
};

type feedbackListConstant = {
  [key: string]: string[];
};

export const feedbackForm = {
  title: "How was your class today.",
  subtitle: "Your honest answer will help to improve your class in the future.",
};

export const feedbackMood: feedbackConstant[] = [
  {
    title: "Terrible...",
    value: "terrible",
    emoji: "😭",
  },
  {
    title: "Okay.",
    value: "okay",
    emoji: "😐",
  },
  {
    title: "Awesome!",
    value: "awesome",
    emoji: "😍",
  },
];

export const feedbackList: feedbackListConstant = {
  awesome: [
    "I did not feel bored at all.",
    "I understood almost everything.",
    "I can do all the activities.",
    "I enjoyed interacting with my tutor.",
    "I enjoyed interacting with my classmates.",
  ],
  okay: [
    "I felt bored a few times.",
    "I can only understand some parts.",
    "I can only do some of the activities.",
    "I wish to interact more with my tutor.",
    "I wish to interact more with my classmates.",
  ],
  terrible: [
    "I felt bored most of the time.",
    "I can hardly understand anything.",
    "I can hardly do any of the activities.",
    "I wish to interact more with my tutor.",
    "I wish to interact more with my classmates.",
  ],
};
