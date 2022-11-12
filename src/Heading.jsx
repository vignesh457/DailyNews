import React from 'react';

const Heading = (props)=>{
    let str = (props.category.length===0)?"Top Stories":`${props.category} Headlines`;
    str=str[0].toUpperCase()+str.slice(1);
    return(
        <h1 style={{color:"white",position: "absolute",top: "100px",fontFamily: "'Public Sans', sans-serif", letterSpacing:"2.8px"}}>{str}</h1>
    );
}

export default Heading;