import React, { useState, useEffect, useContext } from "react";
import { Platform } from "react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import {
    requestForegroundPermissionsAsync,
    watchPositionAsync,
    Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);
    const { addLocation } = useContext(LocationContext);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                (location) => {
                    addLocation(location);
                }
            );
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
