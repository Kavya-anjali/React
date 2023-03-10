import React from 'react';

const Main = (props) => {
    console.log(props);
    return (
        <div>
       
      <div id="navimg"> 
              
              <div id='mad' > 
                  
                <div id='roy'>
                <img src={props.hari[0].Photo} alt="" />   
              <h2>{props.hari[0].name}</h2>
                  <h2>{props.hari[0].Qualification}</h2>
                  <h2>{props.hari[0].phnNo}</h2>
                 <h2>{props.hari[0].YOP}</h2>
                 </div> 
             </div>

            

             <div id='mad'> 
             <div id='roy'>
             <img src={props.hari[1].Photo} alt="" /> 
             <h2>{props.hari[1].name}</h2>
             <h2>{props.hari[1].Qualification}</h2>
             <h2>{props.hari[1].phnNo}</h2>
             <h2>{props.hari[1].YOP}</h2>
 </div></div>

             <div id='mad'> 
             <div id='roy'>

             < img src={props.hari[2].Photo} alt="" />
            
              <h2>{props.hari[2].name}</h2>
             <h2>{props.hari[2].Qualification}</h2>
             <h2>{props.hari[2].phnNo}</h2>
              <h2>{props.hari[2].YOP}</h2>
             </div>            </div>

            
             <div id='mad'>
             <div id='roy'>
 
              < img src={props.hari[3].Photo} alt="" />
            
            <h2>{props.hari[3].name}</h2>
            <h2>{props.hari[3].Qualification}</h2>
            <h2>{props.hari[3].phnNo}</h2>
            <h2>{props.hari[3].YOP}</h2>
            </div>            </div>



            <div id='mad'> 
            <div id='roy'>

         < img src={props.hari[4].Photo} alt="" />
            
            <h2>{props.hari[4].name}</h2>
            <h2>{props.hari[4].Qualification}</h2>
            <h2>{props.hari[4].phnNo}</h2>
            <h2>{props.hari[4].YOP}</h2>
            </div>            </div>


            <div id='mad'> 
            <div id='roy'>

          < img src={props.hari[5].Photo} alt="" /> 
            
            <h2>{props.hari[5].name}</h2>
            <h2>{props.hari[5].Qualification}</h2>
            <h2>{props.hari[5].phnNo}</h2>
            <h2>{props.hari[5].YOP}</h2>
            </div>            </div>


            <div id='mad'> 
            <div id='roy'>

          <img src={props.hari[6].Photo} alt="" />
            
            <h2>{props.hari[6].name}</h2>
            <h2>{props.hari[6].Qualification}</h2>
            <h2>{props.hari[6].phnNo}</h2>
            <h2>{props.hari[6].YOP}</h2>
            </div> </div>

            <div id='mad'> 
            <div id='roy'>

           <img src={props.hari[7].Photo} alt="" />
            
            <h2>{props.hari[7].name}</h2>
            <h2>{props.hari[7].Qualification}</h2>
            <h2>{props.hari[7].phnNo}</h2>
            <h2>{props.hari[7].YOP}</h2>
            </div>  </div>



            <div id='mad'> 
            <div id='roy'>

            <img src={props.hari[8].Photo} alt="" />
            
            <h2>{props.hari[8].name}</h2>
            <h2>{props.hari[8].Qualification}</h2>
            <h2>{props.hari[8].phnNo}</h2>
            <h2>{props.hari[8].YOP}</h2>
            </div>  </div>

            
<div id='mad'> 
<div id='roy'>


           <img src={props.hari[9].Photo} alt="" />
            
            <h2>{props.hari[9].name}</h2>
            <h2>{props.hari[9].Qualification}</h2>
            <h2>{props.hari[9].phnNo}</h2>
            <h2>{props.hari[9].YOP}</h2>
            </div>
            </div>
      </div>
      </div>
            
 
    );
}

export default Main;
