import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import './App.css';
import Router from './routes';
import AdSenseComponent from './components/AdSense/AdsenseComponent';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="alignment">
   <HelmetProvider>
    <BrowserRouter >
    <div className="h100">
      <Navbar />
      <Router />
    </div>
      {/* <AdSenseComponent adSlot="9805664252" /> */}
    </BrowserRouter>
   </HelmetProvider>
   <Footer/>
    </div>
  );
}

export default App;
