import { DefaultTransition } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

const PembiayaanKonsumsi = () => {
  const [jenis_penjual, setJenis_Penjual] = useState('');
  const [nama_penjual, setNama_Penjual] = useState('');
  const [harga_penawaran, setHarga_Penawaran] = useState('');
  const [no_telepon_penjual, setNo_Telepon_Penjual] = useState('');
  const [uang_muka, setUang_Muka] = useState('');

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

    if (
      jenis_penjual === '' ||
      nama_penjual === '' ||
      harga_penawaran === '' ||
      no_telepon_penjual === '' ||
      uang_muka === ''
    ) {
      Alert.alert('Proses Gagal', 'Data anda belum lengkap', [
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
          'http://localhost:4000/api/data_pengajuan/add_form_data_pengajuan_kendaraan/' +
          getIdUser,
        method: 'POST',
        data: {
          jenis_penjual,
          nama_penjual,
          harga_penawaran,
          no_telepon_penjual,
          uang_muka,
        },
      })
        .then(response => {
          console.log(response);
          navigation.navigate('DataAngunan');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Pembiayaan Konsumsi Beragun Properti</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Penjual</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_penjual}
            onValueChange={itemValue1 => setJenis_Penjual(itemValue1)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Jenis Penjual"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Developer Rekanan"
              value="Developer Rekanan"
            />
            <Picker.Item
              style={style.opsi}
              label="Developer Non Rekanan"
              value="Developer Non Rekanan"
            />
            <Picker.Item
              style={style.opsi}
              label="Non Developer"
              value="Non Developer"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Penjual</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_penjual}
            onChangeText={itemValue2 => setNama_Penjual(itemValue2)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>
          Harga Penawaran Penjual atau Nilai SPR
        </Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={harga_penawaran}
            onChangeText={itemValue3 => setHarga_Penawaran(itemValue3)}
            placeholder="dalam satuan RP. ex: 500000000"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Uang Muka</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={uang_muka}
            onChangeText={itemValue4 => setUang_Muka(itemValue4)}
            placeholder="dalam satuan RP. ex: 500000000"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor telepon Penjual</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={no_telepon_penjual}
            onChangeText={itemValue5 => setNo_Telepon_Penjual(itemValue5)}
            placeholder="Input No.Telepon (ex: 08xxxxxxxxx)"
          />
        </View>
      </View>

      <View style={style.simpanLanjut}>
        <TouchableOpacity style={style.simpanForm}>
          <Text style={style.simpanForm}>Simpan Formulir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnLanjut}
          onPress={() => navigation.navigate('DataAngunan')}>
          <Text style={style.btn}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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
    // borderWidth: 1,
    borderRadius: 9,
    backgroundColor: '#E5E5E5',
  },
  placeholder: {
    color: 'grey',
  },
  opsi: {
    color: 'black',
  },
  border: {
    // borderWidth: 0.1,
    backgroundColor: '#e5e5e5',
    flex: 1,
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
  textNom: {
    // borderWidth: 1,
    // borderColor: '#E5E5E5',
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    paddingTop: 15,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#cccccc',
  },
  inputNom: {
    borderWidth: 1,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
    borderColor: '#E5E5E5',
  },
});

export default PembiayaanKonsumsi;
