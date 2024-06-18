import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Page4() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGarage, setSelectedGarage] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedReach, setSelectedReach] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState('');
  const [calculations, setCalculations] = useState([]);
  const [history, setHistory] = useState([]);

  const age = localStorage.getItem('birthDate');
  const year = localStorage.getItem('licenseYear');
  const garage = localStorage.getItem('selectedGarage');
  const reach = localStorage.getItem('reach');
  const price = localStorage.getItem('selectedPrice');
  const brand = localStorage.getItem('selectedBrand');
  const model = localStorage.getItem('selectedModel');

  const basePrice = 1000;

  const handleResetLocalStorage = () => {
    localStorage.clear();
    setSelectedBrand('');
    setSelectedPrice('');
    setSelectedYear('');
    setSelectedGarage('');
    setSelectedAge('');
    setSelectedGender('');
    setSelectedReach('');
    setSelectedModel('');
  };

  const getAllLocalStorageItems = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      items.push({ key, value });
    }
    console.log(items);
  };

  const handleClick = () => {
    setSelectedBrand(localStorage.getItem('selectedBrand') || '');
    setSelectedPrice(localStorage.getItem('selectedPrice') || '');
    setSelectedYear(localStorage.getItem('licenseYear') || '');
    setSelectedGarage(localStorage.getItem('selectedGarage') || '');
    setSelectedAge(localStorage.getItem('birthDate') || '');
    setSelectedGender(localStorage.getItem('gender') || '');
    setSelectedReach(localStorage.getItem('reach') || '');
    setSelectedModel(localStorage.getItem('selectedModel') || '');
    getAllLocalStorageItems();
  };

  useEffect(() => {
    handleClick();
    const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(storedHistory);
  }, []);

  const getValues = () => {


    if (age && year && garage && reach && price && brand && model) {
      console.log('All values are available');

      return true;
    } else {
      return false;
    }
  };

  const calculate = () => {
    const valuesAvailable = getValues();
    if (valuesAvailable) {
      let insurancePrice = basePrice; 
      const parsedPrice = parseFloat(selectedPrice); 
  
      if (parsedPrice < 10000) {
        insurancePrice *= 1;
      } else if (parsedPrice >= 10000 && parsedPrice < 70000) {
        insurancePrice *= 1.3;
      } else if (parsedPrice >= 70000) {
        insurancePrice *= 1.5;
      }
  
      if (selectedBrand === 'Luxury') {
        insurancePrice *= 1.4;
      } else if (selectedBrand === 'Economy') {
        insurancePrice *= 1.1;
      }
  
      const parsedYear = parseInt(selectedYear, 10);
      if (parsedYear < 2000) {
        insurancePrice *= 1.2;
      } else if (parsedYear >= 2000 && parsedYear < 2015) {
        insurancePrice *= 1.1;
      } else if (parsedYear >= 2015) {
        insurancePrice *= 1.3;
      }
  
      if (selectedGarage === 'Yes') {
        insurancePrice *= 0.9;
      } else if (selectedGarage === 'No') {
        insurancePrice *= 1.2;
      }
  
      const parsedAge = parseInt(selectedAge, 10);
      if (parsedAge < 25) {
        insurancePrice *= 1.5;
      } else if (parsedAge >= 25 && parsedAge < 50) {
        insurancePrice *= 1.1;
      } else if (parsedAge >= 50) {
        insurancePrice *= 1.3;
      }
  
      if (selectedReach === 'High') {
        insurancePrice *= 1.4;
      } else if (selectedReach === 'Medium') {
        insurancePrice *= 1.2;
      } else if (selectedReach === 'Low') {
        insurancePrice *= 1;
      }
  
      if (selectedGender === 'Female') {
        insurancePrice *= 1.2;
      } else if (selectedGender === 'Male') {
        insurancePrice *= 0.8;
      }
  
      setCalculatedPrice(insurancePrice);
  
      const newCalculation = {
        selectedBrand,
        selectedModel,
        selectedPrice,
        selectedYear,
        selectedGarage,
        selectedAge,
        selectedGender,
        selectedReach,
        calculatedPrice: insurancePrice
      };
      setCalculations([...calculations, newCalculation]);
  
      const newHistory = [...history, newCalculation];
      localStorage.setItem('history', JSON.stringify(newHistory));
      setHistory(newHistory);
  
      console.log(`Calculated price: ${insurancePrice}`);
    } else {
      alert("Cannot calculate price, some values are missing");
    }
  };
  
  

  return (
    <div className='flex flex-col'>
      <div className='bg-light rounded-lg '>
        <div>
          {calculatedPrice !== '' && (
            <p>{`The Insurance will cost: ${calculatedPrice.toFixed(2)}`}</p>
          )}
        </div>
      </div>
      <div>
        <button onClick={calculate} className="mt-5 relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-black/10">
            <span>Calculate Insurance</span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>

        <br/>
        <Link to="/" className="mt-20 relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-black/10">
            <span>Home</span>    
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </Link>
      </div>
    </div>
  );
}

export default Page4;
