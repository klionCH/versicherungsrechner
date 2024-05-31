import './App.css';
import Calculator from './pages/calculate';
import Page1 from './pages/calculator/calculator-page1';
import Page2 from './pages/calculator/calculator-page2';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/calculate" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
