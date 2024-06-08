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

  const handleResetLocalStorage = () => {
    localStorage.clear();
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedPrice('');
    setSelectedYear('');
    setSelectedGarage('');
    setSelectedAge('');
    setSelectedGender('');
    setSelectedReach('');
  };

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
    const gender = localStorage.getItem('gender');
    const reach = localStorage.getItem('reach');
    setSelectedBrand(brand);
    setSelectedModel(model);
    setSelectedPrice(price);
    setSelectedYear(year);
    setSelectedGarage(garage);
    setSelectedAge(age);
    setSelectedGender(gender);
    setSelectedReach(reach);
    getAllLocalStorageItems();
  };


  useEffect(() => {
    handleClick();
  }, []);


  const calculateIncurance = () => {
    const age = localStorage.getItem('birthDate');
    const year = localStorage.getItem('licenseYear');
    const garage = localStorage.getItem('selectedGarage');
    const reach = localStorage.getItem('reach');
    const price = localStorage.getItem('selectedPrice');
    const brand = localStorage.getItem('selectedBrand');
    const model = localStorage.getItem('selectedModel');

    if (age && year && garage && reach && price && brand && model) {
      console.log('All values are available');
      console.log('Calculating insurance...');
    } else {
      console.log('Some values are missing');
    }
  };





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
            <li>Gender: {selectedGender}</li>
            <li>Reach: {selectedReach}</li>
          </ul>
        </div>

      </div>
      <div>
        <button onClick={calculateIncurance}>Calculate Insurance</button>
        <br></br>
        <button onClick={handleResetLocalStorage}>
          Reset Local Storage
        </button>
      </div>
    </>
  );
}

export default Page4;
