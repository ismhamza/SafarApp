import React from 'react';

import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Calendar, DownIcon} from '../../assets/Images';
import {TouchableIcon} from '../../components';
import BasicStyle from '../../styles/BasicStyle';
import {padding} from '../../styles/Theme';

class Travel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* Top Card */}
          <View style={[styles.card, {marginTop: 10}]}>
            <View style={styles.header}>
              <Text style={{...BasicStyle.textBoldLg}}>
                Tell Us Where You Want
              </Text>
              <Text style={{...BasicStyle.textRegularMd}}>To Travel</Text>
            </View>

            {/* Question section */}
            {/* Where travel */}
            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  ...BasicStyle.textRegularSm,
                  marginVertical: 15,
                  color: '#1e1e1e',
                }}>
                where you want to travel ?
              </Text>
              <View style={{...BasicStyle.flexDirectionRow, flexWrap: 'wrap'}}>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    Kashmir
                  </Text>
                </View>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    Baltistan
                  </Text>
                </View>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
            {/* Select dates */}
            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  ...BasicStyle.textRegularSm,
                  marginVertical: 15,
                  color: '#1e1e1e',
                }}>
                Select your dates
              </Text>
              <View style={{...BasicStyle.flexDirectionRow, flexWrap: 'wrap'}}>
                <View
                  style={{
                    ...BasicStyle.alignItemsCenter,
                    ...BasicStyle.justifyContentBetween,
                    ...BasicStyle.flexDirectionRow,
                    height: 50,
                    width: '100%',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    backgroundColor: '#EEEDED',
                    borderRadius: 10,
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      ...BasicStyle.textRegularSm,
                      color: '#1e1e1e',
                    }}>
                    Select Dates
                  </Text>
                  <TouchableIcon source={Calendar} width={18} height={18} />
                </View>
              </View>
            </View>
            {/* How persons */}
            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  ...BasicStyle.textRegularSm,
                  marginVertical: 15,
                  color: '#1e1e1e',
                }}>
                How many persons ?
              </Text>
              <View style={{...BasicStyle.flexDirectionRow, flexWrap: 'wrap'}}>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    Groups of 2
                  </Text>
                </View>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    Groups of 5
                  </Text>
                </View>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    Groups of ^
                    {/* <TouchableIcon source={DownIcon} width={10} height={10} /> */}
                  </Text>
                </View>
              </View>
            </View>
            {/* Need assistance */}
            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  ...BasicStyle.textRegularSm,
                  marginVertical: 15,
                  color: '#1e1e1e',
                }}>
                Need Assistance ?
              </Text>
              <View style={{...BasicStyle.flexDirectionRow, flexWrap: 'wrap'}}>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    Hire guide
                  </Text>
                </View>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    Hire driver
                  </Text>
                </View>
                <View
                  style={{
                    height: 37,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
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
                    Gears on rent
                  </Text>
                </View>
              </View>
            </View>
            {/* This is what i need */}
            <TouchableOpacity
              style={{
                backgroundColor: '#0B7DFD',
                borderRadius: 10,
                height: 51,
                width: '100%',
                ...BasicStyle.alignItemsCenter,
                ...BasicStyle.justifyContentCenter,
              }}>
              <Text style={{...BasicStyle.textBoldMd, color: '#fff'}}>
                This is what i need
              </Text>
            </TouchableOpacity>
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
export default Travel;
