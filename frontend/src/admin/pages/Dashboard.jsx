import React from 'react'
import { AsideMenu, Header } from '../components'
import DashboardContent from '../components/DashboardContent'

const Dashboard = () => {
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
                    <DashboardContent />
                </main>
            </div>
        </>
    )
}

export default Dashboard