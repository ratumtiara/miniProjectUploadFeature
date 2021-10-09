import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, {useState, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Paragraph, RadioButton, TouchableRipple} from 'react-native-paper';

import axios from 'axios';

function InformasiNasabah(props) {
  const [isNasabah, setIsnasabah] = useState('');
  const [nomor_rekening, setNomor_Rekening] = useState('');

  const [checked, setChecked] = useState('');
  const {navigation} = props;

  const handleNext = () => {
    const getIdUser = 11;

    if (isNasabah === '' || nomor_rekening === '') {
      Alert.alert(
        'Silahkan Pilih',
        'My Alert Msg',
        [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
    } else {
      axios({
        url:
          'http://192.168.1.130:4000/api/isNasabah/add_form_informasi_awal/' +
          getIdUser,
        method: 'POST',
        data: {
          isNasabah,
          nomor_rekening,
        },
      })
        .then(response => {
          console.log(response);
          navigation.navigate('DataPengajuan');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <ScrollView style={style.container}>
      <Image
        style={style.lpIklan}
        source={require('../../Image/lp3.png')}
        resizeMode="contain"></Image>

      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Apakah Anda nasabah Bank Muamalat?</Text>
      </View>

      <TouchableRipple
        rippleColor="#EDD5FB"
        onPress={() => setIsnasabah('True')}>
        <View style={style.container2}>
          <View pointerEvents="none">
            <RadioButton.Android
              value="True"
              status={isNasabah === 'True' ? 'checked' : 'unchecked'}
            />
          </View>
          <Paragraph style={style.RadioButton}>Ya</Paragraph>
        </View>
      </TouchableRipple>

      <TouchableRipple
        rippleColor="#EDD5FB"
        onPress={() => setIsnasabah('False')}>
        <View style={style.container2}>
          <View pointerEvents="none">
            <RadioButton.Android
              value="False"
              status={isNasabah === 'False' ? 'checked' : 'unchecked'}
            />
          </View>
          <Paragraph style={style.RadioButton}>Tidak</Paragraph>
        </View>
      </TouchableRipple>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor Rekening Bank Muamalat</Text>
        <View style={style.border}>
          <TextInput
            keyboardType="numeric"
            style={style.input}
            selectedValue={nomor_rekening}
            onChangeText={itemvalue2 => setNomor_Rekening(itemvalue2)}
            placeholder="Masukkan Nomor Rekening Bank Muamalat"
          />
        </View>
      </View>

      {isNasabah === 'lainnya' ? (
        <View>
          <TextInput
            keyboardType="numeric"
            placeholder="input data"
            style={{borderWidth: 1, borderColor: '#E5E5E5'}}
          />
        </View>
      ) : null}

      <View style={style.container}>
        <View style={style.simpanLanjut}>
          <TouchableOpacity
            style={style.btnLanjut}
            onPress={() => handleNext()}>
            <Text style={style.btn}>Lanjut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'column',
  },
  kolompertanyaan: {
    marginBottom: 40,
  },
  judul: {
    fontSize: 30,
    marginBottom: 20,
    color: '#500878',
    fontWeight: 'bold',
  },
  pertanyaan: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 20,
  },
  pertanyaanbagi2: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
  },
  dropdown: {},
  placeholder: {
    color: 'grey',
  },
  opsi: {
    color: 'black',
  },
  border: {
    borderWidth: 0.1,
    borderColor: 'black',
    borderRadius: 8,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
  },
  inputbagi2: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 150,
    marginRight: 50,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
  },
  container2: {
    flexDirection: 'row',
    marginBottom: 30,

    // backgroundColor: '#E5E5E5'
  },
  simpanLanjut: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  simpanForm: {
    // alignItems: "flex-end",
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    flex: 0.5,
    // marginRight: 0,
    color: '#500878',
  },
  RadioButton: {
    // alignItems: "flex-end",
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    flex: 0.5,
    marginLeft: 20,
    marginTop: 10,
    // color: '#500878',
  },
  btnLanjut: {
    // padding: 50,
    borderRadius: 9,
    padding: 10,
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: '#500878',
    justifyContent: 'center',
    marginLeft: 300,
  },
  btn: {
    fontSize: 25,
    // flexDirection: 'row-reverse',
    // alignItems: 'flex-end',
    color: 'white',
  },
  lpIklan: {
    // position: 'absolute',
    // flex: 1,
    height: 400,
    width: null,
    // top: 91,
  },
});

export default InformasiNasabah;
