import React from "react";
import { ActivityIndicator } from "react-native";

const BottomLoader = ({ size = 40, color = "#DCB855" }) => <ActivityIndicator size={size} color={color} />;

export default BottomLoader;
