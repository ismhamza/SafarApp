import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  ChatIcon,
  FilterIcon,
  PhoneIcon,
  SearchIcon,
  User1,
  User2,
  User3,
  User4,
} from '../../assets/Images';
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
                People Sharing Their
              </Text>
              <Text style={{...BasicStyle.textRegularMd}}>Experience</Text>
            </View>
            {/* Search with filter */}
            <View
              style={{
                marginVertical: 23,
                ...BasicStyle.flexDirectionRow,
                ...BasicStyle.alignItemsCenter,
                width: '100%',
              }}>
              <View style={{width: '85%'}}>
                <View
                  style={{position: 'absolute', zIndex: 10, top: 14, left: 15}}>
                  <TouchableIcon source={SearchIcon} width={15} height={15} />
                </View>
                <TextInput
                  placeholder="Search"
                  placeholderTextColor="#1e1e1e"
                  style={{
                    width: '100%',
                    backgroundColor: '#f2f2f2',
                    height: 44,
                    borderRadius: 10,
                    marginRight: 10,
                    padding: 13,
                    paddingLeft: 45,
                    color: '#000',
                  }}
                />
              </View>
              <View
                style={{
                  ...BasicStyle.alignItemsCenter,
                  ...BasicStyle.justifyContentCenter,
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: '#f1f1f1',
                  marginLeft: 10,
                }}>
                <TouchableIcon source={FilterIcon} width={15} height={15} />
              </View>
            </View>
            {/* Search with filter */}

            {/* Review card*/}
            <View
              style={{
                padding: 30,
                backgroundColor: '#f1f1f1',
                marginTop: 50,
                marginBottom: 30,
              }}>
              <View style={{position: 'absolute', top: -40, left: 20}}>
                <TouchableIcon source={User4} width={60} height={60} />
              </View>
              <Text style={{...BasicStyle.textBoldMd, color: '#000'}}>
                Muhammad Basit
              </Text>
              <Text style={{...BasicStyle.textRegularXs, color: '#262626'}}>
                After experiencing one of the most embarrassing moments of my
                life, Glenville came to the rescue with his professionalism and
                care. He went way above and beyond and I hope you recognize the
                world class employee you have on staff. Thank you, Glenville and
                thank you SLS!
              </Text>
            </View>
            <View
              style={{
                padding: 30,
                backgroundColor: '#f1f1f1',
                marginTop: 50,
                marginBottom: 30,
              }}>
              <View style={{position: 'absolute', top: -40, left: 20}}>
                <TouchableIcon source={User2} width={60} height={60} />
              </View>
              <Text style={{...BasicStyle.textBoldMd, color: '#000'}}>
                Hadiqa Kilaani
              </Text>
              <Text style={{...BasicStyle.textRegularXs, color: '#262626'}}>
                After experiencing one of the most embarrassing moments of my
                life, Glenville came to the rescue with his professionalism and
                care. He went way above and beyond and I hope you recognize the
                world class employee you have on staff. Thank you, Glenville and
                thank you SLS!
              </Text>
            </View>
            <View
              style={{
                padding: 30,
                backgroundColor: '#f1f1f1',
                marginTop: 50,
                marginBottom: 30,
              }}>
              <View style={{position: 'absolute', top: -40, left: 20}}>
                <TouchableIcon source={User3} width={60} height={60} />
              </View>
              <Text style={{...BasicStyle.textBoldMd, color: '#000'}}>
                Aisha Baig
              </Text>
              <Text style={{...BasicStyle.textRegularXs, color: '#262626'}}>
                After experiencing one of the most embarrassing moments of my
                life, Glenville came to the rescue with his professionalism and
                care. He went way above and beyond and I hope you recognize the
                world class employee you have on staff. Thank you, Glenville and
                thank you SLS!
              </Text>
            </View>
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
