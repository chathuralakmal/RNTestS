/*
 * platform/application wide metrics for proper styling
*/
import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: Platform.OS === 'ios' ? 54 : 66
};
const StatusBarHight = {
    fullActionSheet: Platform.OS === 'ios' ? 30 : 0,
};

export { Metrics, StatusBarHight };
