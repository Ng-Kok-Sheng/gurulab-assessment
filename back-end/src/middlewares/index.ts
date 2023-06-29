import { body } from "express-validator";

export const feedbackRequestSchema = [
  body("studentEmail")
    .notEmpty()
    .withMessage("Student email required.")
    .isEmail()
    .withMessage("Invalid email address."),
  body("feedbackMood")
    .notEmpty()
    .withMessage("Feedback mood required.")
    .isIn(["terrible", "okay", "awesome"])
    .withMessage(
      "Invalid feedback mood. Only terrible, okay, awesome is allowed."
    ),
  body("feedbackText")
    .notEmpty()
    .withMessage("Feedback text required.")
    .isString()
    .withMessage("Feedback text must be a string."),
];
