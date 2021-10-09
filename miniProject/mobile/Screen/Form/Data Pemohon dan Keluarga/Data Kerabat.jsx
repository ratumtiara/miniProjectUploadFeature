import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
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

function DataKerabat(props) {
  const [nama_kerabat, setNama_Kerabat] = useState('');
  const [alamat_kerabat, setAlamat_Kerabat] = useState('');
  const [rt, setRt] = useState('');
  const [rw, setRw] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kab_kota, setKab_Kota] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kode_pos, setKode_Pos] = useState('');
  const [no_telepon_rumah, setNo_Telepon_Rumah] = useState('');
  const [no_handphone, setNo_Handphone] = useState('');
  const [hubungan_nasabah, setHubungan_Nasabah] = useState('');

  const {navigation} = props;

  //Provinsi
  const [getIdProvinsi, setGetIdProvinsi] = useState('');
  const [daftarProvinsi, setDaftarProvinsi] = useState([]);

  //Kabupaten Kota
  const [getIdKotaKab, setGetIdKotaKab] = useState('');
  const [daftarKotaKab, setDaftarKotaKab] = useState([]);

  //Kecamatan
  const [getIdKecamatan, setGetIdKecamatan] = useState('');
  const [daftarKecamatan, setDaftarKecamatan] = useState([]);

  //Kelurahan
  const [getIdKelurahan, setGetIdKelurahan] = useState('');
  const [daftarKelurahan, setDaftarKelurahan] = useState([]);

  //hitAPIAlamat
  useEffect(() => {
    axios({
      url: 'https://dev.farizdotid.com/api/daerahindonesia/provinsi',
      method: 'GET',
    })
      .then(response => {
        setDaftarProvinsi(response.data.provinsi);
        setDaftarProvinsiSaatIni(response.data.provinsi);
      })
      .catch(err => {
        console.log('error', err);
      });
  }, []);

  // Alamat KTP
  const clickProvinsi = itemValue => {
    setGetIdProvinsi(itemValue),
      pilihKotaKabupaten(itemValue),
      daftarProvinsi.forEach((value, index) => {
        if (itemValue === value.id) {
          console.log(value.nama);
          setProvinsi(value.nama);
        }
      });
  };

  const clickKabupatenKota = itemValue => {
    setGetIdKotaKab(itemValue), pilihKecamatan(itemValue);

    daftarKotaKab.forEach((value, index) => {
      if (itemValue === value.id) {
        console.log(value.nama);
        setKab_Kota(value.nama);
      }
    });
  };

  const clickKecamatan = itemValue => {
    setGetIdKecamatan(itemValue), pilihKelurahan(itemValue);

    daftarKecamatan.forEach((value, index) => {
      if (itemValue === value.id) {
        console.log(value.nama);
        setKecamatan(value.nama);
      }
    });
  };

  const clickKelurahan = itemValue => {
    setGetIdKelurahan(itemValue),
      daftarKelurahan.forEach((value, index) => {
        if (itemValue === value.id) {
          console.log(value.nama);
          setKelurahan(value.nama);
        }
      });
  };

  const pilihKotaKabupaten = id => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`,
      method: 'GET',
    })
      .then(response => {
        console.log(getIdProvinsi);
        setDaftarKotaKab(response.data.kota_kabupaten);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const pilihKecamatan = id => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`,
      method: 'GET',
    })
      .then(response => {
        setDaftarKecamatan(response.data.kecamatan);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const pilihKelurahan = id => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id}`,
      method: 'GET',
    })
      .then(response => {
        setDaftarKelurahan(response.data.kelurahan);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

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
      nama_kerabat === '' ||
      alamat_kerabat === '' ||
      rt === '' ||
      rw === '' ||
      kelurahan === '' ||
      kecamatan === '' ||
      kab_kota === '' ||
      provinsi === '' ||
      kode_pos === '' ||
      no_telepon_rumah === '' ||
      no_handphone === '' ||
      hubungan_nasabah === ''
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
          'http://192.168.1.130:4000/api/data_diri_keluarga/add_data_diri_kerabat/' +
          getIdUser,
        method: 'POST',
        data: {
          nama_kerabat,
          alamat_kerabat,
          rt,
          rw,
          kelurahan,
          kecamatan,
          kab_kota,
          provinsi,
          kode_pos,
          no_telepon_rumah,
          no_handphone,
          hubungan_nasabah,
        },
      })
        .then(response => {
          navigation.navigate('DataPekerjaan');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Data Kerabat</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Lengkap</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_kerabat}
            onChangeText={itemValue1 => setNama_Kerabat(itemValue1)}
            placeholder="Input Nama"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Kerabat</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={alamat_kerabat}
            onChangeText={itemValue7 => setAlamat_Kerabat(itemValue7)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.container2}>
        <View>
          {/* style={style.container}> */}
          <Text style={style.pertanyaan}>RT</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              selectedValue={rt}
              onChangeText={itemValue8 => setRt(itemValue8)}
              placeholder="RT"
            />
          </View>
        </View>
        <View>
          {/* style={style.container}> */}
          <Text style={style.pertanyaan}>RW</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              selectedValue={rw}
              onChangeText={itemValue9 => setRw(itemValue9)}
              placeholder="RW"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Provinsi</Text>
        <View style={style.dropdown}>
          <Picker selectedValue={getIdProvinsi} onValueChange={clickProvinsi}>
            <Picker.Item style={style.placeholder} label="Pilih Provinsi" />
            {daftarProvinsi.map((provinsi, key) => {
              return (
                <Picker.Item
                  style={style.opsi}
                  key={key}
                  label={provinsi.nama}
                  value={provinsi.id}
                />
              );
            })}
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kota / Kabupaten</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={getIdKotaKab}
            onValueChange={clickKabupatenKota}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Kota Kabupaten"
            />
            {daftarKotaKab.map((kota, key) => {
              return (
                <Picker.Item
                  style={style.opsi}
                  key={key}
                  label={kota.nama}
                  value={kota.id}
                />
              );
            })}
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kecamatan</Text>
        <View style={style.dropdown}>
          <Picker selectedValue={getIdKecamatan} onValueChange={clickKecamatan}>
            <Picker.Item style={style.placeholder} label="Pilih Kecamatan" />
            {daftarKecamatan.map((kecamatan, key) => {
              return (
                <Picker.Item
                  style={style.opsi}
                  key={key}
                  label={kecamatan.nama}
                  value={kecamatan.id}
                />
              );
            })}
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kelurahan</Text>
        <View style={style.dropdown}>
          <Picker selectedValue={getIdKelurahan} onValueChange={clickKelurahan}>
            <Picker.Item style={style.placeholder} label="Pilih Kelurahan" />
            {daftarKelurahan.map((kelurahan, key) => {
              return (
                <Picker.Item
                  style={style.opsi}
                  key={key}
                  label={kelurahan.nama}
                  value={kelurahan.id}
                />
              );
            })}
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kode Pos</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kode_pos}
            onChangeText={itemValue13 => setKode_Pos(itemValue13)}
            placeholder="Input Kode Post"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor Telepon Rumah</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={no_telepon_rumah}
            onChangeText={itemValue15 => setNo_Telepon_Rumah(itemValue15)}
            placeholder="Masukkan Nomor Telepon"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor Handphone</Text>
        <View>
          {/* style={style.border}> */}
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3, borderRadius: 8}}>
              <Text
                style={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  paddingTop: 13,
                  paddingBottom: 12,
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
              selectedValue={no_handphone}
              onChangeText={itemValue5 => setNo_Handphone(itemValue5)}
              placeholder="81234567890"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Hubungan Dengan Nasabah</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={hubungan_nasabah}
            onValueChange={itemValue16 => setHubungan_Nasabah(itemValue16)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Orang Tua"
              value="Orang Tua"
            />
            <Picker.Item
              style={style.opsi}
              label="Saudara Kandung"
              value="Saudara Kandung"
            />
            <Picker.Item
              style={style.opsi}
              label="Anak Kandung"
              value="Anak Kandung"
            />
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
    backgroundColor: '#e5e5e5',
  },
  placeholder: {
    color: 'grey',
  },
  opsi: {
    color: 'black',
  },
  border: {
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

export default DataKerabat;
