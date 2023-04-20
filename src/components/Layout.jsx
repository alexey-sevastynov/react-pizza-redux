import React from "react";

import Header from "./Header/Header";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
