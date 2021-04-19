import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>sup Screen</Text>
            <Button
                title="Go to Signin"
                onPress={() => navigation.navigate("mainFlow")}
            />
        </>
    );
};

StyleSheet.create({});

export default SignupScreen;
