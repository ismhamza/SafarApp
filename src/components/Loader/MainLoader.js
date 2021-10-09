import React from "react";
import { View, ActivityIndicator } from "react-native";

const MainLoader = ({ size = 40, color = "#DCB855" }) => (
    <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size={size} color={color} />
    </View>
);

export default MainLoader;
