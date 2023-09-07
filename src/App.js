import logo from './logo.svg';
import './App.css';
import CarouselComponent from './components/Carousel';
import LandingOverlay from './components/LandingOverlay'
import CountdownTimer from './components/CountdownTimer/CountdownTimer';


function App() {
  return (
    <>
    
    <LandingOverlay />
    <CarouselComponent />
    <CountdownTimer countdownTimestampMs={1700784000000}/>
    </>
  );
}

export default App;
