import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import CareerPage from './components/Pages/CareerPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import Layout from './components/Layout';
import './styles/global.css';
import DigitalMarketing from './components/Pages/Services';
import TermsOfService from './components/Pages/TermsOfService';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
          key={2}
            path="services"
            element={<DigitalMarketing />}
          />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
