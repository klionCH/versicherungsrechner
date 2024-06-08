import React, { useState, useEffect } from 'react';
import "../style/style.css"

function Page3() {
  const [hasGarage, setHasGarage] = useState(localStorage.getItem('selectedGarage') === 'true' ? true : false);
  const [reach, setReach] = useState(localStorage.getItem('reach') || '');


  const handleGarageChange = (e) => {
    const value = e.target.value === 'true' ? true : false;
    setHasGarage(value);
    localStorage.setItem('selectedGarage', value);
  };

  const handleReachChange = (e) => {
    const value = e.target.value;
    setReach(value);
    localStorage.setItem('reach', value);
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

      <div className="relative z-0 w-full mb-5 mt-10 group">
        <select
          name="car-use"
          id="car-use"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:bg-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={handleReachChange}
        >
          <option>
            weniger als 5.000 km
          </option> 
          <option>
            5.000 - 20.000 km
          </option>
          <option>
            20.000 km - 50.000 km
          </option>
          <option>
            mehr als 50.000 km
          </option>

        </select>
        <label
          htmlFor="car-use"
          className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Jährliche Kilometer
        </label>
      </div>
    </>
  );
}

export default Page3;
