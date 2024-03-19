import React from 'react'
import { AsideMenu, DoctorsTable, Header } from '../components'

const Doctors = () => {
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
                    <DoctorsTable />
                </main>
            </div>
        </>
    )
}

export default Doctors