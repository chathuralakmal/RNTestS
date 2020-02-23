import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Icon, ListItem, Col, Grid, Row, Content, Text } from 'native-base';

export default class ItemType extends React.Component {


    render(){
        return (
                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', margin: 10 }} onPress={this.props.onPress}>
                 <ListItem>
                    <Image
                        style={{alignSelf:'center', resizeMode:'contain', width:150, height:150 }}
                        source={{ uri: this.props.item.thumbnailUrl }}
                        />
                    </ListItem>
                </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        margin:10,
    },
   
    textStyle:{
        marginLeft:30
    }
   
});
