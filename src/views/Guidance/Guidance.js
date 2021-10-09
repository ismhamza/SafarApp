import React from 'react';

import {View, Text, Button} from 'react-native';

class Guidance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Guidance Screen</Text>
      </View>
    );
  }
}

export default Guidance;
