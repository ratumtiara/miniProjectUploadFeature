import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, {useState} from 'react';
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
import {Picker} from '@react-native-picker/picker';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

function DataPekerjaanUtama(props) {
  const [jenis_pekerjaan, setJenis_Pekerjaan] = useState('');
  const [nama_perusahaan, setNama_Perusahaan] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [kategori_instansi, setKategori_Instansi] = useState('');
  const [lama_bekerja_tahun, setLama_Bekerja_Tahun] = useState('');
  const [lama_bekerja_bulan, setLama_Bekerja_Bulan] = useState('');
  const [jumlah_karyawan, setJumlah_Karyawan] = useState('');
  const [pendapatan, setPendapatan] = useState('');
  const [status_pekerjaan, setStatus_Pekerjaan] = useState('');
  const [pembayaran_gaji, setPembayaran_Gaji] = useState('');
  const [alamat_kantor, setAlamat_Kantor] = useState('');
  const [bidang_usaha, setBidang_Usaha] = useState('');
  const [nomor_kantor, setNomor_Kantor] = useState('');
  const [nomor_hrd, setNomor_Hrd] = useState('');
  const [email_hrd, setEmail_Hrd] = useState('');
  const [nomor_atasan, setNomor_Atasan] = useState('');
  const [email_atasan, setEmail_Atasan] = useState('');

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
      jenis_pekerjaan === '' ||
      nama_perusahaan === '' ||
      jabatan === '' ||
      kategori_instansi === '' ||
      lama_bekerja_bulan === '' ||
      lama_bekerja_tahun === '' ||
      jumlah_karyawan === '' ||
      pendapatan === '' ||
      status_pekerjaan === '' ||
      pembayaran_gaji === '' ||
      alamat_kantor === '' ||
      bidang_usaha === '' ||
      nomor_kantor === '' ||
      nomor_hrd === '' ||
      email_hrd === '' ||
      nomor_atasan === '' ||
      email_atasan === ''
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
          'http://192.168.1.130:4000/api/data_pekerjaan/add_form_pekerjaan_pemohon/' +
          getIdUser,
        method: 'POST',
        data: {
          jenis_pekerjaan,
          nama_perusahaan,
          jabatan,
          kategori_instansi,
          lama_bekerja_tahun,
          lama_bekerja_bulan,
          jumlah_karyawan,
          pendapatan,
          status_pekerjaan,
          pembayaran_gaji,
          alamat_kantor,
          bidang_usaha,
          nomor_kantor,
          nomor_hrd,
          email_hrd,
          nomor_atasan,
          email_atasan,
        },
      })
        .then(response => {
          axios({
            url:
              'http://192.168.1.130:4000/api/fasilitas_pembiayaan/read_form_fasilitas_pembiayaan/' +
              getIdUser, // Tabel Fasilitas Pembiayaan
            method: 'GET',
          })
            .then(response => {
              const a = response.data.data.skema_pengajuan; // Ekspetasi data ini diambil dari Database

              console.log(a);

              if (a === 'Penghasilan Tunggal') {
                navigation.navigate('DataPembiayaanUtama');
              } else if (a === 'Penghasilan Gabungan') {
                navigation.navigate('DataPekerjaanPasangan');
              }
            })
            .catch(err => {});
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Data Pekerjaan Pemohon</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Pekerjaan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_pekerjaan}
            onValueChange={itemValue1 => setJenis_Pekerjaan(itemValue1)}>
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
            selectedValue={nama_perusahaan}
            onChangeText={itemValue2 => setNama_Perusahaan(itemValue2)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Jabatan</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={jabatan}
            onChangeText={itemValue3 => setJabatan(itemValue3)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Kategori Instansi</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={kategori_instansi}
              onValueChange={itemValue4 => setKategori_Instansi(itemValue4)}>
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
          <View>
            {/* style={style.container}> */}
            <Text style={style.pertanyaan}>Lama Bekerja</Text>
            <View style={{flexDirection: 'row', marginRight: 60}}>
              <TextInput
                style={style.inputLama}
                placeholder="input"
                selectedValue={lama_bekerja_tahun}
                onChangeText={itemValue5 => setLama_Bekerja_Tahun(itemValue5)}
              />
              <Text style={style.textLama}>Tahun</Text>
            </View>
          </View>
          <View>
            {/* style={style.container}> */}
            <Text style={style.pertanyaan}></Text>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={style.inputLama}
                placeholder="input"
                selectedValue={lama_bekerja_bulan}
                onChangeText={itemValue6 => setLama_Bekerja_Bulan(itemValue6)}
              />
              <Text style={style.textLama}>Bulan</Text>
            </View>
          </View>
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Jumlah Karyawan</Text>
          <TextInput
            placeholder="Jumlah Karyawan"
            style={style.input}
            selectedValue={jumlah_karyawan}
            onChangeText={itemValue7 => setJumlah_Karyawan(itemValue7)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Pendapatan Perbulan</Text>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.3, borderRadius: 8}}>
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
                  Rp
                </Text>
              </View>
              <TextInput
                placeholder="Input Rp"
                style={style.inputRp}
                selectedValue={pendapatan}
                onChangeText={itemValue8 => setPendapatan(itemValue8)}
              />
            </View>
          </View>
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Status Pekerjaan</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={status_pekerjaan}
              onValueChange={itemValue9 => setStatus_Pekerjaan(itemValue9)}>
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
          <Text style={style.pertanyaan}>Pembayaran Gaji</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={pembayaran_gaji}
              onValueChange={itemValue10 => setPembayaran_Gaji(itemValue10)}>
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
            placeholder="Input Text"
            style={style.input}
            selectedValue={alamat_kantor}
            onChangeText={itemValue11 => setAlamat_Kantor(itemValue11)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Bidang Usaha</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={bidang_usaha}
            onChangeText={itemValue12 => setBidang_Usaha(itemValue12)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon Kantor</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={nomor_kantor}
            onChangeText={itemValue13 => setNomor_Kantor(itemValue13)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon HRD</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={nomor_hrd}
            onChangeText={itemValue14 => setNomor_Hrd(itemValue14)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Alamat Email HRD</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={email_hrd}
            onChangeText={itemValue15 => setEmail_Hrd(itemValue15)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon Atasan Langsung</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={nomor_atasan}
            onChangeText={itemValue16 => setNomor_Atasan(itemValue16)}
          />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Alamat Email Atasan Langsung</Text>
          <TextInput
            placeholder="Input Text"
            style={style.input}
            selectedValue={email_atasan}
            onChangeText={itemValue17 => setEmail_Atasan(itemValue17)}
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

export default DataPekerjaanUtama;
