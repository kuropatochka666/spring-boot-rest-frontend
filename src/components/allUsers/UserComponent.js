import React, {useEffect} from 'react';
import {getUsers, addUser} from '../../services/UserService';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import CurrentUser from "../currentUser/currentUser";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {AddUser, RemoveUser, UpdateUser} from "../../store/actionCreators/actionCreator"
import currentUser from "../currentUser/currentUser";

const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)',
};
const UserComponent = (props) => {
    const {register, handleSubmit} = useForm();

    useEffect(() => {
        getUsers().then((response) => {
            props.AddUser(response.data)
        });
    }, []);
    const onSubmit = (data) => {
        props.AddUser(data)
        addUser(data);
    }
const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)',

}

    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    {

                        props.usersInfo && props.usersInfo.map(user =>
                            <div key={user.id} style={{styles}}>
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
                <Route path="/home/:id" render={(props)=> <CurrentUser {...props}/>}/>

            </Switch>
        </Router>
    )
}

const mapStateToProps = state => {
    console.log(state.users);
    return {
        usersInfo: state.users
    };
}
const mapDispatchToProps = {
    AddUser,
    UpdateUser,
    RemoveUser
}


export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)