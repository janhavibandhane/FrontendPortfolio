import { Outlet } from "react-router-dom";
import Nav from "./Component/Nav";
function Layout(){
    return(
        <>
         <Nav />
         <Outlet />
         
        </>
    )
}
export default Layout;