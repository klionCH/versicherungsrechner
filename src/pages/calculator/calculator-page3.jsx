import React, { useState, useEffect } from 'react';
import "../style/style.css"

function Page3() {
  const [hasGarage, setHasGarage] = useState(localStorage.getItem('hasGarage') === 'true' ? true : false);

  useEffect(() => {
    const savedHasGarage = localStorage.getItem('hasGarage');
    if (savedHasGarage !== null) {
      setHasGarage(savedHasGarage === 'true' ? true : false);
    }
  }, []);

  const handleGarageChange = (e) => {
    const value = e.target.value === 'true' ? true : false;
    setHasGarage(value);
    localStorage.setItem('hasGarage', value);
  };

  return (
    <>
      <div className="relative z-0 w-full mb-5 group">
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="garage-yes"
            name="garage"
            value="true"
            checked={hasGarage === true}
            onChange={handleGarageChange}
            className="text-blue-600 focus:ring-blue-600 dark:focus:ring-blue-500 dark:text-white"
          />
          <label htmlFor="garage-yes" className="text-gray-900 dark:text-gray-400">Ja</label>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <input
            type="radio"
            id="garage-no"
            name="garage"
            value="false"
            checked={hasGarage === false}
            onChange={handleGarageChange}
            className="text-blue-600 focus:ring-blue-600 dark:focus:ring-blue-500 dark:text-white"
          />
          <label htmlFor="garage-no" className="text-gray-900 dark:text-gray-400">Nein</label>
        </div>
        <label
          htmlFor="license-year"
          className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Hat das Auto einen Garagen parkplatz?
        </label>
      </div>
    </>
  );
}

export default Page3;
