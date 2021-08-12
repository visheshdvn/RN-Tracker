import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api req to sign up
        // modify state
        // if signing up fails reflect error message
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to signin
        // handle success by updating state
        // handle failure by showing error message
    };
};

const signout = (dispatch) => {
    return () => {
        // signout
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false }
);
