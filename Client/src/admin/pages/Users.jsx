import React from "react";
import { AsideMenu, Header, UsersTable } from "../components";

const Users = () => {
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
                    <UsersTable />
                </main>
            </div>
        </>
    );
};

export default Users;
