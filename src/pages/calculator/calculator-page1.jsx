import { useEffect, useState } from "react";
import data from "../../data/cars.json";

function Page1() {
  const [carData, setCarData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [uniqueModels, setUniqueModels] = useState([]);
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedBrand = localStorage.getItem('selectedBrand');
    const savedModel = localStorage.getItem('selectedModel');
    const savedPrice = localStorage.getItem('selectedPrice');

    if (savedBrand) {
      setSelectedBrand(savedBrand);
      setBrand(savedBrand);
    }

    if (savedModel) {
      setModel(savedModel);
      setPrice(savedPrice);
    }

    setCarData(data);
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      const models = carData.filter(car => car.Marke === selectedBrand).map(car => car.Modell);
      setUniqueModels([...new Set(models)]);
    } else {
      setUniqueModels([]);
    }
  }, [selectedBrand, carData]);

  const uniqueBrands = [...new Set(carData.map(car => car.Marke))];

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setBrand(brand);
    localStorage.setItem('selectedBrand', brand); // Save selected brand to localStorage
    setModel(''); // Clear model selection
    setPrice(''); // Clear price
    localStorage.removeItem('selectedModel'); // Remove model from localStorage
    localStorage.removeItem('selectedPrice'); // Remove price from localStorage
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setModel(model);
    localStorage.setItem('selectedModel', model); // Save selected model to localStorage
    
    // Update the price for the selected model
    const car = data.find(car => car.Modell === model);
    const carPrice = car ? car.Preis : '';
    setPrice(carPrice);
    localStorage.setItem('selectedPrice', carPrice); // Save selected price to localStorage
  };

  return (
    <>
      <div className="relative z-0 w-full mb-5 group">
        <select
          name="car-brand"
          id="car-brand"
          value={selectedBrand} // Set value attribute to maintain selected value
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:bg-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={handleBrandChange}
        >
          <option value="">Select Brand</option>
          {uniqueBrands.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>
        <label
          htmlFor="car-brand"
          className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Auto Marke
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group mt-10">
        <select
          name="model"
          id="model"
          value={model} // Set value attribute to maintain selected value
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:bg-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onChange={handleModelChange}
          required
        >
          <option value="">Select Model</option>
          {uniqueModels.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))}
        </select>
        <label
          htmlFor="model"
          className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Model
        </label>
      </div>

    </>
  );
}

export default Page1;
