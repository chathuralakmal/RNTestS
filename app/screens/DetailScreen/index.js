import React, { Component } from 'react';
import { Text, FlatList, RefreshControl, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ToolBar from '../../components/ToolBar';
import { Container, Content, Card, CardItem, Title, Body, Subtitle } from 'native-base';
import NavigationService from "../../navigation/NavigationService";
import { getThumbnails, savePosts, saveThumbnails } from '../../redux/actions/postsActions';
import Thumbnail from '../../components/Thumbnail';

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: {}
        }
    }

    componentDidMount(){
        const selectedItem = this.props.navigation.getParam("selectedItem", {})
        console.log("Selected Item",selectedItem)
        this.setState({
            selectedItem
        })

        this.props.getThumbnails({
            callBack: this.onResponseThumbnails
        })
    }

    onResponseThumbnails = response =>{
        console.log(response)
    }


    goBack(){
        NavigationService.pop();
    }

    render() {

        var savedThumbnails = []
        if(this.props.thumbnails){
            savedThumbnails = Object.values(this.props.thumbnails)
        }

        return (
            <Container>
                <ToolBar backButton={true} goBack={this.goBack} title="Detail Screen"/>
                <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Title>
                                {this.state.selectedItem.title}
                            </Title>
                            <Text>{this.state.selectedItem.body}</Text>
                        </Body>
                </CardItem>
                </Card>

                <FlatList
                    data={savedThumbnails}
                    numColumns={2}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => { return(
                        <Thumbnail item={item} onPress={()=> this.navigate(item)}/>
                    )}}/>
              </Content>
            </Container>
          );
    }
}

function mapStateToProps(state) {
    return {
        thumbnails: state.postsReducer.thumbnails,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getThumbnails: payload => dispatch(getThumbnails(payload)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailScreen);
