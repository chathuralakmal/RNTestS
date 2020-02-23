import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux';
import ToolBar from '../../components/ToolBar';
import { Container, Item, Label, Form, Input, Content, Button, Text, Toast } from 'native-base';
import ItemType from '../../components/ItemType';
import { getPosts, getNews } from '../../redux/actions/postsActions';
import NavigationService from "../../navigation/NavigationService";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            emailAddress: "",
         }
    }

    componentDidMount(){
      this._retrieveData()
    }

    validateUser(){
      if(this.state.name != "" && this.state.emailAddress != ""){
        this._storeData()
      }else{
        Toast.show({
          text: "Please fill the fields before submit!",
          buttonText: "Okay",
          type: "danger",
          position: "top"
        })
      }

    }

    _storeData = async () => {
        try {
          await AsyncStorage.setItem('@name', this.state.name);
          await AsyncStorage.setItem('@emailAddress', this.state.emailAddress);

          Toast.show({
            text: "Data Saved",
            buttonText: "Okay",
            type: "success",
            position: "top"
          })
        } catch (error) {
          // Error saving data
          console.log('Error Saving',error)
        }
      };


      _retrieveData = async () => {
        try {
          const nameValue = await AsyncStorage.getItem('@name');
          if (nameValue !== null) {
            this.setState({
              name: nameValue
            })
          }
          const emailValue = await AsyncStorage.getItem('@emailAddress');
          if (emailValue !== null) {
            this.setState({
              emailAddress: emailValue
            })
          }
        } catch (error) {
          // Error retrieving data
          console.log('Error retrieving',error)
        }
      };
      
    render() {
        return (
            <Container>
                <ToolBar title="Profile"/>
                <Content>
                <Form>
                    <Item floatingLabel>
                    <Label>Name</Label>
                    <Input value={this.state.name}  onChangeText={text => this.setState({ name: text })} />
                    </Item>
                    <Item floatingLabel last>
                    <Label>Email Address</Label>
                    <Input value={this.state.emailAddress} onChangeText={text => this.setState({ emailAddress: text })} />
                    </Item>
                </Form>
                <Button onPress={this.validateUser.bind(this)} large style={{ marginLeft:15, marginRight:15, marginTop: 45, justifyContent: 'center', }}><Text>Submit</Text></Button>

                </Content>
            </Container>
          );
    }
}

function mapStateToProps(state) {
    return {
        news: state.postsReducer.news,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getNews: payload => dispatch(getNews(payload)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
