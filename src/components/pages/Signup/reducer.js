import { Map } from "immutable";

const initState = Map({
    email: "",
    password:""
});

function signupReducer(state = initState, action) {
    switch (action.type) {
        case "SET_SIGNUP_EMAIL":
            return state.set("email", action.value);
        case "SET_SIGNUP_PASSWORD":
            return state.set("password", action.value);
        default:
            return state;
    }
}

export default signupReducer;