import React from "react";

import { View, Text,Button } from 'react-native';

class Downloads extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {
        const {navigation} = this.props

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Downloads Screen</Text>
            </View>
        )
    }
}

export default Downloads