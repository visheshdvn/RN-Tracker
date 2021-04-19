import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>Screen</Text>
            <Button
                title="Go to Track Detail"
                onPress={() => navigation.navigate("TrackDetail")}
            />
        </>
    );
};

StyleSheet.create({});

export default TrackListScreen;
