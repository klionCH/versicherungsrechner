import React, { useState, useEffect } from 'react';
import "../style/style.css"

function Page2() {
  const [birthDate, setBirthDate] = useState(localStorage.getItem('birthDate') || '');
  const [licenseYear, setLicenseYear] = useState(localStorage.getItem('licenseYear') || '');
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [gender, setGender] = useState(localStorage.getItem('gender') || '');

  

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(100), (val, index) => currentYear - index);

  useEffect(() => {
    const savedBirthDate = localStorage.getItem('birthDate');
    const savedLicenseYear = localStorage.getItem('licenseYear');
    const savedGender = localStorage.getItem('gender');

    if (savedBirthDate) {
      setBirthDate(savedBirthDate);
      validateAge(savedBirthDate);
    }

    if (savedLicenseYear) {
      setLicenseYear(savedLicenseYear);
    }
  }, []);

  const validateAge = (date) => {
    const birthDate = new Date(date);
    const age = currentYear - birthDate.getFullYear();
    const isAdult = age > 18 || (age === 18 && new Date().getTime() - birthDate.getTime() >= 0);
    setIsAgeValid(isAdult);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setBirthDate(selectedDate);
    localStorage.setItem('birthDate', selectedDate);
    validateAge(selectedDate);
  };



  const handleLicenseYearChange = (e) => {
    const selectedYear = e.target.value;
    setLicenseYear(selectedYear);
    localStorage.setItem('licenseYear', selectedYear);
  };

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(gender);
    localStorage.setItem('gender', selectedGender);
  };

  return (
    <>
      <div className="relative z-0 w-full mb-5 group">
        <input
          name="birth-date"
          id="birth-date"
          type="date"
          value={birthDate}
          onChange={handleDateChange}
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${isAgeValid ? 'border-gray-300' : 'border-red-500'} appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
          placeholder=""
          required
        />
        <label
          htmlFor="birth-date"
          className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Geburtsdatum
        </label>
        {!isAgeValid && <p className="text-red-500 text-sm mt-2">You must be at least 18 years old.</p>}
      </div>
      <div className="relative z-0 w-full mb-5 group mt-10">
        <select
          name="license-year"
          id="license-year"
          value={licenseYear}
          onChange={handleLicenseYearChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:bg-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
        >
          <option value="" disabled>Select year</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <label
          htmlFor="license-year"
          className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Seit wann hast du den Führerschein?
        </label>

        <div className="relative z-0 w-full mb-5 mt-10 group">
        <select
          name="car-brand"
          id="car-brand"
          value={gender}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:bg-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={handleGenderChange}
        >
          <option>
            Männlich
          </option> 
          <option>
            Weiblich
          </option>
          <option>
            Divers
          </option>
        </select>
        <label
          htmlFor="car-brand"
          className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Geschlecht
        </label>
      </div>
      </div>
    </>
  );
}

export default Page2;
