import React, { useEffect } from "react";
import AdminViewComponents from "../components/Admin/AdminView";
import { useNavigate } from "react-router-dom";

const AdminView = () => {
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("userData");

    if (!token || !email) {
      nav("/");
    }
  }, []);

  return (
    <>
      <AdminViewComponents />
    </>
  );
};

export default AdminView;
