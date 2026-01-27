import React from "react";
import { Outlet } from "react-router";
import authPicture from "../../../public/authPicture.jpg";
import Logo from "../../components/Logo/Logo";

const AuthLayout = ({ title, subtitle }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT SIDE – Branding */}
      <div
        className="hidden lg:flex flex-col justify-center items-center text-white p-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${authPicture})`,
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          <Logo />
        </h1>
        <p className="text-lg text-center max-w-md">{subtitle}</p>

        <div className="mt-10 opacity-80">
          <p className="italic">“Build once. Authenticate everywhere.”</p>
        </div>
      </div>

      {/* RIGHT SIDE – FORM */}
      <div className="flex items-center justify-center bg-base-200">
        <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
