import { useState } from "react";

function Page1() {
  const [marke, setMarke] = useState("");
  const [modell, setModell] = useState("");
  const [baujahr, setBaujahr] = useState("");
  const [kilometerstand, setKilometerstand] = useState("");
  const [leistung, setLeistung] = useState("");

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
            <option value="-">-</option>
            <option value="Acura">Acura</option>
            <option value="Alfa Romeo">Alfa Romeo</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Audi">Audi</option>
            <option value="Bentley">Bentley</option>
            <option value="BMW">BMW</option>
            <option value="Bugatti">Bugatti</option>
            <option value="Buick">Buick</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Citroën">Citroën</option>
            <option value="Dacia">Dacia</option>
            <option value="Daewoo">Daewoo</option>
            <option value="Daihatsu">Daihatsu</option>
            <option value="Dodge">Dodge</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="Genesis">Genesis</option>
            <option value="GMC">GMC</option>
            <option value="Honda">Honda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Infiniti">Infiniti</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Jeep">Jeep</option>
            <option value="Kia">Kia</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Lancia">Lancia</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Lexus">Lexus</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Maserati">Maserati</option>
            <option value="Mazda">Mazda</option>
            <option value="McLaren">McLaren</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Mini">Mini</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Opel">Opel</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Porsche">Porsche</option>
            <option value="Ram">Ram</option>
            <option value="Renault">Renault</option>
            <option value="Rolls-Royce">Rolls-Royce</option>
            <option value="Saab">Saab</option>
            <option value="Seat">Seat</option>
            <option value="Skoda">Skoda</option>
            <option value="Smart">Smart</option>
            <option value="Subaru">Subaru</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Tesla">Tesla</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Volvo">Volvo</option>
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
