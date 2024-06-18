import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/style.css';

function Compaire() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(storedHistory);
  }, []);

    const reset = () => {
        localStorage.removeItem('history');
        setHistory([]);
        localStorage.clear();
    }

  return (
    <div className="bg font-mono text-xl">
        <div className='min-h-screen bg-neutral-900/50 grid place-content-center grid-cols-1 gap-4 p-8'>
        <h1 className="text-white text-4xl text-center mb-8">Vergleichen</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {history.map((item, index) => (
          <div key={index} className="relative p-6 bg-gray-800 shadow-2xl rounded-xl shadow-zinc-900">
            <h2 className="text-xl font-semibold text-white mb-2">{item.selectedBrand} {item.selectedModel}</h2>
            <p className="text-2xl text-emerald-400 mb-4">Calculated Insurance per year: {item.calculatedPrice}</p>
            <p className="text-white mb-4">Year of the Car: {item.selectedYear}</p>
            <p className="text-white mb-4">Is a Garage available: {item.selectedGarage}</p>
            <p className="text-white mb-4">The Age of the driver: {item.selectedAge}</p>
            <p className="text-white mb-4">KM driven per year: {item.selectedReach}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={reset} className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-black/10">
            <span>Reset</span>

          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
        <Link to="/" className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-black/10">
            <span>Zurück</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6">
              <path fillRule="evenodd" d="M11.78 14.78a.75.75 0 0 1-1.06 0L6.47 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 1 1 1.06 1.06L8.31 10l3.47 3.47a.75.75 0 0 1 0 1.06z" clipRule="evenodd"></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </Link>
      </div>
        </div>
      
    </div>
  );
  
}

export default Compaire;
