import {NavigationProp} from '@react-navigation/native';

export type LoadingParams =
  | 'refreshing'
  | 'loading_more'
  | 'contact_us'
  | 'rating'
  | 'search'
  | undefined;

export type LoaderProps = {
  isLoading: boolean;
};

export type CommonNavigationProps = {
  navigation: NavigationProp<any, any>;
  route: any;
};
