import './App.css';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
// import NavbarComponent from './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="">
      {/* <NavbarComponent /> */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
