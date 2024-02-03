import Calenderadmin from "../Components/Calenderadmin"
import Calendersidebar from "../Components/Calendersidebar"


// eslint-disable-next-line react/prop-types
const CalenderLayout = ({children}) => {
  return (
    
        <>
        <Calenderadmin/>
        <div className="d-flex align-items-start justify-content-between " style={{ width: '100%', height: '91vh'  }}> 
        <Calendersidebar/>
        {children}
        </div>
     
     
        </>
       )
  
}

export default CalenderLayout