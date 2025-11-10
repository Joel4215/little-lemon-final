import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import About from './Main-Sections/About';
import Specials from './Main-Sections/Specials';
import Testimonials from './Main-Sections/Testimonials';
import BookiingPage from './Booking/BookingPage';
import ConfirmedBooking from './Booking/ConfirmedBooking';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/reservations" element={<BookiingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
