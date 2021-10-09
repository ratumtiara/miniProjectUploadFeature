import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import DatePicker from 'react-native-date-picker';
import React, {useState, useEffect} from 'react';
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

function DataPemohon(props) {
  const [nama_pemohon, setNama_Pemohon] = useState('');
  const [tempat_lahir_pemohon, setTempat_Lahir_Pemohon] = useState('');
  const [tanggal_lahir_pemohon, setDate] = React.useState(new Date());
  const [nik_pemohon, setNik_Pemohon] = useState('');
  const [npwp_pemohon, setNpwp_Pemohon] = useState('');
  const [nama_ibu_kandung_pemohon, setNama_Ibu_Kandung_Pemohon] = useState('');
  const [status_kawin_pemohon, setStatus_Kawin_Pemohon] = useState('');
  const [jumlah_tanggungan_anak, setJumlah_Tanggungan_Anak] = useState('');
  const [pendidikan_terakhir, setPendidikan_Terakhir] = useState('');
  const [status_tempat_tinggal, setStatus_Tempat_Tinggal] = useState('');
  const [alamat_seuai_ktp, setAlamat_Seuai_Ktp] = useState('');
  const [rt, setRt] = useState('');
  const [rw, setRw] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kab_kota, setKab_Kota] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kode_pos, setKode_Pos] = useState('');
  const [alamat_saat_ini, setAlamat_Saat_Ini] = useState('');
  const [rt_saat_ini, setRt_Saat_Ini] = useState('');
  const [rw_saat_ini, setRw_Saat_Ini] = useState('');
  const [kelurahan_saat_ini, setKelurahan_Saat_Ini] = useState('');
  const [kecamatan_saat_ini, setKecamatan_Saat_Ini] = useState('');
  const [kab_kota_saat_ini, setKab_Kota_Saat_Ini] = useState('');
  const [provinsi_saat_ini, setProvinsi_Saat_Ini] = useState('');
  const [kode_pos_saat_ini, setKode_Pos_Saat_Ini] = useState('');
  const [lama_tinggal, setLama_Tinggal] = useState('');
  const [alamat_surat_menyurat, setAlamat_Surat_Menyurat] = useState('');
  const [nomor_handphone1, setNomor_Handphone1] = useState('');
  const [nomor_handphone2, setNomor_Handphone2] = useState('');
  const [nomor_telp_rumah, setNomor_Telp_Rumah] = useState('');
  const [alamat_email, setAlamat_Email] = useState('');

  const [open, setOpen] = useState(false);
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

  // ---------------------------------------
  //Provinsi
  const [getIdProvinsiSaatIni, setGetIdProvinsiSaatIni] = useState('');
  const [daftarProvinsiSaatIni, setDaftarProvinsiSaatIni] = useState([]);

  //Kabupaten Kota
  const [getIdKotaKabSaatIni, setGetIdKotaKabSaatIni] = useState('');
  const [daftarKotaKabSaatIni, setDaftarKotaKabSaatIni] = useState([]);

  //Kecamatan
  const [getIdKecamatanSaatIni, setGetIdKecamatanSaatIni] = useState('');
  const [daftarKecamatanSaatIni, setDaftarKecamatanSaatIni] = useState([]);

  //Kelurahan
  const [getIdKelurahanSaatIni, setGetIdKelurahanSaatIni] = useState('');
  const [daftarKelurahanSaatIni, setDaftarKelurahanSaatIni] = useState([]);

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

  // Alamat Saat Ini
  const clickProvinsiSaatIni = itemValue => {
    setGetIdProvinsiSaatIni(itemValue),
      pilihKotaKabupatenSaatIni(itemValue),
      daftarProvinsiSaatIni.forEach((value, index) => {
        if (itemValue === value.id) {
          console.log(value.nama);
          setProvinsi_Saat_Ini(value.nama);
        }
      });
  };

  const clickKabupatenKotaSaatIni = itemValue => {
    setGetIdKotaKabSaatIni(itemValue), pilihKecamatanSaatIni(itemValue);

    daftarKotaKabSaatIni.forEach((value, index) => {
      if (itemValue === value.id) {
        console.log(value.nama);
        setKab_Kota_Saat_Ini(value.nama);
      }
    });
  };

  const clickKecamatanSaatIni = itemValue => {
    setGetIdKecamatanSaatIni(itemValue), pilihKelurahanSaatIni(itemValue);

    daftarKecamatanSaatIni.forEach((value, index) => {
      if (itemValue === value.id) {
        console.log(value.nama);
        setKecamatan_Saat_Ini(value.nama);
      }
    });
  };

  const clickKelurahanSaatIni = itemValue => {
    setGetIdKelurahanSaatIni(itemValue),
      daftarKelurahanSaatIni.forEach((value, index) => {
        if (itemValue === value.id) {
          console.log(value.nama);
          setKelurahan_Saat_Ini(value.nama);
        }
      });
  };

  const pilihKotaKabupatenSaatIni = id => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`,
      method: 'GET',
    })
      .then(response => {
        console.log(getIdProvinsi);
        setDaftarKotaKabSaatIni(response.data.kota_kabupaten);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const pilihKecamatanSaatIni = id => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`,
      method: 'GET',
    })
      .then(response => {
        setDaftarKecamatanSaatIni(response.data.kecamatan);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const pilihKelurahanSaatIni = id => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id}`,
      method: 'GET',
    })
      .then(response => {
        setDaftarKelurahanSaatIni(response.data.kelurahan);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const [UserId, setUserId] = useState('');
  const getUserId = () => {
    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });
  };

  getUserId();

  const handleNext = () => {
    const getIdUser = UserId;

    if (
      nama_pemohon === '' ||
      tempat_lahir_pemohon === '' ||
      nik_pemohon === '' ||
      npwp_pemohon === '' ||
      nama_ibu_kandung_pemohon === '' ||
      status_kawin_pemohon === '' ||
      jumlah_tanggungan_anak === '' ||
      pendidikan_terakhir === '' ||
      status_tempat_tinggal === '' ||
      alamat_seuai_ktp === '' ||
      rt === '' ||
      rw === '' ||
      provinsi === '' ||
      kab_kota === '' ||
      kecamatan === '' ||
      kelurahan === '' ||
      kode_pos === '' ||
      alamat_saat_ini === '' ||
      rt_saat_ini === '' ||
      rw_saat_ini === '' ||
      kelurahan_saat_ini === '' ||
      kecamatan_saat_ini === '' ||
      kab_kota_saat_ini === '' ||
      provinsi_saat_ini === '' ||
      kode_pos_saat_ini === '' ||
      lama_tinggal === '' ||
      alamat_surat_menyurat === '' ||
      nomor_handphone1 === '' ||
      nomor_handphone2 === '' ||
      nomor_telp_rumah === '' ||
      alamat_email === ''
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
          'http://192.168.1.130:4000/api/data_diri_keluarga/add_data_diri_pemohon/' +
          getIdUser,
        method: 'POST',
        data: {
          nama_pemohon,
          tempat_lahir_pemohon,
          tanggal_lahir_pemohon,
          nik_pemohon,
          npwp_pemohon,
          nama_ibu_kandung_pemohon,
          status_kawin_pemohon,
          jumlah_tanggungan_anak,
          pendidikan_terakhir,
          status_tempat_tinggal,
          alamat_seuai_ktp,
          rt,
          rw,
          provinsi,
          kab_kota,
          kecamatan,
          kelurahan,
          kode_pos,
          alamat_saat_ini,
          rt_saat_ini,
          rw_saat_ini,
          kelurahan_saat_ini,
          kecamatan_saat_ini,
          kab_kota_saat_ini,
          provinsi_saat_ini,
          kode_pos_saat_ini,
          lama_tinggal,
          alamat_surat_menyurat,
          nomor_handphone1,
          nomor_handphone2,
          nomor_telp_rumah,
          alamat_email,
        },
      })
        .then(response => {
          console.log(response);

          if (status_kawin_pemohon === 'Menikah') {
            navigation.navigate('DataPasangan');
          } else {
            navigation.navigate('DataKerabat');
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
        <Text style={style.judul}>Data Pemohon</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Lengkap Sesuai KTP</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={nama_pemohon}
            onChangeText={itemValue1 => setNama_Pemohon(itemValue1)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor KTP</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={nik_pemohon}
            onChangeText={itemValue2 => setNik_Pemohon(itemValue2)}
            placeholder="Input Nomor KTP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Tempat Lahir</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={tempat_lahir_pemohon}
            onChangeText={itemValue3 => setTempat_Lahir_Pemohon(itemValue3)}
            placeholder="Input Tempat Lahir"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Tanggal Lahir</Text>
        <View>
          {/* style={style.border}> */}
          <Button title="Pilih Tanggal" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={tanggal_lahir_pemohon}
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
        <Text style={style.pertanyaan}>NPWP Pemohon</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={npwp_pemohon}
            onChangeText={itemValue16 => setNpwp_Pemohon(itemValue16)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Gadis Ibu Kandung</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={nama_ibu_kandung_pemohon}
            onChangeText={itemValue8 => setNama_Ibu_Kandung_Pemohon(itemValue8)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Status Perkawinan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={status_kawin_pemohon}
            onValueChange={itemValue9 => setStatus_Kawin_Pemohon(itemValue9)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Belum Menikah"
              value="Belum Menikah"
            />
            <Picker.Item style={style.opsi} label="Menikah" value="Menikah" />
            <Picker.Item style={style.opsi} label="Cerai" value="Cerai" />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jumlah Tanggungan Anak</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={jumlah_tanggungan_anak}
            onChangeText={itemValue17 => setJumlah_Tanggungan_Anak(itemValue17)}
            placeholder="Input Number"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Pendidikan Terakhir</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={pendidikan_terakhir}
            onValueChange={itemValue10 => setPendidikan_Terakhir(itemValue10)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item style={style.opsi} label="SD/MI" value="SD/MI" />
            <Picker.Item style={style.opsi} label="SMP/MTS" value="SMP/MTS" />
            <Picker.Item style={style.opsi} label="SMA/MA" value="SMA/MA" />
            <Picker.Item
              style={style.opsi}
              label="Diploma I-IV"
              value="Diploma I-IV"
            />
            <Picker.Item style={style.opsi} label="S1" value="Sarjana" />
            <Picker.Item style={style.opsi} label="S2" value="Magister" />
            <Picker.Item style={style.opsi} label="S3" value="Doktor" />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Status Tempat Tinggal</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={status_tempat_tinggal}
            onValueChange={itemValue14 =>
              setStatus_Tempat_Tinggal(itemValue14)
            }>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Milik Sendiri"
              value="Milik Sendiri"
            />
            <Picker.Item style={style.opsi} label="Keluarga" value="Keluarga" />
            <Picker.Item
              style={style.opsi}
              label="Kontrak/Kost"
              value="Kontrak/Kost"
            />
            {/* <Picker.Text label='Lainnya'/>
                    <Picker.TextInput placeholder= 'lainnya'/> */}
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat KTP</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={alamat_seuai_ktp}
            onChangeText={itemValue11 => setAlamat_Seuai_Ktp(itemValue11)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.container2}>
        <View>
          <Text style={style.pertanyaan}>RT</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              selectedValue={rt}
              onChangeText={itemValue18 => setRt(itemValue18)}
              placeholder="RT"
            />
          </View>
        </View>
        <View>
          <Text style={style.pertanyaan}>RW</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              selectedValue={rw}
              onChangeText={itemValue19 => setRw(itemValue19)}
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
        <View>
          <TextInput
            style={style.input}
            selectedValue={kode_pos}
            onChangeText={itemValue24 => setKode_Pos(itemValue24)}
            placeholder="Masukan Kode Pos"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Domisili</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={alamat_saat_ini}
            onChangeText={itemValue12 => setAlamat_Saat_Ini(itemValue12)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.container2}>
        <View>
          <Text style={style.pertanyaan}>RT</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              selectedValue={rt_saat_ini}
              onChangeText={itemValue25 => setRt_Saat_Ini(itemValue25)}
              placeholder="RT"
            />
          </View>
        </View>
        <View>
          <Text style={style.pertanyaan}>RW</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              selectedValue={rw_saat_ini}
              onChangeText={itemValue26 => setRw_Saat_Ini(itemValue26)}
              placeholder="RW"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Provinsi</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={getIdProvinsiSaatIni}
            onValueChange={clickProvinsiSaatIni}>
            <Picker.Item style={style.placeholder} label="Pilih Provinsi" />
            {daftarProvinsiSaatIni.map((provinsi, key) => {
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
            selectedValue={getIdKotaKabSaatIni}
            onValueChange={clickKabupatenKotaSaatIni}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Kota Kabupaten"
            />
            {daftarKotaKabSaatIni.map((kota, key) => {
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
          <Picker
            selectedValue={getIdKecamatanSaatIni}
            onValueChange={clickKecamatanSaatIni}>
            <Picker.Item style={style.placeholder} label="Pilih Kecamatan" />
            {daftarKecamatanSaatIni.map((kecamatan, key) => {
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
          <Picker
            selectedValue={getIdKelurahanSaatIni}
            onValueChange={clickKelurahanSaatIni}>
            <Picker.Item style={style.placeholder} label="Pilih Kelurahan" />
            {daftarKelurahanSaatIni.map((kelurahan, key) => {
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
        <View>
          <TextInput
            style={style.input}
            selectedValue={kode_pos_saat_ini}
            onChangeText={itemValue31 => setKode_Pos_Saat_Ini(itemValue31)}
            placeholder="Masukan Kode Pos"
          />
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Lama Tinggal</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={lama_tinggal}
            onChangeText={itemValue15 => setLama_Tinggal(itemValue15)}
            placeholder="Input Angka dalam satuan bulan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Surat Menyurat</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={alamat_surat_menyurat}
            onChangeText={itemValue32 => setAlamat_Surat_Menyurat(itemValue32)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor Handphone 1</Text>
        <View>
          {/* style={style.border}> */}
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
                +62
              </Text>
            </View>
            <TextInput
              style={style.inputNoHp}
              selectedValue={nomor_handphone1}
              onChangeText={itemValue33 => setNomor_Handphone1(itemValue33)}
              placeholder="Input No.HP"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor Handphone 2 (optional)</Text>
        <View>
          {/* style={style.border}> */}
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
                +62
              </Text>
            </View>
            <TextInput
              style={style.inputNoHp}
              selectedValue={nomor_handphone2}
              onChangeText={itemValue34 => setNomor_Handphone2(itemValue34)}
              placeholder="Input No.HP"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Telepon Rumah</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={nomor_telp_rumah}
            onChangeText={itemValue35 => setNomor_Telp_Rumah(itemValue35)}
            placeholder="Input Telepon Rumah"
          />
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Email</Text>
        <View>
          {/* style={style.border}> */}
          <TextInput
            style={style.input}
            selectedValue={alamat_email}
            onChangeText={itemValue36 => setAlamat_Email(itemValue36)}
            placeholder="Input Email"
          />
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
    flex: 3,
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

export default DataPemohon;
