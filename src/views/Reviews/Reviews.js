import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ChatIcon, PhoneIcon, User3} from '../../assets/Images';
import {TouchableIcon} from '../../components';
import BasicStyle from '../../styles/BasicStyle';
import {padding} from '../../styles/Theme';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          {/* Top Card */}
          <View style={[styles.card, {marginTop: 10}]}>
            <View style={styles.header}>
              <Text style={{...BasicStyle.textBoldLg}}>
                Hire a Travel Expert
              </Text>
              <Text style={{...BasicStyle.textRegularMd}}>
                To Plan Our Journey
              </Text>
            </View>
            {/* People Wrapper */}
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: padding.sm,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#efefef',
    borderWidth: 1,
    paddingHorizontal: 13,
    paddingVertical: 13,
  },
  header: {
    padding: 16,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderStyle: 'dashed',
  },
});

export default Reviews;
