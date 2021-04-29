import React, {useEffect, useState} from 'react';
import {getUsers, getUser} from '../services/UserService';

const UserComponent = () => {
    const [state, setState] = useState({});
    useEffect(() => {
        getUsers().then((response) => {
            setState({ users: response.data})
        });
    },[]);
    return (
        <div>
            <h1 className="text-center"> Users List</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td> User Id</td>
                    <td> User First Name</td>
                    <td> User Second Name</td>
                    <td> User Email Id</td>
                </tr>
                </thead>
                <tbody>
                {
                    state.users && state.users.map(user => <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.secondName}</td>
                        <td>{user.email}</td>
                    </tr>)
                }
                </tbody>
            </table>

        </div>

    )

}

export default UserComponent