import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVisits, visitSelector } from "../../feautures/visit/visitSlice";
import { fetchUsers, userSelector } from "../../feautures/user/userSlice";
import { AsideMenu, Header, PatientVisitTable } from "../components";

const PatientVisits = () => {
  const dispatch = useDispatch();
  const { visits, isLoading } = useSelector(visitSelector)
  const { users } = useSelector(userSelector)
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(getVisits());
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <>
      <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? "toggled" : ""}`}>
        <AsideMenu />
        <main className="page-content bg-light">
          <Header handleToggle={handleToggle} />
          <PatientVisitTable patients={users} visits={visits} loading={isLoading}  />
        </main>
      </div>
    </>
  );
};

export default PatientVisits;
