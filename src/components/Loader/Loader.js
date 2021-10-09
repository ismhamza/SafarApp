import React from "react";
import { ActivityIndicator } from "react-native";

export default Loader = props => {
    const { size = "small", loaderColor = "green", ...rest } = props;
    return <ActivityIndicator size={size} color={loaderColor} {...rest} />;
};
