import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text style={loginstyles.text}> Arif banget deh sumpah </Text>
      <Wicak />
    </View>
  );
};

const Wicak = () => {
  return <Text> 100% </Text>;
};

const loginstyles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: '#10ac84',
  },
});

export default Login;
