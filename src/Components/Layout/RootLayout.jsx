import React from "react";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router";
import Footer from "./Footer.jsx";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;
