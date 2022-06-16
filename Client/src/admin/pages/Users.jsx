import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, fetchUsers } from "../../feautures/user/userSlice";
import { AsideMenu, Header, UsersTable } from "../components";

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector(userSelector);
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? "toggled" : ""}`}>
        <AsideMenu />
        <main className="page-content bg-light">
          <Header handleToggle={handleToggle} />
          <UsersTable users={users} isLoading={isLoading} />
        </main>
      </div>
    </>
  );
};

export default Users;
