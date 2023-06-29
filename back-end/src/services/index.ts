import { feedbackData, feedbackMood } from "./index.types";

const mockDb: [feedbackData?] = [];

export const addFeedback = (feedback: feedbackData) => {
  mockDb.push(feedback);
};

export const getAllFeedback = () => {
  return mockDb;
};

export const getFeedbackById = (feedbackId: string) => {
  return mockDb.find((feedback) =>
    feedback ? feedback.feedbackId === feedbackId : false
  );
};
