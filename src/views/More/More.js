import React from "react";

import { View, Text,Button } from 'react-native';

class More extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {
        const {navigation} = this.props

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>More Screen</Text>
            </View>
        )
    }
}

export default More