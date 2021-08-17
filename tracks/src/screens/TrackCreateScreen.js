import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { requestForegroundPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
        } catch (e) {
            setErr(e);
        }
    };
    useEffect(() => {
        startWatching();
    }, []);
    
    return (
        <>
            <SafeAreaView
                forceInset={{ top: "always" }}
                style={styles.container}
            >
                <Text h3>Create a track</Text>
                <Map />
                {err ? <Text>Please enable loaction services.</Text> : null}
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 25 : 0,
    },
});

export default TrackCreateScreen;
