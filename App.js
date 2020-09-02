/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './app/components/Login';
import Signup from './app/components/Signup';
import MainTabScreen from './app/components/MainTabScreen';
import { DrawerContent } from './app/components/DrawerContent';
import Courses from './app/components/CoursesScreen';
import DetailsScreen from './app/components/DetailsScreen';
import CoursesScreen from './app/components/CoursesScreen';
import SettingsScreen from './app/components/SettingsScreen';
import RewardsScreen from './app/components/RewardsScreen';
import SignUp from './app/components/Signup';
import RootStackScreen from './app/components/RootStackScreen';

const Drawer = createDrawerNavigator();
let screen = "dashboard"

export default class ReactCourse extends React.Component {
  render() {
    if(screen == "dashboard"){
      return (
        <NavigationContainer>
           <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
           <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
           <Drawer.Screen name="Courses" component={CoursesScreen} />
           <Drawer.Screen name="Settings" component={SettingsScreen} />
           <Drawer.Screen name="Rewards" component={RewardsScreen} />
        </Drawer.Navigator>
        </NavigationContainer>
      
      );

    }else if(screen == "login"){
      return (
        <Login/>
      )

    }else{
      return (
        <SignUp/>
      )
    }
    
  }
}



// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//         <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
//         <Drawer.Screen name="Courses" component={CoursesScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//         <Drawer.Screen name="Rewards" component={RewardsScreen} />
//       </Drawer.Navigator>
//       <RootStackScreen/>
//     </NavigationContainer>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#3498db'

//   }
// });

