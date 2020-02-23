/*
 * Provides universal fonts used in the app.
 */
import { StyleSheet } from 'react-native';
import { Colors, FontSize } from '../../config/';

let typeSpaceFamily = 'Roboto';

const Typography = StyleSheet.create({
    largerHeading:{
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.largeText,
        fontWeight: 'bold',
        color: Colors.COLOR_BLACK
    },
    largeMediumHeading:{
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.largeMedium,
        fontWeight: 'bold',
        color: Colors.COLOR_BLACK
    },
    heading: {
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.h1,
        fontWeight: 'bold',
        color: Colors.COLOR_BLACK
    },

    title: {
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.h2,
        fontWeight: 'bold',
        color: Colors.COLOR_PRIMARY
    },

    subtitle: {
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.h3,
        fontWeight: 'normal',
        color: Colors.COLOR_BLACK
    },

    caption: {
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.title,
        fontWeight: 'bold',
        color: Colors.COLOR_TEXT_SECONDARY_GREY
    },
    text: {
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.body,
        fontWeight: 'normal',
        color: Colors.COLOR_TEXT_SECONDARY_GREY
    },
    link: {
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.body,
        fontWeight: 'bold',
        color: Colors.COLOR_SUPPORT_BLUE
    },
    textSmall: {
        fontFamily: typeSpaceFamily,
        fontSize: FontSize.bodySmall,
        fontWeight: 'normal',
        color: Colors.uiOne
    },
});


export default Typography;