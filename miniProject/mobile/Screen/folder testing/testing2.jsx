import React, { useState } from 'react';
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
} from 'react-native';
// import { useNavigation } from '@react-navigation/core';
function Login(props) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);
  const [toggleCheck, setToggleCheck] = useState(false);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Masuk</Text>
        <Text style={styles.teksInput}>Email</Text>
        <TextInput
          placeholder="Masukan Email"
          style={[styles.input, username && styles.username]}
          onFocus={() => setUsername(true)}
          onBlur={() => setUsername(false)}
        />

        <Text style={styles.teksInput}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Masukan Password"
            style={[styles.inputPass, password && styles.password]}
            onFocus={() => setPassword(true)}
            onBlur={() => setPassword(false)}
            secureTextEntry={hidePass ? true : false}
          />
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#e5e5e5',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              },
              password && styles.password,
            ]}
            onFocus={() => setPassword(true)}
            onBlur={() => setPassword(false)}
            onPress={() => {
              setHidePass(!hidePass);
            }}>
            {hidePass ? (
              <Image
                source={require('../../Image/iconPass.png')}
                style={{
                  width: 25,
                  right: 10,
                }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../../Image/iconPassP.png')}
                style={{
                  width: 25,
                  right: 10,
                }}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row-reverse' }}>
          <Text
            style={styles.linkingTeks}
            onPress={() => Linking.openURL('http://google.com')}>
            Forget Password?
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.btnMasuk}
            onPress={() => navigation.navigate('InformasiNasabah')}>
            <Text style={styles.btnTeks}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ alignItems: 'center', paddingTop: 20 }}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkingTeks}>Daftar Sekarang</Text>
        </TouchableOpacity>
        <Text></Text>
        {/* <Button title="Daftar Sekarang" /> */}
      </View>
      {/* <Text style={styles.text}> Bohir nak front end</Text>
      <Wicak /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  headertext: {
    fontSize: 24,
    color: '#494949',
    flexDirection: 'column',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    color: '#500878',
    height: 54,
    fontWeight: 'bold',
  },
  input: {
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
  },
  inputPass: {
    fontSize: 15,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    flex: 1,
    backgroundColor: '#e5e5e5',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: '#888888',
  },
  teksInput: {
    fontSize: 18,
    color: '#888888',
    paddingBottom: 12,
    paddingTop: 16,
  },
  btnMasuk: {
    borderRadius: 9,
    height: 48,
    backgroundColor: '#500878',
    alignItems: 'center',
  },
  linkingTeks: {
    paddingTop: 11,
    color: '#500878',
    textDecorationLine: 'underline',
    paddingBottom: 36,
    fontSize: 18,
  },
  btnTeks: {
    padding: 10,
    color: '#f4f4f4',
    fontSize: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderColor: '#000',
    paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
  username: {
    backgroundColor: '#EDD5FB',
  },
  password: {
    backgroundColor: '#EDD5FB',
  },
});

export default Login;
