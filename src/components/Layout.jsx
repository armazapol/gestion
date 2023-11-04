import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ButtonReturn from "./ButtonReturn";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const local = location.pathname
  
  return (
    <div className="font-roboto flex flex-col justify-between min-h-screen">
      <div>
      <Header />
      <div className="px-5 pb-14 relative pt-24 ">
        <div className="flex absolute top-5 left-5">
          {
            local !== "/" &&    <ButtonReturn text='volver' onClick={()=>navigate('/')} />
          }   
        </div>
        <Outlet />
      </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;
