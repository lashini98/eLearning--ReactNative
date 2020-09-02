// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';


// const CoursesScreen = () => {
//     return (
//       <View style={styles.container}>
//         <Text>Courses Screen</Text>
//         <Button
//           title="Click Here"
//           onPress={() => alert('Button Clicked!')}
//         />
//       </View>
//     );
// };

// export default CoursesScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });

import React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image
} from 'react-native';
// import StarReview from 'react-native-star-review';

const CoursesScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ width: 370 }}>
          <View style={styles.cardStyle}>
            <View style={styles.cardSectionStyles}>
              <Image style={styles.imageStyle} source={{ uri: 'https://icdn2.digitaltrends.com/image/digitaltrends/tumblr-safe-mode-header.jpg' }} />
            </View>
            <View style={styles.cardSectionStyles}>
              <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle} numberOfLines={1} ellipsizeMode="tail">
                  Computer Science
                </Text>
                {/* <StarReview
  ratings={5}
  stars={10}
  starColor="#8409ff"
  reviews={219301495}
  reviewsText="contributions"
/> */}
              </View>
            </View>
            <View style={styles.cardSectionStyles}>
              <Text>
                Price: $28.99
                </Text>
            </View>
            <View style={styles.cardSectionStyles}>
              <Text>
                Course Description:
                </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ width: 370 }}>
          <View style={styles.cardStyle}>
            <View style={styles.cardSectionStyles}>
              <Image style={styles.imageStyle} source={{ uri: 'https://cdn-res.keymedia.com/cms/images/ca/155/0321_637178838803153966.jpg' }} />
            </View>
            <View style={styles.cardSectionStyles}>
              <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle} numberOfLines={1} ellipsizeMode="tail">
                  Business Management
                </Text>
              </View>
            </View>
            <View style={styles.cardSectionStyles}>
              <Text>
                Price: $20.99
              </Text>
            </View>
            <View style={styles.cardSectionStyles}>
              <Text>
              Course Description:
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>


  );
};

export default CoursesScreen;


const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 16,
    fontFamily: 'open-sans-regular',
    fontWeight: "bold"
  },
  imageStyle: {
    height: 140,
    flex: 1,
    width: null,
    height: 370
  },
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,

  },
  cardSectionStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    // height:200
  },
});

