import Symptom1 from "./Symptom1";
import React, { useState } from 'react';

const Info2 = () => {
  const [showElement, setShowElement] = useState(false);

  const handleButtonClick = () => {
    setShowElement(true);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 dark:text-gray-300">
        <div className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 text-2xl py-4 px-4 rounded-md mt-2">
          <p>Age: </p>
        </div>
        <div>
          <p>Rough Weight:</p>
        </div>
      </div>

      <button onClick={handleButtonClick} type="submit"
            className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold text-2xl py-4 px-4 rounded-md mt-2">
            Continue
          </button>
      {showElement && (
        <div>
          <Symptom1 />
        </div>
      )}
    </>
  );
};

export default Info2;
