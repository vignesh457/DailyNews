import React from 'react';
import "./style/card.css"
import icon from "./images/clock.png";

const Card = (props)=>{
    return (
        <div className="Card">
            <div className='ImagePart'>
                <img src={props.image} alt="poster" />
            </div>
            <div className='ContentPart'>
                <div className='TopContent'>
                    <div className='TitlePart'><div><h2>{props.title}</h2></div></div>
                    <div className='TextPart'><div><h3>{props.text}</h3></div></div>
                </div>
                <div className='BottomContent'>
                    <div className='Publisher'><img src={icon} alt="-" /> {props.time} <br/> {props.date}</div>
                    <div><a type="button" href={props.link} rel="noreferrer" target="_blank" className="btn btn-info btn-sm">Read More</a></div>
                </div>
            </div>
        </div>
    );
}
export default Card;