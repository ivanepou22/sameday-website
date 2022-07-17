import { useState } from "react";
import { AsideMenu, Header, PatientTable } from "../components";

const Patients = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? "toggled" : ""}`}>
      <AsideMenu />
      <main className="page-content bg-light">
        <Header handleToggle={handleToggle} />
        <PatientTable />
      </main>
    </div>
  );
};

export default Patients;
