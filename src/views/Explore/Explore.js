import React from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableIcon} from '../../components';

import {
  AlamatEQayamatIcon,
  AmarBinMaroofIcon,
  DaroodIcon,
  DostiIcon,
  DuaIcon,
  FazailEQuranIcon,
  FazailERehmatUlAlminIcon,
  FazailESahabaIcon,
  FazailESahabiyatIcon,
  GridIcon,
  HaqooqERehmatUlAlminIcon,
  IttebaSunnatIcon,
  JahannamIcon,
  JanazyIcon,
  JannatIcon,
  JihadIcon,
  KhanayPeenayIcon,
  LibasIcon,
  ListIcon,
  MasjidIcon,
  NamazIcon,
  QabarIcon,
  QayamatIcon,
  RozonIcon,
  SagheeraIcon,
  ShafaatIcon,
  TaharatIcon,
  TalaqIcon,
  TaleematEQuranIcon,
  TaqdeerIcon,
  TauheedIcon,
  TazkeenIcon,
  UmrahIcon,
  ZakaatIcon,
} from '../../assets/Images';
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
            <Text style={styles.categoryItems}>Categories</Text>
            <TouchableIcon
              onPress={() =>
                this.setState({showListView: !this.state.showListView})
              }
              source={showListView ? GridIcon : ListIcon}
              width={24}
              height={24}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={TauheedIcon}
              categoryTitle={'Tauheed Kay Masail'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={IttebaSunnatIcon}
              categoryTitle={'Itteba-e-Sunnat k Masail'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={TaharatIcon}
              categoryTitle={'Taharat kay Masail'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={NamazIcon}
              categoryTitle={'Namaz kay Masail'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={JanazyIcon}
              categoryTitle={'Janazy kay Masail'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={DaroodIcon}
              categoryTitle={'Darood Shareef kay Masail'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={DuaIcon}
              categoryTitle={'Dua kay Masail'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={ZakaatIcon}
              categoryTitle={'Zakaat kay Masail'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={RozonIcon}
              categoryTitle={'Rozon kay Masail'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={UmrahIcon}
              categoryTitle={'Umrah or Hajj kay Masail'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={JihadIcon}
              categoryTitle={'Jihad kay Masail'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={TauheedIcon}
              categoryTitle={'Tauheed Kay Masail'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={TalaqIcon}
              categoryTitle={'Talaq kay Masail'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={JannatIcon}
              categoryTitle={'Jannat ka Bayan'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={JahannamIcon}
              categoryTitle={'Jahan’nam ka Bayan'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={ShafaatIcon}
              categoryTitle={'Shafaat ka Bayan'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={QabarIcon}
              categoryTitle={'Qabar ka Bayan'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={QayamatIcon}
              categoryTitle={'Qayamat ka Bayan'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={DostiIcon}
              categoryTitle={'Dosti or Dusmani'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={AlamatEQayamatIcon}
              categoryTitle={'Alamaat-e-Qayamat ka Bayan'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={FazailEQuranIcon}
              categoryTitle={'Fazail-e-Quran Majeed'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={TaleematEQuranIcon}
              categoryTitle={'Taleemat-e-Quran Majeed'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={FazailERehmatUlAlminIcon}
              categoryTitle={'Fazail-e-rehmat-ul-almin'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={HaqooqERehmatUlAlminIcon}
              categoryTitle={'Haqooq Rehmat-ul-almin'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={DostiIcon}
              categoryTitle={'Dosti or Dusmani'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={AlamatEQayamatIcon}
              categoryTitle={'Alamaat-e-Qayamat ka Bayan'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={MasjidIcon}
              categoryTitle={'Masjid ka Bayan'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={LibasIcon}
              categoryTitle={'Libas ka Bayan'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={AmarBinMaroofIcon}
              categoryTitle={'Amar bil maroof wa nhi anil munkir'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={SagheeraIcon}
              categoryTitle={'Kabeera Sagheera gunahon ka bayan'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={FazailESahabaIcon}
              categoryTitle={'Fazail-e-Sahaba Juz-1'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={FazailESahabaIcon}
              categoryTitle={'Fazail-e-Sahaba Juz-2'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={FazailESahabaIcon}
              categoryTitle={'Fazail-e-Sahaba Juz-3'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={FazailESahabiyatIcon}
              categoryTitle={'Fazail-e-Sahabiyat Juz-1'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={FazailESahabiyatIcon}
              categoryTitle={'Fazail-e-Sahabiyat Juz-2'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={KhanayPeenayIcon}
              categoryTitle={'Khanay peenay kay Masail'}
              categoryItems={'20 items'}
            />
          </View>
          <View
            style={
              showListView
                ? styles.categoryListingColumn
                : styles.categoryListingRow
            }>
            <ListViewItem
              showListView={this.state.showListView}
              source={TazkeenIcon}
              categoryTitle={'Tazkeen-e-nafs kay Masail'}
              categoryItems={'20 items'}
            />
            <ListViewItem
              showListView={this.state.showListView}
              source={TaqdeerIcon}
              categoryTitle={'Taqdeer ky Masail'}
              categoryItems={'20 items'}
            />
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
