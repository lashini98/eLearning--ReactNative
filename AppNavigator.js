import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/components/Login';
import SignUp from './app/components/Signup';

const AppNavigator = createStackNavigator({
    Login: { screen: Login },

    SignUp: { screen: SignUp }
});