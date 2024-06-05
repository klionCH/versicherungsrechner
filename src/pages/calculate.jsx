import "./style/style.css";
import Page1 from "./calculator/calculator-page1";
import Page2 from "./calculator/calculator-page2";
import Page3 from "./calculator/calculator-page3";
import Page4 from "./calculator/calculator-page4";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';

function Calculator() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleBack = () => {
        if (tabIndex > 0) {
            setTabIndex(tabIndex - 1);
        }
    };

    const handleNext = () => {
        if (tabIndex < 3) 
            setTabIndex(tabIndex + 1);
        }
    

    return (
        <div className="bg font-mono text-xl">
            <div className="w-screen bg-neutral-900/80 h-screen grid grid-cols-4 gap-4 pt-20 ">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="col-start-2 col-span-2 h-72 ">
                    <TabList className="grid grid-cols-4 gap-4 mt-20 col-start-1 col-span-4 place-items-center">
                        <Tab className={`focus:outline-none ${tabIndex === 0 ? 'bg-dark' : 'bg-light'} rounded-full w-20 2xl:w-40 aspect-square`}>
                            <div className="aspect-square text-white grid place-content-center cursor-pointer text-center">
                                1
                            </div>
                        </Tab>
                        <Tab className={`focus:outline-none ${tabIndex === 1 ? 'bg-dark' : 'bg-light'} rounded-full w-20 2xl:w-40 aspect-square`}>
                            <div className="aspect-square text-white grid place-content-center cursor-pointer">
                                2
                            </div>
                        </Tab>
                        <Tab className={`focus:outline-none ${tabIndex === 2 ? 'bg-dark' : 'bg-light'} rounded-full w-20 2xl:w-40 aspect-square`}>
                            <div className="aspect-square text-white grid place-content-center cursor-pointer">
                                3
                            </div>
                        </Tab>
                        <Tab className={`focus:outline-none ${tabIndex === 3 ? 'bg-dark' : 'bg-light'} rounded-full w-20 2xl:w-40 aspect-square`}>
                            <div className="aspect-square text-white grid place-content-center cursor-pointer">
                                4
                            </div>
                        </Tab>

                    </TabList>
                    <TabPanel className="">
                        <div className="mt-10 text-white h-56"><Page1></Page1></div>
                    </TabPanel>
                    <TabPanel className="bg-indigo-400">
                        <div className="mt-10 text-white h-40"><Page2></Page2></div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-10 text-white"><Page3></Page3></div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-10 text-white"><Page4></Page4></div>
                    </TabPanel>
                </Tabs>

                <div className="col-start-1 col-span-2 flex space-around place-content-center h-fit">
                    <button onClick={handleBack} className="col-start-3 col-end-3 relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                            className="absolute inset-0 overflow-hidden rounded-xl"><span
                                className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                            </span>
                        </span>
                        <div
                            className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-black/10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                data-slot="icon" className="w-6 h-6 -rotate-180">
                                <path fill-rule="evenodd"
                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Back</span>
                            
                        </div>
                        <span
                            className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                    </button>
                </div>


                <div className="col-start-3 col-span-2 flex space-around h-fit place-content-center">
                    <button onClick={handleNext} className="col-start-3 col-end-3 relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                        className="absolute inset-0 overflow-hidden rounded-xl"><span
                            className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                        </span>
                    </span>
                    <div
                        className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-black/10 ">
                        <span>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                            data-slot="icon" className="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <span
                        className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>
                </div>
            </div>

            
        </div>
    );
};
export default Calculator;