import React, {useEffect, useState} from 'react';
import {getUsers, addUser} from '../../services/UserService';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {CurrentUser} from "../currentUser/currentUser";
import {useForm} from "react-hook-form";


const UserComponent = () => {

    const [allUsers, setAllUsers] = useState({});
    // const [newUser, setNewUser] = useForm();
    const {register, handleSubmit} = useForm();

    useEffect(() => {
        getUsers().then((response) => {
            setAllUsers({users: response.data})
        });
    }, []);


    const onSubmit = (data) => {
        addUser(data);

    }

    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    {
                        allUsers.users && allUsers.users.map(user =>
                            <div key={user.id}>
                                <div><Link to={`/home/${user.id}`}> {user.id}</Link></div>
                                <div>{user.firstName} </div>
                                <div>{user.secondName} </div>
                                <div>{user.email}</div>
                            </div>
                        )
                    }
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} placeholder="First name"/>
                        <input {...register("secondName")} placeholder="Second name"/>
                        <input {...register("email")} placeholder="Email"/>
                        <input type="submit"/>
                    </form>

                </Route>
                {
                    allUsers.users && allUsers.users.map(user =>
                        <Route path={`/home/${user.id}`} key={user.id}>
                            <CurrentUser userId={user.id}/>
                        </Route>
                    )
                }
            </Switch>
        </Router>
    )

}

export default UserComponent