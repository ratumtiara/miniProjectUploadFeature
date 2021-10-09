import React from 'react';
import {
  Linking,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableHighlight,
  TouchableOpacityBase,
  TouchableOpacity,
  Image,
  borderWidth,
} from 'react-native';

const LandingPage = () => {
  return (
    <View style={lpstyles.container}>
      <ScrollView>
        {/* <Image
          style={lpstyles.lpIklan}
          source={require('../Image/lp3.png')}
          resizeMode="contain"></Image> */}
        <View style={lpstyles.cardCont}>
          <View>
            <Text>tes</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const lpstyles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  lpIklan: {
    // position: 'absolute',
    // flex: 1,
    height: 400,
    width: null,
    // top: 91,
  },
  cardCont: {
    borderRadius: 5,
    height: 328,
    flex: 1,
    borderWidth: 1,
  },
  cartHeaderCont: {
    height: 328,
    borderWidth: 1,
  },
});

export default LandingPage;