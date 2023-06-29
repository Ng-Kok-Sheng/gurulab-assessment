import { useState } from "react";
import { useLocation } from "react-router-dom";
import { feedbackForm, feedbackMood, feedbackList } from "../constants";
import { config } from "../config";

interface FeedbackFormProps {
  closeModal: () => void;
}

export const FeedbackForm = ({ closeModal }: FeedbackFormProps) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodClick = (mood: string) => () => {
    setSelectedMood(mood);
  };

  const handleSelectedFeedback = async (feedback: string) => {
    try {
      fetch(`${config.serviceUrl}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEmail: searchParams.get("studentEmail"),
          feedbackMood: selectedMood,
          feedbackText: feedback,
        }),
      });
    } catch (e) {
      console.log(e);
    }

    setSelectedMood("");
    closeModal();
  };

  return (
    <div>
      <div className="text-center text-white">
        <h1 className="text-xl font-bold">{feedbackForm.title}</h1>
        <h3 className="text-l font-semibold">{feedbackForm.subtitle}</h3>
      </div>

      <div>
        <div className="columns-3 gap-1 py-6">
          {feedbackMood.map((mood) => (
            <div
              key={mood.value}
              onClick={handleMoodClick(mood.value)}
              className={`text-center ${
                selectedMood === mood.value ? "" : "opacity-20"
              }`}
            >
              <h1 className="text-[60px] cursor-default">{mood.emoji}</h1>
              <p className="text-white cursor-default">{mood.title}</p>
            </div>
          ))}
        </div>

        <div className="justify-center mx-4">
          {selectedMood &&
            feedbackList[selectedMood].map((feedback) => (
              <div
                key={feedback}
                onClick={() => handleSelectedFeedback(feedback)}
                className={`mt-3`}
              >
                <div className="text-white cursor-pointer">
                  <h1>{feedback}</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
