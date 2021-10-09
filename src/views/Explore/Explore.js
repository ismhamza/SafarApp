import React from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableIcon} from '../../components';

import ListViewItem from '../../components/ListViewItem/ListViewItem';
import {padding, themeColor} from '../../styles/Theme';
import BasicStyle from '../../styles/BasicStyle';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showListView: false};
  }

  render() {
    const {navigation} = this.props;
    const {showListView} = this.state;
    console.log(showListView);
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.categoryWrapper}>
            <Text style={styles.categoryItems}>Malang</Text>
            {/* <TouchableIcon
              onPress={() =>
                this.setState({showListView: !this.state.showListView})
              }
              source={showListView ? GridIcon : ListIcon}
              width={24}
              height={24}
            /> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: padding.xl,
  },
  categoryListingColumn: {...BasicStyle.flexDirectionCol},
  categoryListingRow: {...BasicStyle.flexDirectionRow},
  categoryWrapper: {
    ...BasicStyle.justifyContentBetween,
    ...BasicStyle.flexDirectionRow,
  },
  categoryItems: {...BasicStyle.textBoldLg, color: themeColor.grayBright},
});

export default Explore;
