import React from "react";
import { Outlet } from "react-router";
import NavBer from "../../pages/Shared/NavBer/NavBer";
import Footer from "../../pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className=" w-[90%] mx-auto">
        <NavBer />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
