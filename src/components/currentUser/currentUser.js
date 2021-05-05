import React, {useEffect, useState} from "react";
import {deleteUser, getUser, putUser} from "../../services/UserService";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

export function CurrentUser(props) {
    const [user, setUser] = useState({});
    const {register, handleSubmit} = useForm();
    useEffect(() => {
        getUser(props.userId).then((response) => {
            setUser({currentUser: response.data})
        });
    }, []);
    const onSubmit = (data) => {
        putUser(data, user.currentUser.id);

    }
    return (
        <div>
            {
                user.currentUser &&
                <div>
                    <Link to="/home">back</Link>
                    <div>{user.currentUser.id}</div>
                    <div>{user.currentUser.firstName}</div>
                    <div>{user.currentUser.secondName}</div>
                    <div>{user.currentUser.email}</div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} placeholder="First name"
                               defaultValue={user.currentUser.firstName}/>
                        <input {...register("secondName")} placeholder="Second name"
                               defaultValue={user.currentUser.secondName}/>
                        <input {...register("email")} placeholder="Email"
                               defaultValue={user.currentUser.email}/>
                        <input type="submit"/>
                    </form>
                    <div onClick={() => deleteUser(user.currentUser.id)}>Удалить</div>
                </div>
            }

        </div>
    );
}