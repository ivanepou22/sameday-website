/* eslint-disable */
import React, { useState, useEffect } from "react";
import { AppointmentTable, AsideMenu, Header } from "../components";


const Appointments = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? "toggled" : ""}`}>
        <AsideMenu />
        <main className="page-content bg-light">
          <Header handleToggle={handleToggle} />
          <AppointmentTable />
        </main>
      </div>
    </>
  );
};

export default Appointments;
