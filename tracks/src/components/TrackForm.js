import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext);
    console.log(recording);

    return (
        <>
            <Spacer>
                <Input
                    placeholder="Enter Name..."
                    onChangeText={changeName}
                    value={name}
                />
            </Spacer>
            <Button
                title={!recording ? "Start Recording." : "Stop"}
                onPress={!recording ? startRecording : stopRecording}
            />
        </>
    );
};

export default TrackForm;
