/* eslint-disable prettier/prettier */
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

function takeOver_topUp(props) {
  const [jenis_bank_asal, setJenis_Bank_Asal] = useState('');
  const [nama_bank, setNama_Bank] = useState('');
  const [peruntukan_fasilitas_sebelumnya, setPeruntukan_Fasilitas_Sebelumnya] =
    useState('');
  const [akad_fasilitas_sebelumnya, setAkad_Fasilitas_Sebelumnya] =
    useState('');
  const [nilai_pelunasan_take_over, setNilai_Pelunasan_Take_Over] =
    useState('');
  const [plafond_top_up, setPlafond_Top_Up] = useState('');

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
      jenis_bank_asal === '' ||
      nama_bank === '' ||
      peruntukan_fasilitas_sebelumnya === '' ||
      akad_fasilitas_sebelumnya === '' ||
      nilai_pelunasan_take_over === '' ||
      plafond_top_up === ''
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
          'http://192.168.1.130:4000/api/data_pengajuan/add_form_data_pengajuan_takeover/' +
          getIdUser,
        method: 'POST',
        data: {
          jenis_bank_asal,
          nama_bank,
          peruntukan_fasilitas_sebelumnya,
          akad_fasilitas_sebelumnya,
          nilai_pelunasan_take_over,
          plafond_top_up,
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
        <Text style={style.judul}>
          Pembiayaan Take Over Murni atau Take Over + Top Up
        </Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Bank Asal</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_bank_asal}
            onValueChange={itemValue1 => setJenis_Bank_Asal(itemValue1)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Jenis Bank Asal"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Bank Syariah"
              value="Bank Syariah"
            />
            <Picker.Item
              style={style.opsi}
              label="Bank Konvensional"
              value="Bank Konvensional"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Bank</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_bank}
            onChangeText={itemValue2 => setNama_Bank(itemValue2)}
            placeholder="Input Nama Bank"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>
          Peruntukan Fasilitas di Bank Sebelumnya
        </Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={peruntukan_fasilitas_sebelumnya}
            onValueChange={itemValue3 =>
              setPeruntukan_Fasilitas_Sebelumnya(itemValue3)
            }>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Jenis Penjual"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Pembelian Properti"
              value="Pembelian Properti"
            />
            <Picker.Item
              style={style.opsi}
              label="Renovasi/Pembangunan"
              value="Renovasi/Pembangunan"
            />
            <Picker.Item
              style={style.opsi}
              label="Refinancing. Konsumsi Beragun Properti"
              value="Refinancing. Konsumsi Beragun Properti"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Akad Fasilitas di Bank Sebelumnya</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={akad_fasilitas_sebelumnya}
            onValueChange={itemValue4 =>
              setAkad_Fasilitas_Sebelumnya(itemValue4)
            }>
            <Picker.Item
              style={style.placeholder}
              label="Pilih"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Murabahah"
              value="Murabahah"
            />
            <Picker.Item
              style={style.opsi}
              label="MMQ (Musyarakah Mutanagishah)"
              value="MMQ"
            />
            <Picker.Item style={style.opsi} label="IMBT" value="IMBT" />
            <Picker.Item style={style.opsi} label="lainnya" value="lainnya" />
          </Picker>
        </View>
      </View>
      {/* ini untuk hidden unhidden : ternary operator */}
      {akad_fasilitas_sebelumnya === 'lainnya' ? (
        <View>
          <TextInput
            placeholder="input data"
            style={{ backgroundColor: '#E5E5E5' }}
          />
        </View>
      ) : null}

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>
          Perkiraan Nilai Pelunasan Take Over
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={style.textNom}>
            <Text style={{ fontSize: 15, color: 'grey' }}>Rp</Text>
          </View>
          <View style={style.border}>
            <TextInput
              style={style.inputNom}
              selectedValue={nilai_pelunasan_take_over}
              onChangeText={itemValue5 =>
                setNilai_Pelunasan_Take_Over(itemValue5)
              }
              placeholder="Input Number"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Plafond Top Up</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={style.textNom}>
            <Text style={{ fontSize: 15, color: 'grey' }}>Rp</Text>
          </View>
          <View style={style.border}>
            <TextInput
              style={style.inputNom}
              selectedValue={plafond_top_up}
              onChangeText={itemValue6 => setPlafond_Top_Up(itemValue6)}
              placeholder="Input Number"
            />
          </View>
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
    // borderColor: 'black',
    borderRadius: 8,
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
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
    paddingTop: 12,
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

export default takeOver_topUp;
