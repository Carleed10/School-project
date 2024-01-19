import Sidebar from "../Components/Sidebar"
import Admin from "../Components/Admin"


// eslint-disable-next-line react/prop-types
const AdminLayout = ({children}) => {
  return (
    <>
    <Admin/>
    <div className="d-flex align-items-start justify-content-between " style={{ width: '100%', height: '91vh'  }}> 
    <Sidebar/>
    {children}
    
    
    </div>

    
    </>
  )
}

export default AdminLayout