import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
// import Loginform from './Loginform';
import SignUp from './Signup';


const RootStack= createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode= 'none'>
        <RootStack.screen name="Signup" component={SignUp}/>
        <RootStack.screen name="Login" component={Login}/>
        {/* <RootStack.screen name="LoginForm" component={Loginform}/> */}
    </RootStack.Navigator>
);

export default RootStackScreen;