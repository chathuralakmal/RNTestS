import React, { useState } from 'react';
import { Colors } from '../../config/Colors';
import { Header, Title,  Button, Left, Right, Body, Icon, Text, Spinner } from 'native-base';

import { withNavigation } from '@react-navigation/native';

class ToolBar extends React.Component {
    render(){
        return (
            <Header style={{backgroundColor:Colors.ACCENT_COLOR}}>
                <Left>
                    {this.props.backButton &&
                        <Button transparent onPress={()=> { this.props.goBack() }}>
                            <Icon style={{color: '#fff'}} name='chevron-left' type='Entypo' />
                        </Button>
                    }
                </Left>
                <Body style={{flex: 3, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color: '#fff'}}>{this.props.title}</Text>
                </Body>
                
                <Right/>
            </Header>
        );
    }
}

export default ToolBar;