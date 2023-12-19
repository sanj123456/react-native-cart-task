import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';

export const navigationRef: any = createNavigationContainerRef();

export function getCurrentRoute() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name;
  }
}

export function resetNavigation(name: string, params?: any) {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name, params}],
    }),
  );
}

export const errorToast = (
  description?: string,
  msg?: string,
  position?:
    | 'top'
    | 'bottom'
    | 'center'
    | {top?: number; left?: number; bottom?: number; right?: number},
) => {
  showMessage({
    message: msg ? msg : 'Oops!',
    description: description ? description : 'Oops! something went wrong',
    type: 'danger',
    position: position ?? 'bottom',
    icon: 'auto',
  });
};

export const successToast = (
  description: string,
  msg?: string,
  position?:
    | 'top'
    | 'bottom'
    | 'center'
    | {top?: number; left?: number; bottom?: number; right?: number},
) => {
  showMessage({
    message: msg ? msg : 'Success',
    description: description ? description : '',
    type: 'success',
    position: position ?? 'bottom',
    icon: 'auto',
  });
};
