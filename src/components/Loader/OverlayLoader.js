import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { themeColor } from "../../style/Theme";
import BasicStyle from "../../styles/BasicStyle";

const OverlayLoader = () => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <ActivityIndicator size={40} color={"green"} />
            </View>
        </React.Fragment>
    );
};

export default OverlayLoader;

const styles = StyleSheet.create({
    container: {
        ...BasicStyle.flexOne,
        ...BasicStyle.alignItemsCenter,
        ...BasicStyle.justifyContentCenter,
        ...BasicStyle.height100,
        ...BasicStyle.width100,
        ...BasicStyle.positionAbsolute,
        backgroundColor: "rgba(0,0,0,0.8)",
        top: 0,
        left: 0,
        zIndex: 1
    }
});
