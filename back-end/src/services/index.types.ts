export enum feedbackMood {
  terrible,
  okay,
  awesome,
}

export type feedbackData = {
  feedbackId: string;
  studentEmail: string;
  feedbackMood: feedbackMood;
  feedbackText: string;
};
