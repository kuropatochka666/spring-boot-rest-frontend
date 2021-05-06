import React, {useEffect} from "react";
import {deleteUser, getUser, putUser} from "../../services/UserService";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {connect} from 'react-redux'
import {AddUser, UpdateUser, RemoveUser} from "../../store/actionCreators/actionCreator";

function CurrentUser(props) {
    const {register, handleSubmit} = useForm();
    useEffect(() => {
        getUser(props.userId).then((response) => {
            AddUser(response.data)
        });
    }, []);
    const onSubmit = (data) => {
        console.log(data);
        UpdateUser(data, props.userId)
        putUser(data, props.userId);
    }
    const currentUser = props.usersInfo.find(user => user.id === props.userId);
    console.log(currentUser);
    return (
        <div>
            {
                currentUser &&
                <div>
                    <Link to="/home">back</Link>
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
                    <input type="submit" value="Удалить" onClick={() => deleteUser(currentUser.id)}/>
                </div>
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