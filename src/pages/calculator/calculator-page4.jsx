import React, { useState, useEffect } from 'react';


function Page4() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGarage, setSelectedGarage] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedReach, setSelectedReach] = useState('');
  const [localStorageData, setLocalStorageData] = useState([]);

  const getAllLocalStorageItems = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      items.push({ key, value });
    }
    setLocalStorageData(items);
    console.log(items);
  };

  const handleClick = () => {
    const brand = localStorage.getItem('selectedBrand');
    const model = localStorage.getItem('selectedModel');
    const price = localStorage.getItem('selectedPrice');
    const year = localStorage.getItem('licenseYear');
    const garage = localStorage.getItem('selectedGarage');
    const age = localStorage.getItem('birthDate');
    const gender = localStorage.getItem('selectedGender');
    const reach = localStorage.getItem('reach');
    setSelectedBrand(brand); 
    setSelectedModel(model); 
    setSelectedPrice(price);
    setSelectedYear(year);
    setSelectedGarage(garage);
    setSelectedAge(age);
    setSelectedReach(reach);
    getAllLocalStorageItems();
  };

  useEffect(() => {
    console.log(selectedBrand);
    console.log(selectedModel);
    console.log(selectedPrice);
    console.log(selectedYear);
    console.log(selectedGarage);
    console.log(selectedAge);
    console.log(selectedGender);
  }, [selectedBrand, selectedModel, selectedPrice, selectedYear, selectedGarage, selectedAge]);

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <div className='bg-light rounded-lg flex justify-center'>
        <div>
          <ul>
            <li>Brand: {selectedBrand}</li>
            <li>Model: {selectedModel}</li>
            <li>Price: {selectedPrice}</li>
            <li>Year: {selectedYear}</li>
            <li>Garage: {selectedGarage}</li>
            <li>Age: {selectedAge}</li>
            <li>gender: {selectedGender}</li>
            <li>reach: {selectedReach}</li>
          </ul>
        </div>
        <button>
          
        </button>
      </div>
    </>
  );
}

export default Page4;
