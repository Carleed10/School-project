import React from 'react'
import CalenderLayout from '../Layouts/Calenderlayout'
import '../Calender3.css'
import { Icon } from '@iconify/react';

const Calender3 = () => {
  return (
    <CalenderLayout>
    <div className="bg-cover">
        <div className="div-cover">
            <div className="nav">
                <div className="text">
                    <button>Calender <Icon icon="ep:arrow-right" color="black" width="15" /></button>
                    <button>School calender</button>
                </div>


                <div className="addevent">
                    <button style={{backgroundColor: '#147fe4', padding:'10px 15px', color: 'white'}}><Icon icon="memory:plus" color="white" width="20" /> Add event</button>
                    <button style={{backgroundColor: 'white', padding:'10px 15px', color: '#147fe4'}} >View result</button>
                </div>
            </div>


            <div className="calender-div">

                <div className="calender-top">
                    <div className='date'><button><Icon icon="material-symbols:arrow-right" color="black" width="20" hFlip={true} /></button> <span>October 8 2023 - October 14 2023  </span> <button> <Icon icon="material-symbols:arrow-right" color="black" width="20" /></button></div>
                     <div className='month'>
                     <select style={{border: 'none', marginLeft: '20px'}} name="" id="">
                     <option value="">Monthly</option>
                        <option value="">November</option>
                        <option value="">December</option>
                     </select>
                     </div>                  
                </div>

                <div className="calender-next">
                <span style={{display: 'flex', gap: '10px'}}> <div style={{width: '10px', height: '10px', borderRadius: '2px', marginTop: '2px', backgroundColor: 'green'}}></div>  <h4>School activity</h4> </span>
                <span style={{display: 'flex', gap: '10px'}}> <div style={{width: '10px', height: '10px', borderRadius: '2px', marginTop: '2px', backgroundColor: 'purple'}}></div>  <h4>Events</h4> </span>
                <span style={{display: 'flex', gap: '10px'}}> <div style={{width: '10px', height: '10px', borderRadius: '2px', marginTop: '2px', backgroundColor: 'rgb(13,110,253)'}}></div>  <h4>Holidays</h4> </span>
            
                </div>


                <div className="calender3">

                    <table className='tables' >
                    <thead style={{borderBottom: '2px solid whitesmoke'}}>
    <th style={{height: '45px'}}>    </th>
   
  </thead>   
                        
  <thead style={{borderBottom: '2px solid whitesmoke'}}>
    <th></th>
   
  </thead>   
  <tbody>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
            <td className='td'><div className='td-div2'> <h6>Sunday</h6>
            <h6>8th October</h6>
            </div></td>           
        </tr>

        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}> 
            <td className='td'><div className='td-div2'> <h6>Monday</h6>
            <h6>9th October</h6></div></td>
           
        </tr>
        <tr className='tr' style={{margin: '4px 0px',
         borderBottom: '2px solid whitesmoke'}}>
            <td className='td'><div className='td-div2'> <h6>Tuesday</h6>
            <h6>10th October</h6></div></td>           
        </tr>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
            <td className='td'><div className='td-div2'> <h6>Wednesday</h6>
            <h6>11th October</h6></div></td>
                     
        </tr>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
            <td className='td'><div className='td-div2'> <h6>Thursday</h6>
            <h6>12th October</h6></div></td>
                         
        </tr>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
            <td className='td'><div className='td-div2'> <h6>Friday</h6>
            <h6>13th October</h6></div></td>
                         
        </tr>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
            <td className='td'><div className='td-div2'> <h6>Saturday</h6>
            <h6>14th October</h6></div></td>
                         
        </tr>

  </tbody>
</table>



<div className="table-div">



<table className='tables' >
<thead style={{borderBottom: '2px solid whitesmoke'}}>
    <th style={{height: '40px'}}>8:00</th>
    <th style={{height: '40px'}}>9:00</th>
    <th style={{height: '40px'}}>10:00</th>
    <th style={{height: '40px'}}>11:00</th>
    <th style={{height: '40px'}}>12:00</th>
    <th style={{height: '40px'}}>13:00</th>
    <th style={{height: '40px'}}>14:00</th>
    <th style={{height: '40px'}}>15:00</th>
    <th style={{height: '40px'}}>16:00</th>

    

   
  </thead> 


  <thead style={{borderBottom: '2px solid whitesmoke'}}>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    

   
  </thead>   
  <tbody>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
            <td className='td'></td>
            <td className='td'></td>      
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>  
            <td className='td'></td>     
            <td className='td'></td>     

                           

        </tr>

        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}> 
        <td className='td'></td>
            <td className='td'></td>      
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>  
            <td className='td'></td>     
            <td className='td'></td>     
           
        </tr>
        <tr className='tr' style={{margin: '4px 0px',
         borderBottom: '2px solid whitesmoke'}}>
            <td className='td'></td>
            <td className='td'></td>      
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>   
            <td className='td'></td>     
            <td className='td'></td>             
        </tr>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
        <td className='td'></td>
            <td style={{backgroundColor: '#e9f8e9', borderLeft: '4px solid #92d691' }} className='td'>
               <div style={{color: '#92d691'}} className="t-div">
               <h6>Sports</h6>
                <h6>9:00 - 11:00</h6>
               </div>

                </td>      
            <td style={{backgroundColor: '#e9f8e9'}} className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td> 
            <td className='td'></td>     
            <td className='td'></td>      
                     
        </tr>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
        <td className='td'></td>
            <td className='td'></td>      
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>   
            <td  className='td'></td>     
            <td className='td'></td>    
                         
        </tr>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
        <td className='td'></td>
            <td className='td'></td>      
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>           
            <td className='td'></td>   
            <td className='td'></td>     
            <td className='td'></td>    
                         
        </tr>
        <tr className='tr' style={{borderBottom: '2px solid whitesmoke'}}>
        <td className='td'></td>
            <td className='td'></td>      
            <td style={{backgroundColor: '#eee5ff' , borderLeft: '4px solid #a57bff'}} className='td'>
            <div style={{color: '#a57bff'}} className="t-div">
               <h6>PTA Meeting</h6>
                <h6>10:00 - 14:00</h6>
               </div>
                
                </td>           
            <td style={{backgroundColor: '#eee5ff'}} className='td'></td>           
            <td style={{backgroundColor: '#eee5ff'}} className='td'></td>           
            <td style={{backgroundColor: '#eee5ff'}} className='td'></td>           
            <td className='td'></td>  
            <td className='td'></td>     
            <td className='td'></td>     
                         
        </tr>

  </tbody>
</table>





</div>












            </div>
                
            </div>


            

        </div>


        
    </div>

</CalenderLayout>
  )
}

export default Calender3