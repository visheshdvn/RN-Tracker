import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />

            <NavLink
            routeName="Signin"
            text="Already have an account? Sign in instead!" />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
    },
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15,
    },
});

export default SignupScreen;
