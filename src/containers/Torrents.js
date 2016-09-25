import React, {PropTypes} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { signoutUser } from '../actions/authActions';
import { Button } from 'react-native-elements'

class Torrent extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Button title='Logout'
        onPress={()=>this.props.dispatch(signoutUser())}
         />
      </View>
    );
  }
}
const styles =  StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  }
});

Torrent.propTypes = {
  dispatch: PropTypes.func
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Torrent);
