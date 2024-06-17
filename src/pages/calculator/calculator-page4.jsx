import React, { useState, useEffect } from 'react';

function Page4() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGarage, setSelectedGarage] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedReach, setSelectedReach] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [calculations, setCalculations] = useState([]);

  const basePrice = 1000; // Define a base price

  const handleResetLocalStorage = () => {
    localStorage.clear();
    setSelectedBrand('');
    setSelectedPrice('');
    setSelectedYear('');
    setSelectedGarage('');
    setSelectedAge('');
    setSelectedGender('');
    setSelectedReach('');
    setCalculatedPrice(null);
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
    getAllLocalStorageItems();
  };

  useEffect(() => {
    handleClick();
  }, []);

  const getValues = () => {
    const age = localStorage.getItem('birthDate');
    const year = localStorage.getItem('licenseYear');
    const garage = localStorage.getItem('selectedGarage');
    const reach = localStorage.getItem('reach');
    const price = localStorage.getItem('selectedPrice');
    const brand = localStorage.getItem('selectedBrand');
    const model = localStorage.getItem('selectedModel');

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
      const price = parseFloat(selectedPrice);

      // Example conditions for price
      if (price < 10000) {
        insurancePrice *= 1;
      } else if (price >= 10000 && price < 70000) {
        insurancePrice *= 1.3;
      } else if (price >= 70000) {
        insurancePrice *= 1.5;
      }

      // Example conditions for brand
      if (selectedBrand === 'Luxury') {
        insurancePrice *= 1.4;
      } else if (selectedBrand === 'Economy') {
        insurancePrice *= 1.1;
      }

      // Example conditions for year
      const year = parseInt(selectedYear, 10);
      if (year < 2000) {
        insurancePrice *= 1.2;
      } else if (year >= 2000 && year < 2015) {
        insurancePrice *= 1.1;
      } else if (year >= 2015) {
        insurancePrice *= 1.3;
      }

      // Example conditions for garage
      if (selectedGarage === 'Yes') {
        insurancePrice *= 0.9;
      } else if (selectedGarage === 'No') {
        insurancePrice *= 1.2;
      }

      // Example conditions for age
      const age = parseInt(selectedAge, 10);
      if (age < 25) {
        insurancePrice *= 1.5;
      } else if (age >= 25 && age < 50) {
        insurancePrice *= 1.1;
      } else if (age >= 50) {
        insurancePrice *= 1.3;
      }

      // Example conditions for reach
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
      setCalculations([
        ...calculations,
        {
          car: selectedBrand,
          model: selectedModel,
          price: selectedPrice,
          year: selectedYear,
          garage: selectedGarage,
          age: selectedAge
        }
      ]);
            localStorage.setItem('insurancePrice', calculatedPrice); 
      console.log(calculations )
      console.log(`Calculated price: ${insurancePrice}`);
    } else {
      alert("Cannot calculate price, some values are missing");
    }


  };

  return (
    <>
      <div className='bg-light rounded-lg flex justify-center'>
        <div>
          {calculatedPrice !== null && <p>Calculated Insurance Price: ${calculatedPrice.toFixed(2)}</p>}
        </div>
      </div>
      <div>
        <button onClick={calculate}>Calculate Insurance</button>
        <br />
        <button onClick={handleResetLocalStorage}>Reset Local Storage</button>
      </div>
    </>
  );
}

export default Page4;
