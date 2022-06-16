import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs, logsSelector } from "../../feautures/log/logSlice";
import { userSelector, fetchUsers } from "../../feautures/user/userSlice";
import { AsideMenu, Header, PatientLogTable } from "../components";

const PatientLogs = () => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const { users } = useSelector(userSelector);
  const { logs } = useSelector(logsSelector)

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchLogs());
  }, [dispatch]);

  return (
    <>
      <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? "toggled" : ""}`}>
        <AsideMenu />
        <main className="page-content bg-light">
          <Header handleToggle={handleToggle} />
          <PatientLogTable logs={logs} users={users} />
        </main>
      </div>
    </>
  );
};

export default PatientLogs;
