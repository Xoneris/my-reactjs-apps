import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import Calculator from './pages/Calculator/Calculator';



function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/calculator" element={<Calculator />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
