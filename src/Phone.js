import React from 'react'



const Phone = ({time}) =>{
    return(

       

        <div className="Phone">
            <div className="square">
               <div>
                   <p className="numbers">{time.hrs.toString().padStart(2,'0')}</p>
                    <p className="text"> Hours</p>
               </div>
               <p> : </p>
               <div>
                    <p className="numbers">{time.mins.toString().padStart(2,'0')}</p>
                    <p className="text"> Minutes</p>
               </div>
               <p> : </p>
               <div>
                   <p className="numbers">{time.secs.toString().padStart(2,'0')}</p>
                    <p className="text"> Seconds</p>
               </div>

            </div>

            <div className="buttons">
            
                  <button type="button" className="btn btn-outline" onClick="SetTime()"> Start </button>
                  <button type="button" className="btn btn-outline"type="Reset">Reset</button>
            
            </div>

         </div>
         
              
    )

}



export default Phone