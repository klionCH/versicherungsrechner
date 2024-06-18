import './App.css';
import Calculator from './pages/calculate';
import Compaire from './pages/compaire';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/calculate" element={<Calculator />} />
            <Route path="/compaire" element={<Compaire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
