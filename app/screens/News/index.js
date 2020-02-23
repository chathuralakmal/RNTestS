import React, { Component } from 'react';
import { Text, FlatList, RefreshControl, ScrollView, Linking } from 'react-native';
import { connect } from 'react-redux';
import ToolBar from '../../components/ToolBar';
import { Container, Form, Picker, Content } from 'native-base';
import ItemType from '../../components/ItemType';
import { getPosts, getNews } from '../../redux/actions/postsActions';
import NavigationService from "../../navigation/NavigationService";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            refresh: false,
            selected:'bitcoin',
         }
    }

    componentDidMount(){
     
            this.props.getNews({
                query:this.state.selected,
                callBack: this.onPostResponse
            });
        
    }

    onPostResponse = response =>{
        console.log("On Response",response)
        this.setState({refresh: false});
    }

    onRefresh() {
        this.setState({refresh: true});
        this.props.getNews({
            query:this.state.selected,
            callBack: this.onPostResponse
        });
      }

    navigate = (item) => {

        Linking.canOpenURL(item.url).then(supported => {
            if (supported) {
              Linking.openURL(item.url);
            } else {
              console.log("Don't know how to open URI: " + this.props.url);
            }
          });
    };

    onValueChange(value) {
        this.setState({
          selected: value
        },()=>{
            this.props.getNews({
                query:this.state.selected,
                callBack: this.onPostResponse
            });
        });
    }


    renderPicker(){
        return(
            <Content style={{borderColor:'#000',borderWidth:1}}>
                <Form>
                <Picker
                note
                mode="dropdown"
                
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
                >
                <Picker.Item label="Bitcoin" value="bitcoin" />
                <Picker.Item label="Apple" value="apple" />
                <Picker.Item label="Earthquake" value="earthquake" />
                <Picker.Item label="Animal" value="animal" />
                
                </Picker>
                </Form>
          </Content>
          )
    }

    render() {
        var savedPosts = [];
        if(this.props.news.articles){
            savedPosts = Object.values(this.props.news.articles)
        }

        return (
            <Container>
                <ToolBar title="News"/>
                
                <ScrollView
                    refreshControl={
                            <RefreshControl
                            refreshing={this.state.refresh}
                            onRefresh={() => this.onRefresh()}
                            tintColor="red"
                            />
                        }>
                    {this.renderPicker()}
                    <FlatList
                    data={savedPosts}
                    keyExtractor={(item, index) => item.title}
                    renderItem={({ item }) => { return(
                        <ItemType item={item} onPress={()=> this.navigate(item)}/>
                    )}}/>
                    </ScrollView>
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
)(News);
