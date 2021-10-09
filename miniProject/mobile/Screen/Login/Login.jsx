import React, { useState } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import { useNavigation } from '@react-navigation/core';
function Login(props) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);
  const [toggleCheck, setToggleCheck] = useState(false);

  const [username, setUsername] = useState("")
  const [password2, setpassword2] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const storeData = async (value1, value2) => {
    try {
      await AsyncStorage.setItem('UserId', value1)
      await AsyncStorage.setItem('token', value2)
    } catch (e) {
      // saving error
    }
  }

  const handleNext = () => {
    axios({
      url: 'http://192.168.1.130:4000/api/user/masukMobile',
      method: 'POST',
      data: {
        email,
        password,
      }
    })
      .then((response) => {
        const dataValue1 = response.data.UserId.toString()
        const dataValue2 = response.data.token.toString()

        storeData(dataValue1, dataValue2)
        navigation.navigate('DataPengajuan')
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
          onChangeText={setEmail}
        />

        <Text style={styles.teksInput}>Password</Text>
        <View style={styles.password2Container}>
          <TextInput
            placeholder="Masukan Password"
            style={[styles.inputPass, password2 && styles.password2]}
            onFocus={() => setpassword2(true)}
            onBlur={() => setpassword2(false)}
            secureTextEntry={hidePass ? true : false}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#e5e5e5',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              },
              password2 && styles.password2,
            ]}
            onFocus={() => setpassword2(true)}
            onBlur={() => setpassword2(false)}
            onPress={() => {
              setHidePass(!hidePass);
            }}
          >
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
            Forget password2?
          </Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={styles.btnMasuk}
            onPress={() => handleNext()}>
            <Text style={styles.btnTeks}>Masuk</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ alignItems: 'center', paddingTop: 20 }}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkingTeks}>Daftar Sekarang</Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
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
  password2Container: {
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
  password2: {
    backgroundColor: '#EDD5FB',
  },
});

export default Login;
