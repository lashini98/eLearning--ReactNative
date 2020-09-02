import React from 'react'
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native'

export default class SignUp extends React.Component {
    state = {
        username: '', password: '', email: '', phone_number: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = async () => {
        const { username, password, email, phone_number } = this.state
        try {
            // here place your signup logic
            console.log('User successfully signed up!: ', success)
        } catch (err) {
            console.log('Error signing up: ', err)
        }
    }
    render() {
        return (

            <View style={styles.container}>
               
                    <Text style={styles.title}>SIGN UP</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                   <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('phone_number', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('confirm_password', val)}
                />
               
                <TouchableOpacity style={styles.registerButtonContainter}
                    Onpress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.registerButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.2)',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 10,
        fontSize: 15,
        fontWeight: '400',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db'
    },

    registerButtonContainter : {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 10,
        width: 350,
        height: 45,
        marginTop: 20
    },

    registerButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
        fontSize: 16
    },

    titleContainer: {
        backgroundColor: '#00BFA5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 100
    },

    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 27,
        paddingBottom: 20
    }
})