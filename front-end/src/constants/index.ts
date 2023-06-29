type feedbackConstant = {
  title: string;
  value: string;
  emoji: string;
  feedbackList: string[];
};

export const feedbackForm = {
  title: "How was your class today.",
  subtitle: "Your honest answer will help to improve your class in the future.",
};

export const feedbackMood: feedbackConstant[] = [
  {
    title: "Awesome!",
    value: "awesome",
    emoji: "😍",
    feedbackList: [
      "I did not feel bored at all.",
      "I understood almost everything.",
      "I can do all the activities.",
      "I enjoyed interacting with my tutor.",
      "I enjoyed interacting with my classmates.",
    ],
  },
  {
    title: "Okay.",
    value: "okay",
    emoji: "😐",
    feedbackList: [
      "I felt bored a few times.",
      "I can only understand some parts.",
      "I can only do some of the activities.",
      "I wish to interact more with my tutor.",
      "I wish to interact more with my classmates.",
    ],
  },
  {
    title: "Terrible...",
    value: "terrible",
    emoji: "😭",
    feedbackList: [
      "I felt bored most of the time.",
      "I can hardly understand anything.",
      "I can hardly do any of the activities.",
      "I wish to interact more with my tutor.",
      "I wish to interact more with my classmates.",
    ],
  },
];
