import { DefaultTransition } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DataPembiayaanUtama(props) {
  const [pembiayaan_bank_lain, setPembiayaan_Bank_Lain] = useState('');

  const { navigation } = props;

  const [UserId, setUserId] = useState('');
  const getUserId = () => {
    AsyncStorage.getItem('UserId')
      .then((value) => {
        setUserId(value)
      })
  }

  getUserId()

  const handleNext = () => {
    const getIdUser = UserId;

    if (pembiayaan_bank_lain === '') {
      Alert.alert('Proses Gagal', 'Data anda belum memilih', [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      axios({
        url:
          'http://192.168.1.130:4000/api/data_pembiayaan/add_form_data_pembiayaan/' +
          getIdUser,
        method: 'POST',
        data: {
          pembiayaan_bank_lain,
        },
      })
        .then(response => {
          console.log(response);

          if (pembiayaan_bank_lain === 'Ya') {
            navigation.navigate('DataPembiayaanForm');
          } else {
            navigation.navigate('UploadDocument');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>
          Memiliki Pembiayaan di Bank/Lembaga keuangan lain
        </Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={pembiayaan_bank_lain}
            onValueChange={itemValue1 => setPembiayaan_Bank_Lain(itemValue1)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item style={style.opsi} label="Ya" value="Ya" />
            <Picker.Item style={style.opsi} label="Tidak" value="Tidak" />
          </Picker>
        </View>
      </View>

      <View style={style.simpanLanjut}>
        <TouchableOpacity style={style.simpanForm}>
          <Text style={style.simpanForm}>Simpan Formulir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnLanjut} onPress={() => handleNext()}>
          <Text style={style.btn}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    // paddingLeft: 30,
    // paddingRight: 30,
    // marginTop: 50,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    // fontSize: 80,
    flexDirection: 'column',
    // alignItems: 'center'
  },
  kolompertanyaan: {
    marginBottom: 40,
  },
  judul: {
    fontSize: 30,
    marginBottom: 20,
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
  dropdown: {
    borderRadius: 9,
    backgroundColor: '#e5e5e5',
  },
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
  container2: {
    flexDirection: 'row',
    marginBottom: 30,

    // backgroundColor: '#E5E5E5'
  },
  simpanLanjut: {
    flexDirection: 'row',
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
  btnLanjut: {
    // paddingLeft: 50
    borderRadius: 9,
    padding: 10,
    flex: 0.2,
    alignItems: 'center',
    backgroundColor: '#500878',
    justifyContent: 'center',
    marginRight: -200,
  },
  btn: {
    fontSize: 25,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    color: 'white',
  },
});

export default DataPembiayaanUtama;
