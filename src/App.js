import './style/App.css'
import Nav from "./Nav";
import NewsBox from "./NewsBox";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './Footer';

export default function App() {
  return (
    <div className="outerContainer">
      <Nav/>
        <Routes>
          <Route path="/" element={<div className="innerContainer"><NewsBox key='1' category=''/></div>} />
          <Route path="/business" element={<div className="innerContainer"><NewsBox key='2' category='business'/></div>} />
          <Route path="/sports" element={<div className="innerContainer"><NewsBox key='3' category='sports'/></div>} />
          <Route path="/world" element={<div className="innerContainer"><NewsBox key='4' category='world'/></div>} />
          <Route path="/politics" element={<div className="innerContainer"><NewsBox key='5' category='politics'/></div>} />
          <Route path="/technology" element={<div className="innerContainer"><NewsBox  key='6'category='technology'/></div>} />
          <Route path="/startup" element={<div className="innerContainer"><NewsBox key='7' category='startup'/></div>} />
          <Route path="/entertainment" element={<div className="innerContainer"><NewsBox key='8' category='entertainment'/></div>} />
          <Route path="/science" element={<div className="innerContainer"><NewsBox key='9' category='science'/></div>} />
          <Route path="/automobile" element={<div className="innerContainer"><NewsBox key='10' category='automobile'/></div>} />
        </Routes>
      <Footer/>
    </div>
  )
}
