import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signup":
        case "signin":
            return { errorMessage: "", token: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        default:
            return state;
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
};

const signup =
    (dispatch) =>
    async ({ email, password }) => {
        try {
            const res = await trackerApi.post("/signup", {
                email,
                password,
            });
            await AsyncStorage.setItem("token", res.data.token);
            dispatch({ type: "signup", payload: res.data.token });

            navigate("TrackList");
        } catch (err) {
            dispatch({
                type: "add_error",
                payload: "Something went wrong with sign up",
            });
        }
    };

const signin =
    (dispatch) =>
    async ({ email, password }) => {
        try {
            const res = await trackerApi.post("/signin", {
                email,
                password,
            });
            await AsyncStorage.setItem("token", res.data.token);
            dispatch({ type: "signin", payload: res.data.token });

            navigate("TrackList");
        } catch (err) {
            dispatch({
                type: "add_error",
                payload: "Something went wrong with sign in",
            });
        }
    };

const signout = (dispatch) => {
    return () => {
        // somehow sign out!!!
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage },
    { token: null, errorMessage: "" }
);
