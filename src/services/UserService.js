import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/api/users/all';


export const getUsers = () => {
    return axios.get(USERS_REST_API_URL);
}

export const getUser = (id) => {
    return axios.get(`${USERS_REST_API_URL}/${id}`);
}




