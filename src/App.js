import React from 'react';
import NavbarTop from './components/navbar_top';
import NavbarBottom from './components/navbar_bottom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';
import NoMatch from './components/noMatch';
import Footer from './components/footer';
// import Responsibilities from './components/responsibilities';

function App() {
  return (
    <div className="bg-bg-pattern w-full h-full bg-cover bg-center bg-fixed">
      <NavbarTop />
      <NavbarBottom />
      <Routes>
        <Route path='/React-Portfolio' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        {/* <Route path='/responsibilities' element={<Responsibilities />} /> */}
        <Route path='/get-in-touch' element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
