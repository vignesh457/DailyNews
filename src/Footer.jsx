import React from 'react';
// import github from './images/github.svg';
const Footer = ()=>{
    const date = new Date();
    return(
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0"></div>
            <div className="text-secondary text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © {date.getFullYear()} Copyright:&nbsp; 
                <a className="text-secondary" href="https://vignesh457.github.io/portfolio/" target="_blank" rel="noreferrer">@Vigneshwar</a>
            </div>
        </footer>
    );
}

export default Footer;