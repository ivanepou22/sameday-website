/* eslint-disable */
import React from "react";
import { AsideMenu, Header, OrderTable } from "../components";

const Orders = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? "toggled" : ""}`}>
        <AsideMenu />
        <main className="page-content bg-light">
          <Header handleToggle={handleToggle} />
          <OrderTable />
        </main>
      </div>
    </>
  );
};

export default Orders;
