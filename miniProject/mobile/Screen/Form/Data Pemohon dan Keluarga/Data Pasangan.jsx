import DatePicker from 'react-native-date-picker';
import React, { useState, Component } from 'react';
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

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DataPasangan(props) {
  const [nama_pasangan, setNama_Pasangan] = useState('');
  const [tempat_lahir_pasangan, setTempat_Lahir_Pasangan] = useState('');
  const [tanggal_lahir_pasangan, setDate] = React.useState(new Date());
  const [nik_pasangan, setNik_Pasangan] = useState('');
  const [npwp_pasangan, setNpwp_Pasangan] = useState('');
  const [pekerjaan_pasangan, setPekerjaan_Pasangan] = useState('');
  const [no_telepon_pasangan, setNo_Telepon_Pasangan] = useState('');

  const [open, setOpen] = useState(false);

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
      nama_pasangan === '' ||
      tempat_lahir_pasangan === '' ||
      tanggal_lahir_pasangan === '' ||
      nik_pasangan === '' ||
      npwp_pasangan === '' ||
      pekerjaan_pasangan === '' ||
      no_telepon_pasangan === ''
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
          'http://192.168.1.130:4000/api/data_diri_keluarga/add_data_diri_pasangan/' +
          getIdUser,
        method: 'POST',
        data: {
          nama_pasangan,
          tempat_lahir_pasangan,
          tanggal_lahir_pasangan,
          nik_pasangan,
          npwp_pasangan,
          pekerjaan_pasangan,
          no_telepon_pasangan,
        },
      })
        .then(response => {
          navigation.navigate('DataKerabat');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Data Pasangan</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Lengkap Sesuai KTP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_pasangan}
            onChangeText={itemValue1 => setNama_Pasangan(itemValue1)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor KTP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nik_pasangan}
            onChangeText={itemValue2 => setNik_Pasangan(itemValue2)}
            placeholder="Input Nomor KTP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Tempat Lahir</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={tempat_lahir_pasangan}
            onChangeText={itemValue3 => setTempat_Lahir_Pasangan(itemValue3)}
            placeholder="Input Tempat Lahir"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Tanggal Lahir</Text>
        <View style={style.border}>
          <Button title="Pilih Tanggal" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={tanggal_lahir_pasangan}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor NPWP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={npwp_pasangan}
            onChangeText={itemValue6 => setNpwp_Pasangan(itemValue6)}
            placeholder="Input NPWP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Pekerjaan Pasangan</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={pekerjaan_pasangan}
            onChangeText={itemValue7 => setPekerjaan_Pasangan(itemValue7)}
            placeholder="Input Pekerjaan Pasangan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor Handphone</Text>
        <View>
          {/* style={style.border}> */}
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.3, borderRadius: 8 }}>
              <Text
                style={{
                  // alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  paddingTop: 13,
                  paddingBottom: 12,
                  // paddingRight: 16,
                  // paddingLeft: 16,
                  flex: 1,
                  fontSize: 15,
                  color: 'grey',

                  backgroundColor: '#cccccc',
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}>
                +62
              </Text>
            </View>

            <TextInput
              style={style.inputNoHp}
              selectedValue={no_telepon_pasangan}
              onChangeText={itemValue5 => setNo_Telepon_Pasangan(itemValue5)}
              placeholder="Input No.HP"
            />
          </View>
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
  dropdown: {},
  placeholder: {
    color: 'grey',
  },
  opsi: {
    color: 'black',
  },
  border: {
    // borderWidth: 0.1,
    // borderColor: 'black',
    backgroundColor: '#e5e5e5',
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
  inputNoHp: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    flex: 3,
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
});

export default DataPasangan;
