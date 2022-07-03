import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Provide from './Components/Provide';
import TimeLine from './Components/TimeLine';

function App() {
  return (
    <div className='bg-[#1e2b47]'>
      <Navbar />
      <Banner />
      <TimeLine />
      <Provide />
      <About />
      <Footer />
    </div>
  );
}

export default App;
