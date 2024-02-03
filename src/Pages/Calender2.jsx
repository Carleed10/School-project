import React from 'react'
import CalenderLayout from '../Layouts/Calenderlayout'
import '../Calender2.css'
import { Icon } from '@iconify/react';


const Calender2 = () => {
  return (
    <CalenderLayout>
    <div className="bg-cover">
   

      <div className="div-cover">
            <div className="nav">
                <div className="text">
                    <button>Calender <Icon icon="ep:arrow-right" color="black" width="15" /></button>
                </div> 
            </div>

            <div className="div-flex">
            <div className="calender-div2">

                <div className="calender-top">
                    <div className='date'><button><Icon icon="material-symbols:arrow-right" color="black" width="20" hFlip={true} /></button> <span>October 2023</span> <button> <Icon icon="material-symbols:arrow-right" color="black" width="20" /></button></div>              
                </div>

                <div className="calender-next">
                <span style={{display: 'flex', gap: '10px'}}> <div style={{width: '10px', height: '10px', borderRadius: '2px', marginTop: '2px', backgroundColor: 'green'}}></div>  <h4>School activity</h4> </span>
                <span style={{display: 'flex', gap: '10px'}}> <div style={{width: '10px', height: '10px', borderRadius: '2px', marginTop: '2px', backgroundColor: 'purple'}}></div>  <h4>Events</h4> </span>
                <span style={{display: 'flex', gap: '10px'}}> <div style={{width: '10px', height: '10px', borderRadius: '2px', marginTop: '2px', backgroundColor: 'rgb(13,110,253)'}}></div>  <h4>Holidays</h4> </span>
            
                </div>


                <div className="calender">

                <table>
      <thead style={{borderBottom: '2px solid whitesmoke'}}>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thur</th>
        <th>Fri</th>
        <th>Sat</th>
      </thead>   
      <tbody>
            <tr style={{borderBottom: '2px solid whitesmoke'}}>
                <td><div className='td-div'> <p>1</p></div></td>
                <td><div className='td-div'> <p>2</p></div></td>
    
                <td style={{backgroundColor: '#d1e5fa', borderLeft: '4px solid #147fe4'}}><div className='td-div'> <p style={{color: '#147fe4'}}>3</p>
                    <h6 style={{textAlign: 'start', color: '#147fe4'}}>Eid-el Fitir</h6>
                </div></td>
                <td style={{backgroundColor: '#d1e5fa'}}><div className='td-div' > <p style={{color: '#147fe4'}}>4</p> </div></td>
                <td><div className='td-div' > <p>5</p></div></td>
                <td><div className='td-div'> <p>6</p></div></td>
                <td><div className='td-div'> <p>7</p></div></td>              
            </tr>

            <tr style={{borderBottom: '2px solid whitesmoke'}}> 
                <td><div className='td-div'> <p>8</p></div></td>
                <td><div className='td-div'> <p>9</p></div></td>
                <td><div className='td-div'> <p>10</p></div></td>
                <td><div className='td-div'> <p>11</p>
                </div></td>
                <td><div className='td-div'> <p>12</p></div></td>
                <td><div className='td-div'> <p>13</p></div></td>
                <td><div className='td-div'> <p>14</p>
                </div>
                </td>              
            </tr>
            <tr style={{margin: '4px 0px',
             borderBottom: '2px solid whitesmoke'}}>
                <td><div className='td-div'> <p>15</p></div></td>
                <td><div className='td-div'> <p>16</p></div></td>
                <td><div className='td-div'> <p>17</p></div></td>
                <td><div className='td-div'> <p>18</p></div></td>
                <td style={{backgroundColor: '#eee5ff', borderLeft: '4px solid #a57bff'}}><div className='td-div'> <p style={{color: '#a57bff'}}>19</p>
                <h6 style={{textAlign: 'start', color: '#a57bff'}}>Vacation</h6>
                </div>
                </td>
                <td><div className='td-div'> <p>20</p></div></td>
                <td><div className='td-div'> <p>21</p></div></td>              
            </tr>
            <tr style={{borderBottom: '2px solid whitesmoke'}}>
                <td><div className='td-div'> <p>22</p></div></td>
                <td><div className='td-div'> <p>23</p></div></td>
                <td><div className='td-div'> <p>24</p></div></td>
                <td><div className='td-div'> <p>25</p></div></td>
                <td><div className='td-div'> <p>26</p></div></td>
                <td><div className='td-div'> <p>27</p></div></td>
                <td><div className='td-div'> <p>28</p></div></td>              
            </tr>
            <tr>
                <td><div className='td-div'> <p>29</p></div></td>
                <td><div className='td-div'> <p>30</p></div></td>
                <td><div className='td-div'> <p>31</p></div></td>
                <td><div className='td-div'> <p style={{color: 'rgba(0, 0, 0, 0.315)'}} >1</p></div></td>
                <td><div className='td-div'> <p style={{color: 'rgba(0, 0, 0, 0.315)'}}>2</p></div></td>
                <td><div className='td-div'> <p style={{color: 'rgba(0, 0, 0, 0.315)'}}>3</p></div></td>
                <td><div className='td-div'> <p style={{color: 'rgba(0, 0, 0, 0.315)'}}>4</p></div></td>              
            </tr>

      </tbody>
    </table>


            </div>
                
            </div>


            <div className="beside">
                <div className="side-flex">

                <div className="birthday">
                <h6 style={{fontWeight: '900'}}>Birthday</h6>
                <hr />
    <h2><b>26</b></h2>
    <h6>-3 from last month</h6>
                </div>

        <div className="events">
        <h6 style={{fontWeight: '900'}}>Events</h6>
                <hr />
        <h2><b>20</b></h2>
    <h6>+3 from last month</h6>
            </div>

                </div>


        <div className="this-month">
        <h6 style={{fontWeight: '900', marginBottom: '40px'}}>This Month</h6>

            <div style={{borderLeft: '4px solid #147fe4'}} className="holidays">                
                    <div style={{marginLeft: '15px'}} className="type">
                    <h6 style={{fontWeight: '600'}}>Eid-il-Fitri holiday</h6>
                    <h6>2-3 October 2023</h6>
                    </div>
            </div>

            <div style={{borderLeft: '4px solid #147fe4'}} className="holidays">                
                    <div style={{marginLeft: '15px'}} className="type">
                    <h6 style={{fontWeight: '600'}}>Vacation</h6>
                    <h6>2-3 October 2023</h6>
                    </div>
            </div>

            <div style={{borderLeft: '4px solid black'}} className="holidays">                
                    <div style={{marginLeft: '15px'}} className="type">
                    <h6 style={{fontWeight: '600'}}>Resumption & Orientation</h6>
                    <h6>2-3 October 2023</h6>
                    </div>
            </div>

        </div>


        
        <div className="october">
            <h6 style={{fontWeight: '900', marginBottom: '40px'}}>Birthday in October</h6>

            <div className="celebrant">
                <div className="student-picture">

                </div>
                
                <div className="name">
                    <span style={{display: 'flex'}}><h6><b>Sharon Ojo</b></h6> <h6 style={{marginLeft: '15px'}}>JSS2A</h6> </span>
                    <h6>3 October 2023</h6>
                </div>
            </div>


            <div className="celebrant">
                <div className="student-picture">

                </div>
                
                <div className="name">
                    <span style={{display: 'flex'}}><h6><b>Bolanle Ahmed</b></h6> <h6 style={{marginLeft: '15px'}}>JSS2A</h6> </span>
                    <h6>3 October 2023</h6>
                </div>
            </div>



            <div className="celebrant">
                <div className="student-picture">

                </div>
                
                <div className="name">
                    <span style={{display: 'flex'}}><h6><b>Sharon Ojo</b></h6> <h6 style={{marginLeft: '15px'}}>JSS2A</h6> </span>
                    <h6>3 October 2023</h6>
                </div>
            </div>



        </div>

        </div>
     

        </div>

        

      </div>


        
    </div>

</CalenderLayout>
  )
}

export default Calender2