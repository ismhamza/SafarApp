import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
import {TouchableIcon} from '../../components';

import {padding} from '../../styles/Theme';
import BasicStyle from '../../styles/BasicStyle';
import {
  BackgroundImg,
  CameraIcon,
  CommentIcon,
  FilterIcon,
  LaggageIcon,
  LikeIcon,
  LocationIcon,
  MoreIcon,
  Star,
  StarActiveIcon,
  StarGrayIcon,
  User1,
  User2,
  VideoIcon,
} from '../../assets/Images';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showListView: false};
  }

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* Top Card */}
          <View style={[styles.card, {marginTop: 10}]}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <TouchableIcon source={LocationIcon} width={14} height={14} />
                <Text style={{marginLeft: 5, ...BasicStyle.textRegularSm}}>
                  Arang kel, Kashmir
                </Text>
              </View>
              <TouchableIcon source={FilterIcon} width={16} height={16} />
            </View>

            {/* Share Memories */}
            <View style={{marginTop: 18, ...BasicStyle.flexDirectionRow}}>
              <View
                style={{
                  backgroundColor: '#DBEBFC',
                  borderRadius: 20,
                  height: 40,
                  width: 40,
                  ...BasicStyle.alignItemsCenter,
                }}>
                <TouchableIcon source={User1} width={32} height={32} />
              </View>
              <TextInput
                placeholder="Share your memories"
                placeholderTextColor="#1e1e1e"
                style={{
                  width: '85%',
                  backgroundColor: '#DBEBFC',
                  height: 38,
                  borderRadius: 20,
                  marginLeft: 10,
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  color: '#1e1e1e',
                }}
              />
            </View>

            {/* Upload */}
            <View
              style={{
                marginTop: 21,
                ...BasicStyle.flexDirectionRow,
                ...BasicStyle.justifyContentBetween,
                ...BasicStyle.alignItemsCenter,
                borderTopWidth: 1,
                borderTopColor: '#DBEBFC',
                paddingTop: 15,
                paddingHorizontal: 15,
              }}>
              <View
                style={{
                  ...BasicStyle.flexDirectionRow,
                  borderRightColor: '#DBEBFC',
                  borderRightWidth: 1,
                  paddingRight: 30,
                }}>
                <TouchableIcon source={CameraIcon} width={20} height={18} />
                <Text style={{marginLeft: 10, ...BasicStyle.textRegularXs}}>
                  Upload Pics
                </Text>
              </View>
              <View
                style={{
                  ...BasicStyle.flexDirectionRow,
                }}>
                <TouchableIcon source={VideoIcon} width={20} height={18} />
                <Text style={{marginLeft: 10, ...BasicStyle.textRegularXs}}>
                  Upload Videos
                </Text>
              </View>
            </View>
          </View>
          {/* ------------------------------------TOP CARD------------------------------------------------------ */}

          {/* Mid section */}
          <View
            style={{
              ...BasicStyle.flexDirectionRow,
              ...BasicStyle.justifyContentBetween,
              marginVertical: 20,
              marginHorizontal: 5,
            }}>
            <View
              style={{
                ...BasicStyle.flexDirectionRow,
              }}>
              <Text
                style={{
                  ...BasicStyle.textBoldSm,
                  color: '#0B7DFD',
                  marginRight: 5,
                }}>
                Explore
              </Text>
              <Text
                style={{
                  ...BasicStyle.textRegularSm,
                  color: '#484848',
                }}>
                What people Share{' '}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...BasicStyle.textBoldSm,
                  color: '#0B7DFD',
                }}>
                View all
              </Text>
            </View>
          </View>

          {/* Middle Card */}
          <View style={styles.card}>
            {/* Location */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View
                  style={{
                    backgroundColor: '#DBEBFC',
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    ...BasicStyle.alignItemsCenter,
                  }}>
                  <TouchableIcon source={User2} width={40} height={40} />
                </View>
                <Text style={{marginLeft: 5, ...BasicStyle.textRegularSm}}>
                  Sufia Khan
                </Text>
              </View>
              <TouchableIcon source={MoreIcon} width={25} height={25} />
            </View>

            {/* Share Memories */}
            <View
              style={{
                marginTop: 18,
                ...BasicStyle.flexDirectionRow,
              }}>
              <View style={{width: '100%', height: 200}}>
                <ImageBackground
                  source={BackgroundImg}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    ...BasicStyle.justifyContentEnd,
                  }}>
                  <View
                    style={{
                      ...BasicStyle.flexDirectionRow,
                      ...BasicStyle.justifyContentBetween,
                      ...BasicStyle.alignItemsEnd,
                      marginHorizontal: 14,
                      marginVertical: 16,
                    }}>
                    <View>
                      <Text style={{...BasicStyle.textBoldLg, color: '#fff'}}>
                        Fairy Medows
                      </Text>
                      <Text
                        style={{...BasicStyle.textRegularXs, color: '#fff'}}>
                        Gitgit-Baltistan, Pakistan
                      </Text>
                      <View style={{...BasicStyle.flexDirectionRow}}>
                        <TouchableIcon source={Star} width={10} height={10} />
                        <TouchableIcon source={Star} width={10} height={10} />
                        <TouchableIcon source={Star} width={10} height={10} />
                        <TouchableIcon source={Star} width={10} height={10} />
                        <TouchableIcon
                          source={StarGrayIcon}
                          width={10}
                          height={10}
                        />
                      </View>
                    </View>
                    {/* Like and Comment */}
                    <View style={{...BasicStyle.flexDirectionRow}}>
                      <View style={{marginRight: 20, position: 'relative'}}>
                        <TouchableIcon
                          source={LikeIcon}
                          width={18}
                          height={18}
                        />
                        <View
                          style={{
                            position: 'absolute',
                            height: 18,
                            width: 18,
                            backgroundColor: '#0B7DFD',
                            borderRadius: 20,
                            right: -12,
                            top: -8,
                            borderWidth: 1,
                            borderColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              ...BasicStyle.textRegularXs,
                              color: '#fff',
                            }}>
                            1
                          </Text>
                        </View>
                      </View>
                      <TouchableIcon
                        source={CommentIcon}
                        width={18}
                        height={18}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          {/* ==========================================================Middle Card======================================================== */}

          {/* Travelling Gear List */}
          <View
            style={{
              ...BasicStyle.flexDirectionRow,
              ...BasicStyle.justifyContentBetween,
              marginVertical: 20,
              marginHorizontal: 5,
            }}>
            <View
              style={{
                ...BasicStyle.flexDirectionRow,
              }}>
              <Text
                style={{
                  ...BasicStyle.textBoldSm,
                  color: '#0B7DFD',
                  marginRight: 5,
                }}>
                Travelling
              </Text>
              <Text
                style={{
                  ...BasicStyle.textRegularSm,
                  color: '#484848',
                }}>
                Gears
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TravellingGearListing')}>
              <Text
                style={{
                  ...BasicStyle.textBoldSm,
                  color: '#0B7DFD',
                }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>

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

          {/* ===============================Travelling Gear Card========================= */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: padding.sm,
  },
  categoryListingColumn: {...BasicStyle.flexDirectionCol},
  categoryListingRow: {...BasicStyle.flexDirectionRow},
  header: {
    ...BasicStyle.flexDirectionRow,
    ...BasicStyle.justifyContentBetween,
    ...BasicStyle.alignItemsCenter,
  },
  headerLeft: {
    ...BasicStyle.flexDirectionRow,
    ...BasicStyle.alignItemsCenter,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#efefef',
    borderWidth: 1,
    paddingHorizontal: 13,
    paddingVertical: 13,
  },
});

export default Explore;
