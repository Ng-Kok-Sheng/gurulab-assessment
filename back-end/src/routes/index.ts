import express, { Request, Response } from "express";
import { v4 as uuidv4, validate } from "uuid";
import { validationResult } from "express-validator";

import { feedbackData } from "../services/index.types";
import { feedbackRequestSchema } from "../middlewares/index";
import {
  addFeedback,
  getAllFeedback,
  getFeedbackById,
} from "../services/index";

const router = express.Router();

router.get("/feedback", (req, res) => {
  res.status(200).json(getAllFeedback());
});

router.get("/feedback/:feedbackId", (req, res) => {
  res.status(200).json(getFeedbackById(req.params.feedbackId));
});

router.post(
  "/feedback",
  feedbackRequestSchema,
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).json({ errors: errors.array() });
    }

    const { studentEmail, feedbackMood, feedbackText } = req.body;
    const feedbackData: feedbackData = {
      feedbackId: uuidv4(),
      studentEmail,
      feedbackMood,
      feedbackText,
    };

    addFeedback(feedbackData);
    res.status(201).json(feedbackData);
  }
);

export default router;
