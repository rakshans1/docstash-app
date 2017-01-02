import React from 'react';
import {
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Linking
} from 'react-native';
import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';

class IntroCarousel extends React.Component {
    constructor(props) {
        super(props);
        StatusBar.setBackgroundColor('#000', true);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.main}>Docstash</Text>
                <Button raised title="SIGN UP" buttonStyle={styles.button} onPress={() => Actions.register()}/>
                <View style={styles.inline}>
                    <Text style={styles.already}>Already have an account?</Text>
                    <Text style={styles.signin} onPress={() => Actions.login()}>Sign in</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    main: {
        flex: 1,
        color: '#007ee5',
        textAlign: 'center',
        fontSize: 42,
        fontWeight: '300',
        alignSelf: 'center',
        marginTop: 60
    },
    already: {
        color: '#666',
        fontSize: 15,
        fontWeight: '300',
        // alignSelf: 'center',
        marginBottom: 50
    },
    inline: {
        flexDirection: 'row'
    },
    signin: {
        color: '#007ee5',
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 10
    },
    button: {
        // marginTop: 250,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: '#007ee5'
    }
});

export default IntroCarousel;
