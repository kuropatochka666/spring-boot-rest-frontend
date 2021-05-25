import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

const Autorisation = (props) => {
    const {register, handleSubmit} = useForm();

    useEffect(() => {

    }, []);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} placeholder="First name"/>
                <input {...register("secondName")} placeholder="Second name"/>
                <input {...register("email")} placeholder="Email"/>
                <input type="submit"/>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state.users);
    return {
        usersInfo: state.users
    };
}
const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Autorisation)