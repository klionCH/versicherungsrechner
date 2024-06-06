import React, { useState, useEffect } from 'react';


function Page4() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleClick = () => {
    const brand = localStorage.getItem('selectedBrand');
    const model = localStorage.getItem('selectedModel');
    const price = localStorage.getItem('selectedPrice');
    setSelectedBrand(brand); 
    setSelectedModel(model); 
    setSelectedPrice(price);
  };

  useEffect(() => {
    console.log(selectedBrand);
    console.log(selectedModel);
    console.log(selectedPrice);
  }, [selectedBrand, selectedModel, selectedPrice]);

  return (
    <div>
      <h1>Page 4</h1>
      <button onClick={handleClick}>Calculate</button>
      <p>Selected Brand: {selectedBrand}</p>
      <p>Selected Model: {selectedModel}</p>
      <p>Selected Price: {selectedPrice}</p>
    </div>
  );
}

export default Page4;
