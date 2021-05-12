import {AddUserAction, RemoveUserAction, UpdateUserAction} from "../actions/actions";

const initialState = {
    users: [],

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case AddUserAction:
            return {
                ...state,
                users: state.users.concat(action.payload)
            };
        case UpdateUserAction:
            const index = state.users.findIndex(user => user.id === action.userId);
            let users = [...state.users];
            users[index].firstName = action.payload.firstName;
            users[index].secondName = action.payload.secondName;
            users[index].email = action.payload.email;
            return {
                ...state,
                users: users
            };
        case RemoveUserAction:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            };
        default:
            return state;
    }
}

export default reducer;