import React from "react";

import { View, Text, StyleSheet } from 'react-native';
import { IconCustom } from "../../components";

import {ListIcon} from "../../assets/Images";
import { margin, padding, themeColor } from "../../styles/Theme";
import BasicStyle from "../../styles/BasicStyle";

class ListViewItem extends React.Component {
    constructor(props) {
        super(props);
      }
      render() {
        const {navigation, source, list = false, categoryTitle="", categoryItems="", showListView} = this.props

        return (
            <View style={showListView ? styles.listContainer : styles.gridContainer}>
                <IconCustom source={source} width={showListView ? 35 : 77} height={showListView ? 35 : 77}/>
                <View style={showListView ? {flexDirection: "column", marginLeft: 10} : ""}>
                    <Text style={[styles.categoryTitle, !showListView ? { marginTop: 20} : {textAlign: "left"}]}>{categoryTitle}</Text>
                    <Text style={[styles.categoryItems, !showListView ? {textAlign:"center"} : ""]}>{categoryItems}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gridContainer: {
        marginRight: margin.md,
        marginTop: margin.md,
        ...BasicStyle.alignItemsCenter,
        ...BasicStyle.justifyContentCenter,
        paddingVertical: padding.xl,
        paddingHorizontal: padding.md,
        shadowColor: "rgba(0,0,0,0.45)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 10,
        backgroundColor: themeColor.white,
        width: "48%",
        borderRadius: 23
    },
    listContainer: {
        marginTop: margin.md,
        ...BasicStyle.flexDirectionRow,
        ...BasicStyle.alignItemsCenter,
        paddingVertical: padding.xl,
        paddingHorizontal: padding.md,
        shadowColor: "rgba(0,0,0,0.45)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 10,
        backgroundColor: themeColor.white,
        borderRadius: 23
    },
    categoryTitle: {...BasicStyle.textBoldLg, color: themeColor.primary, ...BasicStyle.textCenter, ...BasicStyle.textTransformCapitalize},
    categoryItems: {...BasicStyle.textRegularMd, color: themeColor.grayDark, marginTop: 2}
})

export default ListViewItem