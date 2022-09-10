import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
