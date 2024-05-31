import './App.css';
import Calculator from './pages/calculate';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/calculate" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
