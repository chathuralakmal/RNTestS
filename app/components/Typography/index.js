import React, { Component } from 'react';
import { Text as RNText } from 'react-native';
import ConnectStyle from './ConnectStyle';

class StyledText extends Component {

    render() {
        return (
            <RNText {...this.props} />
        );
    }
}

StyledText.propTypes = {
    ...RNText.propTypes,
};

// default: weight: normal, align: left
// <Text weight='bold' align='center' style={{ margin: 16, color: Colors.BLACK, .... }}>Some text<Text>

const LargerHeading = ConnectStyle('largerHeading')(StyledText); // 36
const LargeMediumHeading = ConnectStyle('largeMediumHeading')(StyledText); // 30
const Heading = ConnectStyle('heading')(StyledText); // 24
const Title = ConnectStyle('title')(StyledText); // 18
const Subtitle = ConnectStyle('subtitle')(StyledText); // 18
const Caption = ConnectStyle('caption')(StyledText);// 16
const Text = ConnectStyle('text')(StyledText); // 14
const Link = ConnectStyle('link')(StyledText); // 14
const Label = ConnectStyle('label')(StyledText); // 14
const SecondaryText = ConnectStyle('secondary_text')(StyledText); // 12

export {
    LargerHeading,
    Heading,
    Title,
    Subtitle,
    Caption,
    Text,
    Label,
    Link,
    SecondaryText,
    LargeMediumHeading
};
