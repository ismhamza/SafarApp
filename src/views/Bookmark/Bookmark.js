import React from "react";

import { View, Text,Button } from 'react-native';

class Bookmark extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {
        const {navigation} = this.props

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Bookmark Screen</Text>
            </View>
        )
    }
}

export default Bookmark