import React, { Component, PropTypes } from 'react';
import { ActivityIndicator,View } from 'react-native'

export default class LoadingIndicator extends Component {
  render() {
    return (
      <View style={[{flex: 1, justifyContent: 'center',alignItems: 'center',padding:10},this.props.style]}>
        <ActivityIndicator size="large" animating={true} color="#007ee5" />
      </View>
    );
  }
}
