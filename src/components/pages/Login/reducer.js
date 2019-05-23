import {Map} from "immutable";

const initState = Map({
    email: "",
    password:""
});

function loginReducer(state = initState, action) {
    switch (action.type) {
        case "TEST_SUCCESS":
            console.log(action.payload);
            return state;
        case "TEST_FAILURE":
            console.log(action.payload);
            return state;
        case "TEST_REQUEST":
            return state;

        case "SET_LOGIN_EMAIL":
            return state.set("email", action.value);
        case "SET_LOGIN_PASSWORD":
            return state.set("password", action.value);
        default:
            return state;
    }
}

export default loginReducer;