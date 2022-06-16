/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AsideMenu, Header, OrderTable } from "../components";
import { ordersSelector, getOrders } from "../../feautures/orders/ordersSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = React.useState(true);
  const { orders, isLoading, isError, errorMessage } = useSelector(ordersSelector);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <>
      <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? "toggled" : ""}`}>
        <AsideMenu />
        <main className="page-content bg-light">
          <Header handleToggle={handleToggle} />
          <OrderTable orders={orders} />
        </main>
      </div>
    </>
  );
};

export default Orders;
