import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='Bookingpage' element={<BookingPage />} />
        <Route path='ConfirmedBooking' element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
