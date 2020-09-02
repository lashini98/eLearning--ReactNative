import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RewardsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Rewards Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});