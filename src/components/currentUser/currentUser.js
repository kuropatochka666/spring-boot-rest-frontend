import React, {useEffect, useState} from "react";
import {deleteUser, getUser, putUser} from "../../services/UserService";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {connect} from 'react-redux'
import {AddUser, UpdateUser, RemoveUser} from "../../store/actionCreators/actionCreator";
import store from "../../store/store";

function CurrentUser(props) {
    const {register, handleSubmit} = useForm();
    const userId = Number(props.match.params.id);
    const currentUser = props.usersInfo.find(user => user.id === userId);

    useEffect(() => {
        getUser(userId).then((response) => {
            AddUser(response.data)
        });

    }, [props.usersInfo]);
    const onSubmit = (data) => {
        console.log(data);
        props.UpdateUser(data, userId)
        putUser(data, userId);
    }
    const delUser = () => {
        console.log('allUsers', store.getState());
        props.RemoveUser(userId);
        deleteUser(currentUser.id);
    }

    console.log(currentUser);
    return (
        <div>
            <Link to="/home">back</Link>
            {
                currentUser ?(
                <div>

                    <div>{currentUser.id}</div>
                    <div>{currentUser.firstName}</div>
                    <div>{currentUser.secondName}</div>
                    <div>{currentUser.email}</div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} placeholder="First name"
                               defaultValue={currentUser.firstName}/>
                        <input {...register("secondName")} placeholder="Second name"
                               defaultValue={currentUser.secondName}/>
                        <input {...register("email")} placeholder="Email"
                               defaultValue={currentUser.email}/>
                        <input type="submit"/>
                    </form>
                    <input type="submit" value="Удалить" onClick={() => delUser()}/>
                </div>) : (<div>Такого пользователя нет</div>)
            }

        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser)