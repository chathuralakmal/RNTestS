import { NavigationActions, StackActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function goBack(key) {
    _navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    );
}


function pop(n = 1) {
    const popAction = StackActions.pop({ n: n });
    _navigator.dispatch(popAction);
  }

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    pop,
    setTopLevelNavigator
};
