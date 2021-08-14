import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents} from "react-navigation";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText="Sign In to your account."
                submitButtonText="Sign In"
                onSubmit={signin}
                errorMessage={state.errorMessage}
            />
            <NavLink
                text="Don't have an account? SignUp instead!"
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
    },
});

export default SigninScreen;
