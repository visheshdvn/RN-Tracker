import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
    const {
        state: { currentLocation },
    } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(158, 158, 255, 1)"
                fillColor="#8888ff55"
                strokeWidth={2}
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;
