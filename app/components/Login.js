import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import LoginForm from './Loginform';


export default class Login extends Component {
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.logoContainer}>
                 <Image 
                 style={styles.logo}
                 source={require('../Images/logo.png')}/>

                 <Text style={styles.title}>An app made for eLearning using React Native</Text> 
               </View>
               <View style={styles.formContainer}>
                <LoginForm/>    
               </View>
             </View>
        );    
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 150,
        height: 150
    },

    title: {
        color: '#FFF',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        opacity: 0.8
    }
});