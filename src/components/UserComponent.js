import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });

    }

    render() {
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
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td><a href='#' onClick={() => {
                                        UserService.getUser(user.id).then((response) => {
                                            this.setState({user: response.data})
                                        });
                                    }}>{user.id}</a></td>
                                    <td> {user.firstName}</td>
                                    <td> {user.secondName}</td>
                                    <td> {user.email}</td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>

                {this.state.user && <div>
                    <div key={this.state.user.id}>
                        <div>{this.state.user.id}</div>
                        <div> {this.state.user.firstName}</div>
                        <div> {this.state.user.secondName}</div>
                        <div> {this.state.user.email}</div>
                    </div>
                </div>}

            </div>

        )
    }
}

export default UserComponent