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

      <div className="flex justify-center pt-10">
        <button
          type="button"
          className="bg-black text-white p-2 rounded-md"
          onClick={() => setShowFeedbackModal(true)}
        >
          <h1>open modal</h1>
        </button>
      </div>
    </div>
  );
}

export default App;
