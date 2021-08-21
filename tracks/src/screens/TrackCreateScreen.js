import React, { useContext, useCallback } from "react";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);

    const callback = useCallback(
        (location) => {
            addLocation(location, state.recording);
        },
        [state.recording]
    );

    const [err] = useLocation(isFocused, callback);

    return (
        <>
            <SafeAreaView
                forceInset={{ top: "always" }}
                style={styles.container}
            >
                <Text h3>Create a track</Text>
                <Map />
                {err ? <Text>Please enable loaction services.</Text> : null}
                <TrackForm />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 25 : 0,
    },
});

export default withNavigationFocus(TrackCreateScreen);
