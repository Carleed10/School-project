import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"

const Calenderadmin = () => {
    function move() {
        let element = document.getElementById('side')



        if (!element.classList.contains('sidebar2')) {

            element.classList.add('sidebar2')

            element.classList.remove('sidebar3')

        } else {

            element.classList.remove('sidebar2')
            element.classList.add('sidebar3')
            element.style.transition = '1s'
        }
    }





    return (
        <div className="w-100  bg-light d-flex align-items-center position-relative  justify-content-between myshadow" style={{ height: '70px', zIndex: '2' }}>
            <div className="side h-100 bg-primary align-items-center justify-content-center " style={{ width: '20%', borderRadius: '25px 0 0 0' }}>
                <img src="images/Frame 1013.png" alt="" />




            </div>
            <div className="option h-100 bg-light align-items-center justify-content-center " style={{ width: '20%', borderRadius: '25px 0 0 0' }}>

                <button onClick={move} className='loginbox border-0'>  <Icon icon="el:lines" color="black" width="20" height="20" /> </button>
                <div id='side' className="w-100 linkers sidebar2 align-items-center border-end flex-column position-fixed " style={{ height: '91vh', zIndex: '3', top: '72px' }}>
                    <div style={{ width: '250px' }}>
                        <div className=" w-100 mt-5 ">
                            <div className=" w-100">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <button className="listed text-primary mb-4 linkers loginbox border-0 w-100" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"> <Link to={'/account'} className="text-decoration-none" > <Icon className="ms-3 me-3" icon="tabler:arrow-left" width="22" /> </Link> <Link to={'#'} className="text-decoration-none"  >  Calender </Link></button>

                                    <Link className="text-decoration-none sidebarwidth" to={'#'}> <button className=" listed linkers loginbox border-0 sidebarwidth rounded" id="theSeclist-Calender-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"> <p className="ms-3 h-50 d-flex align-items-center  mt-3"> School Calender </p> </button> </Link>


                                 

                                    <Link className="text-decoration-none sidebarwidth" to={'#'}>       <button className="listed linkers loginbox border-0 sidebarwidth rounded" id="theSeclist-Time-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"> <p className="ms-3 h-50 d-flex align-items-center  mt-3">   Time Table </p>  </button> </Link>



                                   

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 d-flex align-items-start flex-column w-100" >
                        <Link to={'/account'} className='theaccount text-decoration-none'> <button id='theaccount' className=" logoutbutton ms-3 mt-3 d-flex align-items-center "> <Icon className='me-2 ms-3' icon="ic:outline-person" width="22" /> Account </button> </Link>
                        <Link to={'/logout'} className='text-decoration-none'>     <button id='thelogout' className=" logoutbutton mt-3 ms-3 d-flex align-items-center"> <Icon className='me-2 ms-3' icon="material-symbols:logout" width="22" /> Logout </button> </Link>



                    </div>















                </div>




            </div>

            <div className="m-2 h-100 bg-light d-flex align-items-center justify-content-between  " style={{ borderRadius: '0 0 0 25px', width: '80%', backgroundColor: 'white' }}>
                <div className="border rounded maininput align-items-center justify-content-start ms-3 h-50" style={{ width: '40%', backgroundColor: 'white' }} >
                    <Icon icon="ic:outline-search" className='ms-1' width="26" /> <input placeholder='What are you looking for?' className="h-100 loginbox admininput border-0" type="search" /> </div>

                <img className='logo' width={'40px'} height={'30px'} src="images/Frame 1013.png" alt="" />

                <div id='prof' className='profile  h-75 align-items-center justify-content-around' style={{ backgroundColor: '#f1f7fd' }} >
                    <Icon icon="pajamas:notifications" className='ms-1' width="24" />
                    <p className='w-50 h-75 mt-3 d-flex align-items-center flex-column justify-content-center'>
                        <b>
                            Gbadegbo K.
                        </b>
                        <small>Administration </small>
                    </p>

                    <img className='profileimg' width={'45px'} height={'45px'} src='public/images/d4f42c1d-7d6a-4929-8b66-bbb48a74f4c2.jpg' />


                </div>
                <div className="dropdown">
                    <Icon className=" dropdown-toggle me-3" data-bs-toggle="dropdown" icon="iwwa:option" width="28" />
                    <ul className="dropdown-menu text-center mt-4 ">
                        <li><button className="dropdown-item  mt-1" style={{ borderBottom: '1px solid #96badc' }} type="button">Settings</button></li>

                        <li><button className="dropdown-item  mb-3" style={{ borderBottom: '1px solid #96badc' }} type="button">Support</button></li>
                    </ul>
                </div>


            </div>


        </div>
    )
}

export default Calenderadmin