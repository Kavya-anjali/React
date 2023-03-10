import React from 'react';
import pushpa from "./hi.JPG"
import Img1 from './Img1';

const Img = () => {
    return (
        <>
        <h1>Happy Womens Day Kavya</h1>
        <img src="https://th.bing.com/th/id/OIP.9_sK17-hvIPB4pRr4hB30AHaEK?pid=ImgDet&rs=1" alt="" />
        <br />
        <img style={{height:'300px'}} src={pushpa} alt="" />
        <Img1 data={pushpa}  />
        <Img1 kavya= <img src="https://th.bing.com/th/id/OIP.9_sK17-hvIPB4pRr4hB30AHaEK?pid=ImgDet&rs=1" alt="" />  />
        </>
    );
}

export default Img;
