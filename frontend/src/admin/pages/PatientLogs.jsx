import { useState } from "react";
import { AsideMenu, Header, PatientLogTable } from "../components";

const PatientLogs = () => {
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
          <PatientLogTable />
        </main>
      </div>
    </>
  );
};

export default PatientLogs;
