import React, {FC, memo} from 'react';
import FastImage from 'react-native-fast-image';
import {MyImageProps} from '../../types/componentsTypes';

const MyImage: FC<MyImageProps> = props => {
  const {source, style} = props;
  return <FastImage source={source} style={style} resizeMode="contain" />;
};
export default memo(MyImage);
