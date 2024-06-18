import { Link } from "react-router-dom";
import './style/style.css';

function Home() {
  return (
    <>
        <div className="bg font-mono">
          <div className="w-screen bg-neutral-900/50 h-screen grid place-content-center grid-cols-6 gap-4">
            <h1 className="text-white text-4xl col-start-2 col-span-4 text-center">Versicherungsrechner</h1>
            
            <Link to="/calculate" class="col-start-3 col-end-3 relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                    class="absolute inset-0 overflow-hidden rounded-xl"><span
                        class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    </span>
                </span>
                <div
                    class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-black/10 ">
                    <span>Rechner</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        data-slot="icon" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <span
                    class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </Link>
            <Link to="/compaire" class="col-end-5 col-span-1 relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                    class="absolute inset-0 overflow-hidden rounded-xl"><span
                        class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    </span>
                </span>
                <div
                    class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-black/10 ">
                    <span>Vergleichen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        data-slot="icon" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <span
                    class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </Link>
          </div>
        </div> 
    </>
  );
}

export default Home;
