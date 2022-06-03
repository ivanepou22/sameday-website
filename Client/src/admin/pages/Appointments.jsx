import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppointmentTable, AsideMenu, Header } from "../components";
import {
  appointmentSelector,
  fetchAppointments,
} from "../../feautures/appointment/appointmentSlice";

const Appointments = () => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const { appointments, isLoading, isError } = useSelector(appointmentSelector);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  return (
    <>
      <div
        className={`page-wrapper doctris-theme font-size-15 ${
          toggle ? "toggled" : ""
        }`}
      >
        <AsideMenu />
        <main className="page-content bg-light">
          <Header handleToggle={handleToggle} />
          <AppointmentTable data={appointments} isLoading={isLoading} />
        </main>
      </div>
    </>
  );
};

export default Appointments;
