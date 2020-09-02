import React from 'react';
import {
    View,
    StyleSheet,
    Button
} from 'react-native';

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesScreen from './CoursesScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <Avatar.Image
                            source={{
                                uri: 'https://cdn4.vectorstock.com/i/1000x1000/98/18/businessman-icon-flat-single-avatarpeaople-icon-vector-14449818.jpg'
                            }}
                            size={70}
                        />
                    </View>
                    <View style={styles.titleContainer}>
                        <Title style={styles.title}>User</Title>
                        <Caption style={styles.caption}>@username</Caption>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="home"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="library-books"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Courses"
                        onPress={() => {props.navigation.navigate('Courses') }}
                        component={CoursesStackScreen}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="trophy"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Rewards"
                        onPress={() => {props.navigation.navigate('Rewards') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="settings"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => {props.navigation.navigate('Settings') }}
                    />

                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => { toggleTheme() }}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    );

}

const CoursesStack = createStackNavigator();

const CoursesStackScreen = ({navigation}) => (
  <CoursesStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <CoursesStack.Screen name="Courses" component={CoursesScreen} options={{
          // title:'Overview',
          headerLeft: () => (
              <Icon.Button name="menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </CoursesStack.Navigator>
  );  

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingTop: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 0,
        padding: 0
    },

    titleContainer: {
        paddingRight: 98,
        paddingTop: 25

    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
        margin: 0,
        padding: 0
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});