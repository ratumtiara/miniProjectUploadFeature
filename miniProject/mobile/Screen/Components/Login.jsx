import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const Login = () => {
  return (
    <ScrollView>
      <View>
        <Text>Masuk</Text>
        <TextInput />
        <Text>Password</Text>
        <TextInput type="password" />
        <Text>Forget Password?</Text>
        <Button title="Masuk" />
        <Text></Text>
        <Button title="Daftar Sekarang" />
      </View>
      {/* <Text style={loginstyles.text}> Bohir nak front end</Text>
      <Wicak /> */}
    </ScrollView>
  );
};

const loginstyles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: '#10ac84',
  },
});

export default Login;
