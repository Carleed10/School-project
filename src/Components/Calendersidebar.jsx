import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"

const Calendersidebar = () => {
  return (
        <div className="sidebar align-items-center flex-column position-relative  myshadow" style={{ width: '19.8%', height: '91vh', zIndex: '2' }}>

            <div className=" w-100 mt-5 ">
                <div className=" w-100">
                    <div className="list-group d-flex flex-column align-items-center" id="list-tab" role="tablist">
                         <button className="listed text-primary mb-4 linkers loginbox border-0 w-100" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"> <Link to={'/account'} className="text-decoration-none" > <Icon className="ms-3 me-3" icon="tabler:arrow-left" width="22" /> </Link>
                          <Link to={'#'} className="text-decoration-none" > Calender </Link> </button> 


                        <Link className="text-decoration-none sidebarwidth" to={'#'}> <button className=" listed linkers loginbox border-0 sidebarwidth rounded" id="list-Calender-list" data-bs-toggle="list" href="#list-calender" role="tab" aria-controls="list-calender"> <p className="ms-3 h-50 d-flex align-items-center  mt-3"> School Calender</p> </button> </Link>

                     

                        <Link className="text-decoration-none sidebarwidth" to={'#'}>   <button className="listed linkers loginbox border-0 sidebarwidth rounded" id="list-Time-list" data-bs-toggle="list" href="#list-time" role="tab" aria-controls="list-time"> <p className="ms-3 h-50 d-flex align-items-center  mt-3"> 
                         Time Table </p>  </button> </Link>



                      





                    </div>
                </div>

            </div>

            <div className="logout d-flex align-items-start flex-column w-100" >
                <Link to={'/account'} className='text-decoration-none'> <button id='theSecAccount' className="logoutbutton ms-3 mt-3 d-flex align-items-center "> <Icon className='me-2 ms-3' icon="ic:outline-person" width="22" /> Account </button> </Link>
                <Link to={'/logout'} className=' text-decoration-none'>     <button id='theSecLogout' className="logoutbutton mt-3 ms-3 d-flex align-items-center"> <Icon className='me-2 ms-3' icon="material-symbols:logout" width="22" /> Logout </button> </Link>



            </div>















        </div>
    )
}

export default Calendersidebar
