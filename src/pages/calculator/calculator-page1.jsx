import "../style/style.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';

function Page1() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleBack = () => {
        if (tabIndex > 0) {
            setTabIndex(tabIndex - 1);
        }
    };

    const handleNext = () => {
        if (tabIndex < 3) { // Adjusted to allow switching to the third tab when index is less than 2
            setTabIndex(tabIndex + 1);
        }
    };

    return (
        <div className="bg">
            <div className="w-screen bg-neutral-900/50 h-screen grid grid-cols-4 gap-4">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="col-start-2 col-span-2">
                    <TabList className="grid grid-cols-4 gap-4 mt-20 ">
                        <Tab className={`focus:outline-none ${tabIndex === 0 ? 'bg-indigo-600' : 'bg-indigo-500'} rounded-full`}>
                            <div className="aspect-square w-56 text-white flex items-center justify-center cursor-pointer">
                                Tab1
                            </div>
                        </Tab>
                        <Tab className={`focus:outline-none ${tabIndex === 1 ? 'bg-indigo-600' : 'bg-indigo-500'} rounded-full`}>
                            <div className="aspect-square w-56 text-white flex items-center justify-center rounded-full cursor-pointer">
                                Page 2
                            </div>
                        </Tab>
                        <Tab className={`focus:outline-none ${tabIndex === 2 ? 'bg-indigo-600' : 'bg-indigo-500'} rounded-full`}>
                            <div className="aspect-square w-56 text-white flex items-center justify-center rounded-full cursor-pointer">
                                Page 3
                            </div>
                        </Tab>
                        <Tab className={`focus:outline-none ${tabIndex === 3 ? 'bg-indigo-600' : 'bg-indigo-500'} rounded-full`}>
                            <div className="aspect-square w-56 text-white flex items-center justify-center rounded-full cursor-pointer">
                                Page 4
                            </div>
                        </Tab>

                    </TabList>
                    <TabPanel>
                        <div className="mt-4 text-white">Content for Tab 1</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-4 text-white">Content for Page 2</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-4 text-white">Content for Page 3</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-4 text-white">Content for Page 4</div>
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
}

export default Page1;
