import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Loader} from '../Loader';

const IconCustom = props => {
  const [isLoadedError, setIsLoadedError] = useState(false);

  const handleOnError = () => {
    setIsLoadedError(true);
  };

  const {
    width,
    height,
    source,
    isLoading,
    loaderSize = 'small',
    loaderColor,
    defaultSize = false,
    color = '',
    containerStyles = {},
    imageStyles = {},
  } = props;

  return isLoading ? (
    <Loader size={loaderSize} color={loaderColor} />
  ) : (
    <View style={{width, height, ...containerStyles}}>
      <Image
        onError={handleOnError}
        source={
          !isLoadedError ? source : require('../../assets/Images/more.png')
        }
        style={[!defaultSize && styles.imageStyles, imageStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    resizeMode: 'contain',
    width: '100%',
    flex: 1,
  },
});

export default IconCustom;
