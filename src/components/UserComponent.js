import React, {useEffect, useState} from 'react';
import {getUsers, getUser} from '../services/UserService';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const UserComponent = () => {
    const [allUsers, setAllUsers] = useState({});
    useEffect(() => {
        getUsers().then((response) => {
            setAllUsers({users: response.data})
        });
    }, []);

    function CurrentUser(props) {
        const [user, setUser] = useState({});
        useEffect(() => {
            getUser(props.userId).then((response) => {
                setUser({currentUser: response.data})
            });
        }, []);
        return (
            <tr>
                {
                    user.currentUser && <tr>
                        <td>{user.currentUser.id}</td>
                        <td>{user.currentUser.firstName}</td>
                        <td>{user.currentUser.secondName}</td>
                        <td>{user.currentUser.email}</td>
                    </tr>
                }
            </tr>
        );
    }

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
                <Router>
                    {
                        allUsers.users && allUsers.users.map(user => <tr key={user.id}>
                                <td><Link to={`/${user.id}`}> {user.id}</Link></td>
                                <td>{user.firstName}</td>
                                <td>{user.secondName}</td>
                                <td>{user.email}</td>
                                <Route path={`/${user.id}`}>
                                    <CurrentUser userId={user.id}/>
                                </Route>
                            </tr>
                        )
                    }


                </Router>
                </tbody>
            </table>

        </div>

    )

}

export default UserComponent