// React component that shows a popup rendering children prop

import * as React from "react";

interface IProps {
  children: React.ReactNode;
  modalWidth: string;
  showModal: boolean;
}

const popupClass =
  "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full";

export const PopupModal = ({ children, modalWidth, showModal }: IProps) => (
  <div className={`${popupClass} ${showModal ? "" : "hidden"}`}>
    <div
      className={`${modalWidth} relative top-20 mx-auto p-5 w-96 shadow-lg rounded-md bg-black`}
    >
      {children}
    </div>
  </div>
);
