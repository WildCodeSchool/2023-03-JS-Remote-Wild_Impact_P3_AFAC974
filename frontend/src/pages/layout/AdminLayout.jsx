import React from "react";
import { Outlet } from "react-router-dom";
import NavBarAdmin from "../../components/NavBarAdmin";

function AdminLayout() {
  return (
    <div className="flex">
      <NavBarAdmin />

      <Outlet />
    </div>
  );
}

export default AdminLayout;
