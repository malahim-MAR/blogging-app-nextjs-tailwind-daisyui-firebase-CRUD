import React from "react";
import Navbar from "./Components/Navbar";
import AdminDashboard from "./Components/AdminDashboard";

const page = () => {
  return (
    <>
      <div className="flex max-w-full">
        <div className="">
          <Navbar />
        </div>
        <div>
          <AdminDashboard />
        </div>
      </div>
    </>
  );
};

export default page;
