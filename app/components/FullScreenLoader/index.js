import React, { Component } from "react";
import { View, Modal, Image, Text } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Colors, colors, Images } from "../../config";

class FullScreenLoader extends Component {
  render() {
    return (
      <Modal
        visible={this.props.loader}
        transparent={true}
        animationType={"fade"}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContent}>
          <Image style={styles.loaderImage} source={Images.loader.fullScreenLoader} />
          <Text style={styles.text}>{this.props.loaderMessage}</Text>
        </View>
      </Modal>
    );
  }
}

FullScreenLoader.propTypes = {
  loaderMessage: PropTypes.string,
  loader: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    loader: state.appReducer.fullScreenLoaderShow,
    loaderMessage: state.appReducer.fullScreenLoaderText
  };
};

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenLoader);

const styles = {
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff'
  },
  loaderImage: {
    width: 70,
    height: 70,
    margin: 5
  },
  text: {}
};
