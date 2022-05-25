import React from 'react'
import { AsideMenu, Header } from '../components'
import DashboardContent from '../components/DashboardContent'

const Dashboard = () => {
    return (
        <>
            <div className="page-wrapper doctris-theme toggled font-size-15">
                <AsideMenu />
                <main className="page-content bg-light">
                    <Header />
                    <DashboardContent />
                </main>
            </div>
        </>
    )
}

export default Dashboard