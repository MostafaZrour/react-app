import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
