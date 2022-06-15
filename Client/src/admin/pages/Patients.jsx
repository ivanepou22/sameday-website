import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUsers } from "../../feautures/user/userSlice"
import { AsideMenu, Header, PatientTable } from '../components'

const Patients = () => {
    const { users, isLoading } = useSelector(userSelector)
    const [toggle, setToggle] = useState(true);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div className={`page-wrapper doctris-theme font-size-15 ${toggle ? 'toggled' : ''}`}>
            <AsideMenu />
            <main className="page-content bg-light">
                <Header handleToggle={handleToggle} />
                {!isLoading && <PatientTable users={users} />}
            </main>
        </div>
    )
}

export default Patients