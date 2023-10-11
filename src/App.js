import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='Bookingpage' element={<BookingPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
