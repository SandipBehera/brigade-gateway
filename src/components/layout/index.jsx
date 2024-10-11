import React from "react";
import { Headders } from "./headder";
import Footer from "./footer";


const Layout = ({ children }) => {
  return (
    <div>
       <Headders />
        {children}
        <Footer />
    </div>
  );
}
export default Layout;