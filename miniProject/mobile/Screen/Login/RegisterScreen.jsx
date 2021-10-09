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
  TouchableOpacity,
  Image,
} from 'react-native';

import axios from 'axios';

function Register(props) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleNext = () => {

    console.log(nama, email, password);

    const getIdUser = 11;

    axios({
      url: 'http://192.168.1.130:4000/api/user/daftar',
      method: 'POST',
      data: {
        nama,
        email,
        password,
      }
    })
      .then((response) => {
        console.log(response);
        navigation.navigate('PendaftaranBerhasil')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Daftar</Text>
      <Text style={styles.teksInput}>Nama Lengkap</Text>
      <TextInput
        placeholder="Masukkan Nama Lengkap"
        style={styles.input}
        onChangeText={setNama}
      />

      <Text style={styles.teksInput}>Email</Text>
      <TextInput
        placeholder="Masukkan Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <Text style={styles.teksInput}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Masukan Password"
          style={styles.inputPass}
          secureTextEntry={hidePass ? true : false}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#e5e5e5',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
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

      <Text style={styles.teksInput}>Ulangi Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Masukan Password"
          style={styles.inputPass}
          secureTextEntry={hidePass2 ? true : false}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#e5e5e5',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={() => {
            setHidePass2(!hidePass2);
          }}>
          {hidePass2 ? (
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

      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity
          style={styles.btnMasuk}
          onPress={() => handleNext()}
        >
          <Text style={styles.btnTeks}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ alignItems: 'center', paddingTop: 20 }}
      // onPress={() => handleNext()}
      >
        <Text
          style={styles.linkingTeks}
        // onPress={() => navigation.navigate('Login')}>
        >
          Sudah Punya Akun? Masuk
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  teksInput: {
    fontSize: 18,
    color: '#888888',
    paddingBottom: 12,
    paddingTop: 16,
  },
  btnDaftar: {
    color: '#500878',
    borderRadius: 10,
    flex: 1,
    height: 48,
  },
  linkingTeks: {
    paddingTop: 11,
    color: '#500878',
    textDecorationLine: 'underline',
    paddingBottom: 36,
    fontSize: 18,
  },
  text: {
    fontSize: 24,
    color: '#500878',
    height: 54,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    color: 'black',
    fontSize: 15,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 16,
    paddingLeft: 16,
  },
  btnTeks: {
    padding: 10,
    color: '#f4f4f4',
    fontSize: 20,
  },
  btnMasuk: {
    borderRadius: 9,
    height: 48,
    backgroundColor: '#500878',
    alignItems: 'center',
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
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    borderColor: '#000',
    paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
});
export default Register;
