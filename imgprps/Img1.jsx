import React from 'react';

const Img1 = (props) => {
    return (
        <>
        <br />
        <img style={{height:'300px'}} src={props.data} alt="" />
        <h1>{props.kavya}</h1>
        </>
    );
}

export default Img1;
