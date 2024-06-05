import { useEffect, useState } from "react";
import data from "../../data/cars.json";

function Page1() {

  const [carData, setCarData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [uniqueModels, setUniqueModels] = useState([]);

  useEffect(() => {
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
    setSelectedBrand(e.target.value);
  };

  return (
    <>
      <form>
        <div className="relative z-0 w-full mb-5 group">
          <select
            name="car-brand"
            id="car-brand"
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

        <div className="relative z-0 w-full mb-5 group">
          <select
            name="model"
            id="model"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          >
            <option value="">Select Model</option>
            {uniqueModels.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
          <label
            htmlFor="model"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            model
          </label>
        </div>
      
      </form>
      <button onClick={() => console.log(data)}>Data</button>
    </>
  );
}

export default Page1;
