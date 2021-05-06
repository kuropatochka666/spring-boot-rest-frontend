import {AddUserAction, RemoveUserAction, UpdateUserAction} from "../actions/actions";

const initialState ={
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
            return {
                ...state,
                users: action.payload
            };
        case RemoveUserAction:
            return {
                ...state,
                users: state.users.find(user => user.id === action.userId).shift
            };
        default:
            return state;
    }
}

export default reducer;