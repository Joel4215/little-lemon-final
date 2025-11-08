import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import About from './Main-Sections/About';
import Specials from './Main-Sections/Specials';
import Testimonials from './Main-Sections/Testimonials';

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
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
