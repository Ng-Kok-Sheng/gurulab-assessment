import { addFeedback, getAllFeedback, getFeedbackById } from "./index";
import { feedbackMood } from "./index.types";

describe("Feedback Service", () => {
  const feedback = {
    feedbackId: "1",
    studentEmail: "sampleemail@gmail.com",
    feedbackMood: feedbackMood.awesome,
    feedbackText: "This is great",
  };

  addFeedback(feedback);

  it("should be able to get all feedbacks", () => {
    expect(getAllFeedback()).toStrictEqual([feedback]);
  });

  it("should be able to get feedback by id", () => {
    expect(getFeedbackById("1")).toStrictEqual(feedback);
  });
});
