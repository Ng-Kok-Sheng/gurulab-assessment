import { useState, useEffect } from "react";
import { PopupModal, FeedbackForm } from "./components";

function App() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    const threeSecondDelay = () => {
      return new Promise(() => {
        setTimeout(() => {
          setShowFeedbackModal(true);
        }, 3000);
      });
    };

    threeSecondDelay();
  }, []);

  return (
    <div>
      <PopupModal showModal={showFeedbackModal} modalWidth="w-2/4">
        <FeedbackForm closeModal={() => setShowFeedbackModal(false)} />
      </PopupModal>
    </div>
  );
}

export default App;
