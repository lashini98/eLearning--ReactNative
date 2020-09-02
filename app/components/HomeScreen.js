import React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';
import Dashboard from 'react-native-dashboard'

const items = [
  { name: 'Me', background: '#3498db', icon: 'user' },
  { name: 'Groups', background: '#3498db', icon: 'users' },
  { name: 'Courses', background: '#3498db', icon: 'book' },
  { name: 'Rewards', background: '#3498db', icon: 'bookmark' },
  { name: 'Games', background: '#3498db', icon: 'gamepad' },
  { name: 'Events', background: '#3498db', icon: 'calendar' },
];

const _card = el =>{
  console.log('Card: ' + el.name)
};

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Dashboard items={items} background={true} card={_card} column={2} />
      </View>
  
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Homee Screen</Text>
  
      //   <Button
      //     title="Go to details screen"
      //     onPress={() => navigation.navigate("Details")}
      //   />
      // </View>
  
    );
  }


  export default HomeScreen;
  

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });