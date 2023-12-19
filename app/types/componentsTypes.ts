import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type FieldInputProps = {
  viewStyle?: ViewStyle;
  inputStyles?: TextStyle;
  onChangeText?: (a: string) => void | undefined;
  onBlur?: (a: any | null) => void;
  value?: string | any;
  blurOnSubmit?: boolean;
  maxLength?: number;
  onSubmitEditing?: () => void;
  keyboardType?: 'numeric' | 'default';
  placeholder?: string;
  isPassword?: boolean;
};

export type MyImageProps = {
  style?: ImageStyle | any;
  source: any;
  testID?: string;
};

export type FontsProps = {
  children: any;
  style?: TextStyle | any;
  onPress?: () => void;
};

export type PrimaryButtonProps = {
  onPress?: () => void;
  style?: any;
  title?: string;
  tStyle?: any;
};
