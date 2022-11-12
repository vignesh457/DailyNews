import React,{useState} from 'react';
import logo from './images/news.png';
import './style/nav.css';
import {
  Link
} from "react-router-dom";
const Nav = () => {
  const [toggle, settoggle] = useState("collapse navbar-collapse")
  const myStyle = {
    zIndex: "1", position: "fixed", top: "0", background: "rgba(7, 7, 7, 0.65)", backdropFilter: "blur(12px)", padding: "10px", boxShadow: "0px 0px 7px rgba(0,179,250,0.2)"
  }
  const selectHandle=(event)=>{
    unhighlight();
    event.target.style.backgroundColor= "rgba(0, 179, 250,0.2)";
    event.target.style.borderRadius="3px";
    settoggle("collapse navbar-collapse");
  }
  const unhighlight = ()=>{
    Array.from(document.getElementsByClassName("nav-link")).forEach(element => {
       element.style.backgroundColor= "rgba(0, 179, 250,0)";
    });
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light py-0">
      <div className="container-fluid" style={myStyle}>
        <Link className="navbar-brand" to="./"><img src={logo} alt='news' /><span className="logoText">Daily news</span></Link>
        {/* search-bar can be added */}
        <button className="navbar-toggler" type="button" onClick={()=>{settoggle("collapse navbar-collapse show");}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${toggle}`} id="navbarSupportedContent">
          {/* collapse navbar-collapse */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./">Home</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./business">Business</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./sports">Sports</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./world">World</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./politics">Politics</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./technology">Technology</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./startup">Startup</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./entertainment">Entertainment</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./science">Science</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" onClick={selectHandle} to="./automobile">Automobile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;