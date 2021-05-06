import {AddUserAction, RemoveUserAction, UpdateUserAction} from "../actions/actions";

export function AddUser(value) {
    return {
        type: AddUserAction,
        payload: value
    };
}
export function UpdateUser(value, id) {
    return {
        type: UpdateUserAction,
        userId: id,
        payload: value
    };
}export function RemoveUser(value) {
    return {
        type: RemoveUserAction,
        payload: value
    };
}

