import React, {Component} from 'react';
import {View} from 'react-native';

export default class Triangle extends Component {
  render () {
    console.log ('this.props.ref');
    return <View style={[styles.triangle, this.props.style]} />;
  }
}

const styles = StyleSheet.create ({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
});
