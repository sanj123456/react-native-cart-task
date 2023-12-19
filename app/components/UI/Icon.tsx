import React, {FC, memo} from 'react';
import {Image, ImageStyle, TouchableOpacity, ViewStyle} from 'react-native';
type IconType = {
  style?: ViewStyle | any;
  source?: any;
  imageStyle?: ImageStyle | any;
  onPress?: () => void;
};
const Icon: FC<IconType> = props => {
  const {source, style, onPress, imageStyle} = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image source={source} style={imageStyle} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export default memo(Icon);
