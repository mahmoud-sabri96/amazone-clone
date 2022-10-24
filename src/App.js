import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';


function App() {

  const [showUpBtn, setShowUpBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowUpBtn(true);
      } else {
        setShowUpBtn(false);
      }
    });
  }, [setShowUpBtn]);

  const upHandler = () => {
    window.scrollTo(0, 0);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {showUpBtn && <div className='up position-fixed' onClick={upHandler}>up</div>}
    </BrowserRouter>
  );
}

export default App;
