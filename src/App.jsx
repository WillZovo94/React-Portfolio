import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './App.css'
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Portfolio" element={<Portfolio />}></Route>
      <Route path="/Resume" element={<Resume />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
