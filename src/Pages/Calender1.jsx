import React from 'react'
import CalenderLayout from '../Layouts/Calenderlayout'
import '../Calender1.css'
import { Icon } from '@iconify/react';



const Calender1 = () => {
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
                        <div className='date'><button><Icon icon="material-symbols:arrow-right" color="black" width="20" hFlip={true} /></button> <span>October 2023</span> <button> <Icon icon="material-symbols:arrow-right" color="black" width="20" /></button></div>
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
                <td style={{backgroundColor: '#e9f8e9', borderLeft: '4px solid #92d691'}} ><div className='td-div'> <p>11</p>
                <h6 style={{textAlign: 'start', color: '#92d691'}}>Sports</h6>
                </div></td>
                <td><div className='td-div'> <p>12</p></div></td>
                <td><div className='td-div'> <p>13</p></div></td>
                <td style={{backgroundColor: '#eee5ff', borderLeft: '4px solid #a57bff'}}><div className='td-div'> <p>14</p>
                <h6 style={{textAlign: 'start', color: '#a57bff'}}>PTA Meeting</h6> 
                </div>
                </td>              
            </tr>
            <tr style={{margin: '4px 0px',
             borderBottom: '2px solid whitesmoke'}}>
                <td><div className='td-div'> <p>15</p></div></td>
                <td><div className='td-div'> <p>16</p></div></td>
                <td><div className='td-div'> <p>17</p></div></td>
                <td><div className='td-div'> <p>18</p></div></td>
                <td style={{backgroundColor: '#d1e5fa', borderLeft: '4px solid #147fe4'}}><div className='td-div'> <p>19</p>
                <h6 style={{textAlign: 'start', color: '#147fe4'}}>Vacation</h6>
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


                

            </div>


            
        </div>

    </CalenderLayout>
      
  )
}

export default Calender1
