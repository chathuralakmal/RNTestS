import React, { Component } from 'react';
import { Text, FlatList, RefreshControl, ScrollView, Linking } from 'react-native';
import { connect } from 'react-redux';
import ToolBar from '../../components/ToolBar';
import { Container } from 'native-base';
import ItemType from '../../components/ItemType';
import { getPosts, savePosts } from '../../redux/actions/postsActions';
import NavigationService from "../../navigation/NavigationService";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            refresh: false,
         }
    }

    componentDidMount(){
        console.log(this.props.posts)
        const posts = Object.values(this.props.posts)
        // if(posts.length == 0){
            this.props.getPosts({
                country:"us",
                callBack: this.onPostResponse
            });
        // } 
    }

    onPostResponse = response =>{
        console.log("On Response")
        this.setState({refresh: false});
    }

    onRefresh() {
        this.setState({refresh: true});
        this.props.getPosts({
            country:"us",
            callBack: this.onPostResponse
        });
      }

    navigate = (item) => {
        console.log("Selected ",item.url)
        
        Linking.canOpenURL(item.url).then(supported => {
            if (supported) {
              Linking.openURL(item.url);
            } else {
              console.log("Don't know how to open URI: " + this.props.url);
            }
          });

    };

    render() {
        var savedPosts = [];
        if(this.props.posts.articles){
            savedPosts = Object.values(this.props.posts.articles)
        }

        return (
            <Container>
                <ToolBar title="Home"/>
                <ScrollView
                    refreshControl={
                            <RefreshControl
                            refreshing={this.state.refresh}
                            onRefresh={() => this.onRefresh()}
                            tintColor="red"
                            />
                        }>
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
        posts: state.postsReducer.posts,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPosts: payload => dispatch(getPosts(payload)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
