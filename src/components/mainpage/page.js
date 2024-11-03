import { useState } from "react";
import SelectionPage from "@/components/number-selection/page";
import Link from "next/link";
export default function mainpage() {
  const [activeModal, setActiveModal] = useState(false);
  const showModal = () => {
    setActiveModal(true);
  };
  return (
    <>
      <div>
        <h1>Mind Reader</h1>
        <button onClick={showModal}>Start</button>
      </div>

      {activeModal && <SelectionPage />}
    </>
  );
}
