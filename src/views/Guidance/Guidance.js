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

class Guidance extends React.Component {
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
            <View
              style={{
                ...BasicStyle.flexDirectionRow,
                ...BasicStyle.alignItemsCenter,
                ...BasicStyle.justifyContentBetween,
                borderBottomWidth: 1,
                borderBottomColor: '#e9e9e9',
                paddingVertical: 20,
              }}>
              <View
                style={{
                  ...BasicStyle.flexDirectionRow,
                  ...BasicStyle.alignItemsCenter,
                  ...BasicStyle.justifyContentBetween,
                }}>
                <TouchableIcon source={User3} width={50} height={50} />
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textRegularXs, lineHeight: 15}}>
                    Jessica Smith
                  </Text>
                  <Text
                    style={{
                      ...BasicStyle.textRegularXs,
                      color: '#696969',
                      lineHeight: 15,
                    }}>
                    Past Places Experience
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow}}>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Skardu
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Swat
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <TouchableIcon source={ChatIcon} width={15} height={15} />
                </View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                    marginTop: 5,
                  }}>
                  <TouchableIcon source={PhoneIcon} width={15} height={15} />
                </View>
              </View>
            </View>
            <View
              style={{
                ...BasicStyle.flexDirectionRow,
                ...BasicStyle.alignItemsCenter,
                ...BasicStyle.justifyContentBetween,
                borderBottomWidth: 1,
                borderBottomColor: '#e9e9e9',
                paddingVertical: 20,
              }}>
              <View
                style={{
                  ...BasicStyle.flexDirectionRow,
                  ...BasicStyle.alignItemsCenter,
                  ...BasicStyle.justifyContentBetween,
                }}>
                <TouchableIcon source={User3} width={50} height={50} />
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textRegularXs, lineHeight: 15}}>
                    Jessica Smith
                  </Text>
                  <Text
                    style={{
                      ...BasicStyle.textRegularXs,
                      color: '#696969',
                      lineHeight: 15,
                    }}>
                    Past Places Experience
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow}}>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Skardu
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Swat
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <TouchableIcon source={ChatIcon} width={15} height={15} />
                </View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                    marginTop: 5,
                  }}>
                  <TouchableIcon source={PhoneIcon} width={15} height={15} />
                </View>
              </View>
            </View>
            <View
              style={{
                ...BasicStyle.flexDirectionRow,
                ...BasicStyle.alignItemsCenter,
                ...BasicStyle.justifyContentBetween,
                borderBottomWidth: 1,
                borderBottomColor: '#e9e9e9',
                paddingVertical: 20,
              }}>
              <View
                style={{
                  ...BasicStyle.flexDirectionRow,
                  ...BasicStyle.alignItemsCenter,
                  ...BasicStyle.justifyContentBetween,
                }}>
                <TouchableIcon source={User3} width={50} height={50} />
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textRegularXs, lineHeight: 15}}>
                    Jessica Smith
                  </Text>
                  <Text
                    style={{
                      ...BasicStyle.textRegularXs,
                      color: '#696969',
                      lineHeight: 15,
                    }}>
                    Past Places Experience
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow}}>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Skardu
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Swat
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <TouchableIcon source={ChatIcon} width={15} height={15} />
                </View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                    marginTop: 5,
                  }}>
                  <TouchableIcon source={PhoneIcon} width={15} height={15} />
                </View>
              </View>
            </View>
            <View
              style={{
                ...BasicStyle.flexDirectionRow,
                ...BasicStyle.alignItemsCenter,
                ...BasicStyle.justifyContentBetween,
                borderBottomWidth: 1,
                borderBottomColor: '#e9e9e9',
                paddingVertical: 20,
              }}>
              <View
                style={{
                  ...BasicStyle.flexDirectionRow,
                  ...BasicStyle.alignItemsCenter,
                  ...BasicStyle.justifyContentBetween,
                }}>
                <TouchableIcon source={User3} width={50} height={50} />
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textRegularXs, lineHeight: 15}}>
                    Jessica Smith
                  </Text>
                  <Text
                    style={{
                      ...BasicStyle.textRegularXs,
                      color: '#696969',
                      lineHeight: 15,
                    }}>
                    Past Places Experience
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow}}>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Skardu
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Swat
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <TouchableIcon source={ChatIcon} width={15} height={15} />
                </View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                    marginTop: 5,
                  }}>
                  <TouchableIcon source={PhoneIcon} width={15} height={15} />
                </View>
              </View>
            </View>
            <View
              style={{
                ...BasicStyle.flexDirectionRow,
                ...BasicStyle.alignItemsCenter,
                ...BasicStyle.justifyContentBetween,
                borderBottomWidth: 1,
                borderBottomColor: '#e9e9e9',
                paddingVertical: 20,
              }}>
              <View
                style={{
                  ...BasicStyle.flexDirectionRow,
                  ...BasicStyle.alignItemsCenter,
                  ...BasicStyle.justifyContentBetween,
                }}>
                <TouchableIcon source={User3} width={50} height={50} />
                <View style={{marginLeft: 20}}>
                  <Text style={{...BasicStyle.textRegularXs, lineHeight: 15}}>
                    Jessica Smith
                  </Text>
                  <Text
                    style={{
                      ...BasicStyle.textRegularXs,
                      color: '#696969',
                      lineHeight: 15,
                    }}>
                    Past Places Experience
                  </Text>
                  <View style={{...BasicStyle.flexDirectionRow}}>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Skardu
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 23,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EEEDED',
                        borderRadius: 5,
                        marginRight: 5,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          ...BasicStyle.textRegularSm,
                          color: '#1e1e1e',
                        }}>
                        Swat
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                  }}>
                  <TouchableIcon source={ChatIcon} width={15} height={15} />
                </View>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: '#eeeded',
                    borderRadius: 30,
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentCenter,
                    marginTop: 5,
                  }}>
                  <TouchableIcon source={PhoneIcon} width={15} height={15} />
                </View>
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

export default Guidance;
