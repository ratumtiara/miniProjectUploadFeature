import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

function DataPekerjaanPasangan(props) {
  const [jenis_pekerjaan_pasangan, setJenis_Pekerjaan_Pasangan] = useState('');
  const [nama_perusahaan_pasangan, setNama_Perusahaan_Pasangan] = useState('');
  const [jabatan_pasangan, setJabatan_Pasangan] = useState('');
  const [kategori_instansi_pasangan, setKategori_Instansi_Pasangan] =
    useState('');
  const [lama_bekerja_pasangan_tahun, setLama_Bekerja_Pasangan_Tahun] =
    useState('');
  const [lama_bekerja_pasangan_bulan, setLama_Bekerja_Pasangan_Bulan] =
    useState('');
  const [jumlah_karyawan_pasangan, setJumlah_Karyawan_Pasangan] = useState('');
  const [pendapatan_pasangan, setPendapatan_Pasangan] = useState('');
  const [status_pasangan, setStatus_Pasangan] = useState('');
  const [pembayaran_gaji_pasangan, setPembayaran_Gaji_Pasangan] = useState('');
  const [alamat_perusahaan_pasangan, setAlamat_Perusahaan_Pasangan] =
    useState('');
  const [bidang_usaha_pasangan, setBidang_Usaha_Pasangan] = useState('');
  const [nomor_kantor_pasangan, setNomor_Kantor_Pasangan] = useState('');
  const [nomor_hrd_pasangan, setNomor_Hrd_Pasangan] = useState('');
  const [email_hrd_pasangan, setEmail_Hrd_Pasangan] = useState('');
  const [nomor_atasan_pasangan, setNomor_Atasan_Pasangan] = useState('');
  const [email_atasan_pasangan, setEmail_Atasan_Pasangan] = useState('');

  const {navigation} = props;

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
      jenis_pekerjaan_pasangan === '' ||
      nama_perusahaan_pasangan === '' ||
      jabatan_pasangan === '' ||
      kategori_instansi_pasangan === '' ||
      lama_bekerja_pasangan_bulan === '' ||
      lama_bekerja_pasangan_tahun === '' ||
      jumlah_karyawan_pasangan === '' ||
      pendapatan_pasangan === '' ||
      status_pasangan === '' ||
      pembayaran_gaji_pasangan === '' ||
      alamat_perusahaan_pasangan === '' ||
      bidang_usaha_pasangan === '' ||
      nomor_kantor_pasangan === '' ||
      nomor_hrd_pasangan === '' ||
      email_hrd_pasangan === '' ||
      nomor_atasan_pasangan === '' ||
      email_atasan_pasangan === ''
    ) {
      Alert.alert('Proses Gagal', 'Data anda belum lengkap', [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      axios({
        url:
          'http://192.168.1.130:4000/api/data_pekerjaan/add_form_pekerjaan_pasangan/' +
          getIdUser,
        method: 'POST',
        data: {
          jenis_pekerjaan_pasangan,
          nama_perusahaan_pasangan,
          jabatan_pasangan,
          kategori_instansi_pasangan,
          lama_bekerja_pasangan_tahun,
          lama_bekerja_pasangan_bulan,
          jumlah_karyawan_pasangan,
          pendapatan_pasangan,
          status_pasangan,
          pembayaran_gaji_pasangan,
          alamat_perusahaan_pasangan,
          bidang_usaha_pasangan,
          nomor_kantor_pasangan,
          nomor_hrd_pasangan,
          email_hrd_pasangan,
          nomor_atasan_pasangan,
          email_atasan_pasangan,
        },
      })
        .then(response => {
          console.log(response);
          console.log('test');
          navigation.navigate('DataPembiayaanUtama');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Data Pekerjaan Pasangan</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Pekerjaan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_pekerjaan_pasangan}
            onValueChange={itemValue1 =>
              setJenis_Pekerjaan_Pasangan(itemValue1)
            }>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item style={style.opsi} label="Karyawan" value="Karyawan" />
            <Picker.Item
              style={style.opsi}
              label="Profesional"
              value="Profesional"
            />
            <Picker.Item
              style={style.opsi}
              label="Wiraswasta"
              value="Wiraswasta"
            />
            <Picker.Item style={style.opsi} label="Lainnya" value="Lainnya" />
          </Picker>
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nama Perusahaan</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={nama_perusahaan_pasangan}
            onChangeText={itemValue2 => setNama_Perusahaan_Pasangan(itemValue2)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Jabatan</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={jabatan_pasangan}
            onChangeText={itemValue3 => setJabatan_Pasangan(itemValue3)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Status Pekerjaan</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={status_pasangan}
              onValueChange={itemValue4 => setStatus_Pasangan(itemValue4)}>
              <Picker.Item
                style={style.placeholder}
                label="Pilih Opsi"
                value="" /*enabled={false}*/
              />
              <Picker.Item
                style={style.opsi}
                label="Karyawan Tetap"
                value="Karyawan Tetap"
              />
              <Picker.Item
                style={style.opsi}
                label="Karyawan Kontrak"
                value="Karyawan Kontrak"
              />
            </Picker>
          </View>
        </View>
        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Kategori Instansi</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={kategori_instansi_pasangan}
              onValueChange={itemValue5 =>
                setKategori_Instansi_Pasangan(itemValue5)
              }>
              <Picker.Item
                style={style.placeholder}
                label="Pilih Opsi"
                value="" /*enabled={false}*/
              />
              <Picker.Item
                style={style.opsi}
                label="Pemerintahan"
                value="Pemerintahan"
              />
              <Picker.Item style={style.opsi} label="BUMN" value="BUMN" />
              <Picker.Item
                style={style.opsi}
                label="TNI/POLRI"
                value="TNI/POLRI"
              />
              <Picker.Item
                style={style.opsi}
                label="Swasta Asing"
                value="Swasta Asing"
              />
              <Picker.Item
                style={style.opsi}
                label="Swasta Nasional"
                value="Swasta Nasional"
              />
              <Picker.Item style={style.opsi} label="Lainnya" value="Lainnya" />
            </Picker>
          </View>
        </View>

        <View style={style.container2}>
          <View style={style.container}>
            <Text style={style.pertanyaan}>Lama Bekerja</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={style.inputLama}
                placeholder="input"
                selectedValue={lama_bekerja_pasangan_tahun}
                onChangeText={itemValue6 =>
                  setLama_Bekerja_Pasangan_Tahun(itemValue6)
                }
              />
              <Text style={style.textLama}>Tahun</Text>
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.pertanyaan}></Text>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={style.inputLama}
                placeholder="input"
                selectedValue={lama_bekerja_pasangan_bulan}
                onChangeText={itemValue7 =>
                  setLama_Bekerja_Pasangan_Bulan(itemValue7)
                }
              />
              <Text style={style.textLama}>Bulan</Text>
            </View>
          </View>
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Jumlah Karyawan Pasangan</Text>
          <TextInput
            placeholder="Input Jumlah Karyawan"
            style={style.input}
            selectedValue={jumlah_karyawan_pasangan}
            onChangeText={itemValue8 => setJumlah_Karyawan_Pasangan(itemValue8)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Pendapatan Perbulan Pasangan</Text>
          <TextInput
            placeholder="Input Rp"
            style={style.input}
            selectedValue={pendapatan_pasangan}
            onChangeText={itemValue9 => setPendapatan_Pasangan(itemValue9)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Pembayaran Gaji Pasangan</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={pembayaran_gaji_pasangan}
              onValueChange={itemValue10 =>
                setPembayaran_Gaji_Pasangan(itemValue10)
              }>
              <Picker.Item
                style={style.placeholder}
                label="Pilih Opsi"
                value="" /*enabled={false}*/
              />
              <Picker.Item
                style={style.opsi}
                label="Transfer Bank Muamalat"
                value="Transfer Bank Muamalat"
              />
              <Picker.Item
                style={style.opsi}
                label="Transfer Bank Lain"
                value="Transfer Bank Lain"
              />
            </Picker>
          </View>
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Alamat Kantor atau Tempat Usaha</Text>
          <TextInput
            placeholder="Input Alamat Kantor atau Tempat Usaha"
            style={style.input}
            selectedValue={alamat_perusahaan_pasangan}
            onChangeText={itemValue11 =>
              setAlamat_Perusahaan_Pasangan(itemValue11)
            }
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Bidang Usaha</Text>
          <TextInput
            placeholder="Input Bidang Usaha"
            style={style.input}
            selectedValue={bidang_usaha_pasangan}
            onChangeText={itemValue12 => setBidang_Usaha_Pasangan(itemValue12)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon Kantor</Text>
          <TextInput
            placeholder="Input Nomor Telepon Kantor"
            style={style.input}
            selectedValue={nomor_kantor_pasangan}
            onChangeText={itemValue13 => setNomor_Kantor_Pasangan(itemValue13)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon HRD</Text>
          <TextInput
            placeholder="Input Nomor Telepon HRD"
            style={style.input}
            selectedValue={nomor_hrd_pasangan}
            onChangeText={itemValue14 => setNomor_Hrd_Pasangan(itemValue14)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Alamat Email HRD</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={email_hrd_pasangan}
            onChangeText={itemValue15 => setEmail_Hrd_Pasangan(itemValue15)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon Atasan Langsung</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={nomor_atasan_pasangan}
            onChangeText={itemValue17 => setNomor_Atasan_Pasangan(itemValue17)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Alamat Email Atasan Langsung</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={email_atasan_pasangan}
            onChangeText={itemValue16 => setEmail_Atasan_Pasangan(itemValue16)}
          />
        </View>

        <View style={style.simpanLanjut}>
          <TouchableOpacity style={style.simpanForm}>
            <Text style={style.simpanForm}>Simpan Formulir</Text>
          </TouchableOpacity>
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
    marginBottom: 15,
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
  inputbagi2: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 220,
    marginRight: 50,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
  },
  container2: {
    flexDirection: 'row',
    marginBottom: 30,
    alignContent: 'space-between',
  },
  simpanLanjut: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  simpanForm: {
    justifyContent: 'center',
    fontSize: 25,
    flex: 0.5,
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
  textLama: {
    padding: 14,
    color: 'grey',
    backgroundColor: '#cccccc',

    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  inputLama: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 130,
    // marginRight: 50,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#e5e5e5',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  inputRp: {
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
});

export default DataPekerjaanPasangan;
