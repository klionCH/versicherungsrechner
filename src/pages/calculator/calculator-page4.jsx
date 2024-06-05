import React, { useState, useEffect } from 'react';


function Page4() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleClick = () => {
    const brand = localStorage.getItem('selectedBrand');
    const model = localStorage.getItem('selectedModel');
    setSelectedBrand(brand); 
    setSelectedModel(model); 
  };

  useEffect(() => {
    console.log(selectedBrand);
    console.log(selectedModel);
  }, [selectedBrand, selectedModel]);

  return (
    <div>
      <h1>Page 4</h1>
      <button onClick={handleClick}>Calculate</button>
      <p>Selected Brand: {selectedBrand}</p>
      <p>Selected Model: {selectedModel}</p>
    </div>
  );
}

export default Page4;
