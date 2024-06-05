import { useState } from "react";

function Page1() {
  const [marke, setMarke] = useState("");
  const [modell, setModell] = useState("");
  const [baujahr, setBaujahr] = useState("");
  const [kilometerstand, setKilometerstand] = useState("");
  const [leistung, setLeistung] = useState("");


  const carBrands = [
    { value: "-", factor: 1 },
    { value: "Acura", factor: 1 },
    { value: "Alfa Romeo", factor: 1 },
    { value: "Aston Martin", factor: 1 },
    { value: "Audi", factor: 1 },
    { value: "Bentley", factor: 1 },
    { value: "BMW", factor: 1 },
    { value: "Bugatti", factor: 1 },
    { value: "Buick", factor: 1 },
    { value: "Cadillac", factor: 1 },
    { value: "Chevrolet", factor: 1 },
    { value: "Chrysler", factor: 1 },
    { value: "Citroën", factor: 1 },
    { value: "Dacia", factor: 1 },
    { value: "Daewoo", factor: 1 },
    { value: "Daihatsu", factor: 1 },
    { value: "Dodge", factor: 1 },
    { value: "Ferrari", factor: 1 },
    { value: "Fiat", factor: 1 },
    { value: "Ford", factor: 1 },
    { value: "Genesis", factor: 1 },
    { value: "GMC", factor: 1 },
    { value: "Honda", factor: 1 },
    { value: "Hyundai", factor: 1 },
    { value: "Infiniti", factor: 1 },
    { value: "Jaguar", factor: 1 },
    { value: "Jeep", factor: 1 },
    { value: "Kia", factor: 1 },
    { value: "Lamborghini", factor: 1 },
    { value: "Lancia", factor: 1 },
    { value: "Land Rover", factor: 1 },
    { value: "Lexus", factor: 1 },
    { value: "Lincoln", factor: 1 },
    { value: "Maserati", factor: 1 },
    { value: "Mazda", factor: 1 },
    { value: "McLaren", factor: 1 },
    { value: "Mercedes-Benz", factor: 1 },
    { value: "Mini", factor: 1 },
    { value: "Mitsubishi", factor: 1 },
    { value: "Nissan", factor: 1 },
    { value: "Opel", factor: 1 },
    { value: "Peugeot", factor: 1 },
    { value: "Porsche", factor: 1 },
    { value: "Ram", factor: 1 },
    { value: "Renault", factor: 1 },
    { value: "Rolls-Royce", factor: 1 },
    { value: "Saab", factor: 1 },
    { value: "Seat", factor: 1 },
    { value: "Skoda", factor: 1 },
    { value: "Smart", factor: 1 },
    { value: "Subaru", factor: 1 },
    { value: "Suzuki", factor: 1 },
    { value: "Tesla", factor: 1 },
    { value: "Toyota", factor: 1 },
    { value: "Volkswagen", factor: 1 },
    { value: "Volvo", factor: 1 },
  ];

  return (
    <>
      <form>
        <div class="relative z-0 w-full mb-5 group">
          <select
            type="text"
            name="car-brand"
            id="car-brand"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:bg-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          >
            {carBrands.map((carBrand) => (
                <option value={carBrand.value}>{carBrand.value}</option>
            ))}
          </select>
          <label
            for="car-brand"
            class="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Auto Marke
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="model" id="model" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model</label>
          </div>
      
      </form>
    </>
  );
}

export default Page1;
