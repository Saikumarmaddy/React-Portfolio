import React from 'react';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';
import Responsibilities from './components/responsibilities';
import NoMatch from './components/noMatch';

function App() {
  return (
    <div className="bg-bg-pattern w-full h-full bg-cover bg-center bg-fixed">
      <Navbar />
      <Routes>
        <Route path='/React-Portfolio' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/responsibilities' element={<Responsibilities />} />
        <Route path='/get-in-touch' element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
