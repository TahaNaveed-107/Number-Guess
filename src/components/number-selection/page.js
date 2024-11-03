import { useState } from "react";
import NameSelect from "@/components/name-list/page";
export default function () {
  const [activeModal, setActiveModal] = useState(false);
  const showModal = () => {
    setActiveModal(true);
  };
  return (
    <>
      <div>
        <h1>Think of a number between 10 and 100</h1>
        <h3>Subtract both of it's integers from it</h3>
        <p>For Example : Subtract 1 and 3 from 13</p>
        <button onClick={showModal}>Next</button>
      </div>
      {activeModal && <NameSelect />}
    </>
  );
}
