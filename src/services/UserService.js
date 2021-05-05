import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/api/users/all';


export const getUsers = () => {
    return axios.get(USERS_REST_API_URL);
}

export const getUser = (id) => {
    return axios.get(`${USERS_REST_API_URL}/${id}`);
}
export const addUser = (user) => {
    console.log(user);
    axios.post(USERS_REST_API_URL, user)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}
export const putUser = (user, id) => {
    console.log(user);
    axios.put(`${USERS_REST_API_URL}/${id}`, user)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}
export const deleteUser = (id) => {
    axios.delete(`${USERS_REST_API_URL}/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
}



