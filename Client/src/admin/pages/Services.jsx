import React from 'react'
import { AsideMenu, Header, ServiceTable } from '../components';


const Services = () => {
    const [toggle, setToggle] = React.useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? 'toggled' : ''}`}>
                <AsideMenu />
                <main className="page-content bg-light">
                    <Header handleToggle={handleToggle} />
                    <ServiceTable />
                </main>
            </div>
        </>
    )
}

export default Services