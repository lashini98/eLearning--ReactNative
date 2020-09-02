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

const DetailsScreen = ({ navigation }) => {
  return (
    <ScrollView style={{flex: 1, flexDirection:'column'}}>
       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <View style={{width: 190}}>
      <View style={styles.cardStyle}>
        <View style={styles.cardSectionStyles}>
          <Image style={styles.imageStyle} source={{ uri: 'https://icdn2.digitaltrends.com/image/digitaltrends/tumblr-safe-mode-header.jpg' }} />
        </View>  
        <View style={styles.cardSectionStyles}>
        <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle} numberOfLines={1} ellipsizeMode="tail">
                  Computer Science
                </Text>
        </View>
        </View>
        <View style={styles.cardSectionStyles}>
                <Text>
                  Price: $28.99
                 
                </Text>
          
        </View>
      </View>
      </View>
       <View style={{width: 190}}>
       <View style={styles.cardStyle}>
        <View style={styles.cardSectionStyles}>
          <Image style={styles.imageStyle} source={{ uri: 'https://i.pinimg.com/originals/7c/ab/8d/7cab8d5afdd165ab0a118ab305c3e5be.jpg' }} />
        </View>  
        <View style={styles.cardSectionStyles}>
        <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle} numberOfLines={1} ellipsizeMode="tail">
                  Travel and Tourism
                </Text>
        </View>
        </View>
        <View style={styles.cardSectionStyles}>
                <Text>
                  Price: $17.99
                 
                </Text>
          
        </View>
     </View>
    </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <View style={{width: 190}}>
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
      </View>
      </View>
       <View style={{width: 190}}>
       <View style={styles.cardStyle}>
        <View style={styles.cardSectionStyles}>
          <Image style={styles.imageStyle} source={{ uri: 'https://assets.weforum.org/article/image/large_j6YsFWwMH3KFVoC_n2yZOBCFf_icjsjdQBemAdUgjnM.jpg' }} />
        </View>  
        <View style={styles.cardSectionStyles}>
        <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle} numberOfLines={1} ellipsizeMode="tail">
                  Psychology 
                </Text>
        </View>
        </View>
        <View style={styles.cardSectionStyles}>
                <Text>
                  Price: $23.99
                 
                </Text>
          
        </View>
     </View>
    </View>
    </View>

    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <View style={{width: 190}}>
      <View style={styles.cardStyle}>
        <View style={styles.cardSectionStyles}>
          <Image style={styles.imageStyle} source={{ uri: 'https://66.media.tumblr.com/c7a95bcc7c1dbe14510da29bd6d62abb/tumblr_pah2lqwL5s1x8dt8no2_250.jpg' }} />
        </View>  
        <View style={styles.cardSectionStyles}>
        <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle} numberOfLines={1} ellipsizeMode="tail">
                  Quantum Physics
                </Text>
        </View>
        </View>
        <View style={styles.cardSectionStyles}>
                <Text>
                  Price: $30.99
                 
                </Text>
          
        </View>
      </View>
      </View>
       <View style={{width: 190}}>
       <View style={styles.cardStyle}>
        <View style={styles.cardSectionStyles}>
          <Image style={styles.imageStyle} source={{ uri: 'https://sia.az/storage/2019/10/16/19ccvqtxzvzd.jpg' }} />
        </View>  
        <View style={styles.cardSectionStyles}>
        <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle} numberOfLines={1} ellipsizeMode="tail">
                  Biology
                </Text>
        </View>
        </View>
        <View style={styles.cardSectionStyles}>
                <Text>
                  Price: $31.99
                 
                </Text>
          
        </View>
     </View>
    </View>
    </View>
    </ScrollView>
   

  );
};

export default DetailsScreen;

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
    fontSize: 14,
    fontFamily: 'open-sans-regular',
  },
  imageStyle: {
    height: 140,
    flex: 1,
    width: null
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
    marginBottom: 10
  },
  cardSectionStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});


