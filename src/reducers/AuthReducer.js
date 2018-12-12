import { LOGIN_AUTH, CHECK_AUTH , LOGOUT_AUTH } from "../actions/type";

export default function(state = [], action) {
    switch (action.type) {
        case LOGIN_AUTH:
            return action.payload;
        case CHECK_AUTH:
            return action.payload
        case LOGOUT_AUTH:
            return action.payload
        default:
            return state
    }
}