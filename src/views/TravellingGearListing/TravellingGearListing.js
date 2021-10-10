import React from 'react';

import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  FilterIcon,
  GlassesIcon,
  JacketIcon,
  LaggageIcon,
  SearchIcon,
  SelfieIcon,
  ShoesIcon,
  StarActiveIcon,
  StarGrayIcon,
} from '../../assets/Images';
import {TouchableIcon} from '../../components';
import BasicStyle from '../../styles/BasicStyle';
import {padding} from '../../styles/Theme';

class TravellingGearListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
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
          {/* Travelling Gear Card */}
          <View style={styles.card}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View
                  style={{
                    backgroundColor: '#DBEBFC',
                    height: 60,
                    width: 60,
                    ...BasicStyle.alignItemsCenter,
                  }}>
                  <TouchableIcon source={LaggageIcon} width={60} height={60} />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textBoldXs}}>Spectra 8w</Text>
                  <Text style={{...BasicStyle.textRegularXs}}>
                    75cm/29in - Red
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow, marginTop: 5}}>
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarGrayIcon}
                      width={10}
                      height={10}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={{...BasicStyle.textBoldSm}}>RS 12,234</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0B7DFD',
                    borderRadius: 10,
                    height: 25,
                    width: 84,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <Text style={{...BasicStyle.textRegularXs, color: '#fff'}}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View
                  style={{
                    backgroundColor: '#DBEBFC',
                    height: 60,
                    width: 60,
                    ...BasicStyle.alignItemsCenter,
                  }}>
                  <TouchableIcon source={ShoesIcon} width={60} height={60} />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textBoldXs}}>Nike Sneakers</Text>
                  <Text style={{...BasicStyle.textRegularXs}}>
                    9/30 - white
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow, marginTop: 5}}>
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarGrayIcon}
                      width={10}
                      height={10}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={{...BasicStyle.textBoldSm}}>RS 20,134</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0B7DFD',
                    borderRadius: 10,
                    height: 25,
                    width: 84,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <Text style={{...BasicStyle.textRegularXs, color: '#fff'}}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View
                  style={{
                    backgroundColor: '#DBEBFC',
                    height: 60,
                    width: 60,
                    ...BasicStyle.alignItemsCenter,
                  }}>
                  <TouchableIcon source={JacketIcon} width={60} height={60} />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textBoldXs}}>
                    Spectra Leather Jacket
                  </Text>
                  <Text style={{...BasicStyle.textRegularXs}}>
                    20in - Black
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow, marginTop: 5}}>
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarGrayIcon}
                      width={10}
                      height={10}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={{...BasicStyle.textBoldSm}}>RS 14,23</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0B7DFD',
                    borderRadius: 10,
                    height: 25,
                    width: 84,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <Text style={{...BasicStyle.textRegularXs, color: '#fff'}}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View
                  style={{
                    backgroundColor: '#DBEBFC',
                    height: 60,
                    width: 60,
                    ...BasicStyle.alignItemsCenter,
                  }}>
                  <TouchableIcon source={GlassesIcon} width={60} height={60} />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textBoldXs}}>
                    Rayban Ultra max
                  </Text>
                  <Text style={{...BasicStyle.textRegularXs}}>
                    9/10 - Black-Gray-Red
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow, marginTop: 5}}>
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarGrayIcon}
                      width={10}
                      height={10}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={{...BasicStyle.textBoldSm}}>RS 32,234</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0B7DFD',
                    borderRadius: 10,
                    height: 25,
                    width: 84,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <Text style={{...BasicStyle.textRegularXs, color: '#fff'}}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View
                  style={{
                    backgroundColor: '#DBEBFC',
                    height: 60,
                    width: 60,
                    ...BasicStyle.alignItemsCenter,
                  }}>
                  <TouchableIcon source={SelfieIcon} width={60} height={60} />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textBoldXs}}>
                    Edge seflie stick
                  </Text>
                  <Text style={{...BasicStyle.textRegularXs}}>
                    75cm - Black
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow, marginTop: 5}}>
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarGrayIcon}
                      width={10}
                      height={10}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={{...BasicStyle.textBoldSm}}>RS 17,256</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0B7DFD',
                    borderRadius: 10,
                    height: 25,
                    width: 84,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <Text style={{...BasicStyle.textRegularXs, color: '#fff'}}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View
                  style={{
                    backgroundColor: '#DBEBFC',
                    height: 60,
                    width: 60,
                    ...BasicStyle.alignItemsCenter,
                  }}>
                  <TouchableIcon source={LaggageIcon} width={60} height={60} />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textBoldXs}}>Spectra 8w</Text>
                  <Text style={{...BasicStyle.textRegularXs}}>
                    75cm/29in - Red
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow, marginTop: 5}}>
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarGrayIcon}
                      width={10}
                      height={10}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={{...BasicStyle.textBoldSm}}>RS 12,234</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0B7DFD',
                    borderRadius: 10,
                    height: 25,
                    width: 84,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <Text style={{...BasicStyle.textRegularXs, color: '#fff'}}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View
                  style={{
                    backgroundColor: '#DBEBFC',
                    height: 60,
                    width: 60,
                    ...BasicStyle.alignItemsCenter,
                  }}>
                  <TouchableIcon source={LaggageIcon} width={60} height={60} />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textBoldXs}}>Spectra 8w</Text>
                  <Text style={{...BasicStyle.textRegularXs}}>
                    75cm/29in - Red
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow, marginTop: 5}}>
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarActiveIcon}
                      width={10}
                      height={10}
                    />
                    <TouchableIcon
                      source={StarGrayIcon}
                      width={10}
                      height={10}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={{...BasicStyle.textBoldSm}}>RS 12,234</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0B7DFD',
                    borderRadius: 10,
                    height: 25,
                    width: 84,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <Text style={{...BasicStyle.textRegularXs, color: '#fff'}}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: '#fff',
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
    ...BasicStyle.flexDirectionRow,
    ...BasicStyle.justifyContentBetween,
    ...BasicStyle.alignItemsCenter,
  },
  headerLeft: {
    ...BasicStyle.flexDirectionRow,
    ...BasicStyle.alignItemsCenter,
  },
});

export default TravellingGearListing;
