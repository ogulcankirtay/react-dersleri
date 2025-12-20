import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from './redux/UserSlice';
import User from './User'


function UserList() {
    const { users } = useSelector(store => store.user)
    console.log(users)
    const dispath = useDispatch();
    useEffect(() => {
        dispath(getUsers())
    }, [])
    return (
        <div>
            {
                users && users.map((user) => (
                    <User key={user.id} user={user} />
                ))

            }
        </div>
    )
}

export default UserList