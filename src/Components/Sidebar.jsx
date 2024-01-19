import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const Sidebar = () => {



    return (
        <div className="sidebar align-items-center flex-column position-relative  myshadow" style={{ width: '19.8%', height: 'fit-content', zIndex: '2' }}>

            <div style={{height: "fit-content"}} className=" w-100 mt-5 ">
                <div className=" w-100">
                    <div className="list-group" id="list-tab" role="tablist">
                        <Link to={'#'} className='text-decoration-none'   > <button className="listed linkers loginbox border-0 w-100" id="list-dashboard-list" data-bs-toggle="list" href="#list-dashboard" role="tab" aria-controls="list-dashboard">    <Icon className='me-2 ms-3' icon="heroicons:clipboard-document-list" width="22" />Dashboard</button></Link>

                        <Link to={'/administration'} className='text-decoration-none'  > <button className="listed linkers loginbox border-0 w-100 " id="list-administration-list" data-bs-toggle="list" href="#list-administration" role="tab" aria-controls="list-administration"> <Icon className='me-2 ms-3' icon="ic:outline-people-alt" width="22" /> Administration</button> </Link>

                        <Link to={'/academics'} className='text-decoration-none'  >  <button className="listed linkers loginbox border-0 w-100 " id="list-academics-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages"> <Icon className='me-2 ms-3' icon="mdi:clipboard-list-outline" width="22" /> Academics</button> </Link>

                        <Link to={'#'} className='text-decoration-none'  >   <button className="listed linkers loginbox border-0 w-100 " id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"> <Icon icon="foundation:clipboard-pencil" className='me-2 ms-3' width="22" /> Assessment</button> </Link>

                        <Link to={'#'} className='text-decoration-none'  >   <button className="listed loginbox linkers border-0 w-100 " id="list-h-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"><Icon icon="mdi:timetable" className='me-2 ms-3' width="22" /> Calendar</button> </Link>

                        <Link to={'#'} className='text-decoration-none'  >  <button className="listed loginbox linkers border-0 w-100 " id="list-p-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"> <Icon icon="mdi:house-attic" className='me-2 ms-3' width="22" /> Houses</button> </Link>

                        <Link to={'#'} className='text-decoration-none'  > <button className="listed loginbox linkers border-0 w-100" id="list-m-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages"><Icon icon="mdi:dollar" className='me-2 ms-3' width="22" /> Finance</button> </Link>

                        <Link to={'#'} className='text-decoration-none'  >  <button className="listed linkers loginbox border-0 w-100 " id="list-s-list" data-bs-toggle="list" href="/logout" role="tab" aria-controls="list-settings"><Icon icon="material-symbols:newspaper-rounded" className='me-2 ms-3' width="22" /> Newsletter</button> </Link>
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

export default Sidebar