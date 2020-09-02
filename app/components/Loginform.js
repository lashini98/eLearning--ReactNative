import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Button,
    StatusBar
} from 'react-native';
import SignUp from './Signup';

// const navigation = useNavigation();

export default class Loginform extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar>
                    barStyle="light-content"
                </StatusBar>
                <TextInput
                    placeholder="Username or Email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity 
                    style={styles.buttonContainter} 
                    onPress={() => {
                        console.log(this.props)
                        this.props.navigation.navigate('Home'); // ADDED THIS!!!
                    }}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainter1}
                    onPress={() => {
                        this.props.navigation.navigate('Signup'); //MADE SPELLING MISAKE OF onPress
                    }}
                >
                    <Text style={styles.buttonText1}>SIGN UP</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 70
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        fontWeight: '600',
        paddingHorizontal: 10,
        borderRadius: 8
    },

    buttonContainter: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 10
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },

    buttonContainter1: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 10
    },

    buttonText1: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '700'
    }

});
