import React, { useState, useEffect } from 'react';
import {
  Card,
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
  TouchableOpacityBase,
  TouchableOpacity,
  Image,
  borderWidth,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

function RingkasanDokumen(props) {
  const { navigation } = props;

  const [namaPemohon, setnamaPemohon] = useState("");
  const [nomorHanphone, setNomorHanphone] = useState("");
  const [peruntukanPembiayaan, setPeruntukanPembiayaan] = useState("");
  const [totalPlafond, setTotalPlafond] = useState();
  const [waktuPembiayaan, setWaktuPembiayaan] = useState();
  const [UserId, setUserId] = useState('');
 
  const getUserId = () => {
    AsyncStorage.getItem('UserId')
      .then((value) => {
        setUserId(value)
      })
  }

  const clickRingkasan = () => {
    console.log(UserId);

    axios({
      url: "http://192.168.1.130:4000/api/user/getOne/" + UserId,
      method: 'GET',
    })
      .then(response => {
        setnamaPemohon(response.data.result.GEN_DATA_DIRI_PEMOHON.nama_pemohon);
        setNomorHanphone(response.data.result.GEN_DATA_DIRI_PEMOHON.nomor_handphone1);
        setPeruntukanPembiayaan(response.data.result.GEN_FASILITAS_PEMBIAYAAN.peruntukan_pembiayaan);
        setTotalPlafond(response.data.result.GEN_FASILITAS_PEMBIAYAAN.total_plafond);
        setWaktuPembiayaan(response.data.result.GEN_FASILITAS_PEMBIAYAAN.waktu_pembiayaan.toString());
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const clickRingkasan1 = () => {
    getUserId(),
    clickRingkasan()
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardCont}>
          <View style={styles.cardHeaderCont}>
            <Text style={styles.textHeader}>Ringkasan Pengajuan KPR</Text>
          </View>

          <View style={styles.cardBody}>
            <View>
              <Text style={styles.textBody}>
                {` Mohon lakukan pengecekan sebelum menekan tombol
 “Ajukan KPR” untuk pengajuan kredit kepemilikan properti
 Anda secara seksama, informasi yang telah Anda isi akan 
 kami gunakan untuk menindak lanjuti  pengajuan Anda.    
`}
              </Text>
            </View>
          </View>
        </View>

        <Collapse style={styles.card}>
          <CollapseHeader
            style={{
              borderBottomWidth: 1,
              borderColor: 'grey',
            }}
          >
            <View style={{ flexDirection: 'row' }} onTouchStart={clickRingkasan1}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity >
                  <Text
                    style={{
                      margin: 10,
                      fontSize: 20,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                  >
                    Ringkasan Pemohon
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  source={require('../../Image/IconDropdown.png')}
                  style={styles.imgCardDropdown}
                  resizeMode="contain"
                />
              </View>
            </View>
          </CollapseHeader>
          <CollapseBody style={{ paddingHorizontal: 10 }}>
            <View style={styles.kolompertanyaan}>
              <Text style={styles.pertanyaan}>Nama Pemohon</Text>
              <View style={styles.border}>
                <TextInput
                  style={styles.input}
                  value={namaPemohon}
                />
              </View>
            </View>

            <View style={styles.container2}>
              <View style={styles.container3}>
                <Text style={styles.pertanyaan}>Nomor Handphone</Text>
                <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                  <Text style={styles.textLuas}>
                    Rp
                    {/* // setPertanyaan3={setPertanyaan3} */}
                  </Text>
                  <TextInput
                    style={styles.inputLuas}
                    value={nomorHanphone}
                  />
                </View>
              </View>
            </View>

            <View style={styles.kolompertanyaan}>
              <Text style={styles.pertanyaan}>Tujuan Kredit</Text>
              <View style={styles.border}>
                <TextInput
                  style={styles.input}
                  value={peruntukanPembiayaan}
                />
              </View>
            </View>

            <View style={styles.kolompertanyaan}>
              <Text style={styles.pertanyaan}>Jumlah Pinjaman</Text>
              <View style={styles.border}>
                <TextInput
                  style={styles.input}
                  value={totalPlafond}
                />
              </View>
            </View>

            <View style={styles.kolompertanyaan}>
              <Text style={styles.pertanyaan}>Waktu Pembiayaan</Text>
              <View style={styles.border}>
                <TextInput
                  style={styles.input}
                  value={waktuPembiayaan}
                />
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.card}>
          <CollapseHeader
            style={{
              borderBottomWidth: 1,
              borderColor: 'grey',
              // borderRadius: 5,
              // marginLeft: 5,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    margin: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingLeft: 10,
                  }}>
                  Dokumen Pemohon
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../Image/IconDropdown.png')}
                  style={styles.imgCardDropdown}
                  resizeMode="contain"
                />
              </View>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul1}>Kartu Keluarga</Text>
              </View>

              <View>
                <Text style={styles.subjudul1}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>Surat Nikah</Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>NPWP</Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>Slip Gaji</Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>Keterangan Kerja</Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>
                  Mutasi Rekening Buku Tabungan
                </Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>Laporan Keuangan Atau Usaha</Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>Sertifikat Bangunan</Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>IMB</Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
            <View style={styles.containerView}>
              <View>
                <Text style={styles.subjudul}>PPBB</Text>
              </View>

              <View>
                <Text style={styles.subjudul}>.jpg</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <View style={styles.containerBtnLjt}>
          {/* <View style={{flexDirection: 'column'}}> */}
          <TouchableOpacity style={{ justifyContent: 'center' }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#500878',
                marginLeft: 40,
                marginTop: -10,
              }}>
              Home
            </Text>
          </TouchableOpacity>
          <View style={{}}>
            <TouchableOpacity
              style={{
                width: 156,
                height: 48,
                backgroundColor: 'grey',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('RingkasanPernyataan')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                }}>
                Lanjut
              </Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  containerView: {
    marginVertical: 15,
    marginHorizontal: 30,
    // padding: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: '#cccccc',
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  container2: {
    flexDirection: 'row',
    marginBottom: 10,
    // backgroundColor: '#E5E5E5'
  },
  container3: {
    //   paddingLeft: 16,
    //   paddingRight: 16,
  },
  lpIklan: {
    // position: 'absolute',
    // flex: 1,
    height: 400,
    width: null,
    // top: 91,
  },
  cardCont: {
    //   borderRadius: 5,
    marginTop: 20,
    height: 150,
    flex: 1,
    borderWidth: 0.34,
    borderColor: 'grey',
    borderRadius: 5,
    // paddingBottom: 20,
  },
  cardHeaderCont: {
    //   height: 33,
  },
  textHeader: {
    fontSize: 25,
    //   color: '#500878',
    marginTop: 4,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  textBody: {
    fontSize: 18,
    marginLeft: 11,
    color: '#999999',
    // marginBottom: 12,
  },
  cardBody: {
    flexDirection: 'row',
    marginTop: 15,
  },
  imgCard: {
    width: 49,
    height: 49,
    marginTop: 12,
    marginLeft: 11,
    marginRight: 22,
  },
  btnCard: {
    paddingTop: 5,
    paddingLeft: 20,
    color: '#ffffff',
  },
  cardkedua: {
    height: 33,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
  },
  cardketiga: {
    height: 368,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
  },
  imgCard3: {
    height: 300,
    width: null,
  },
  kolompertanyaan: {
    marginBottom: 10,
  },
  pertanyaan: {
    fontSize: 20,
    color: 'grey',
    marginTop: 10,
    marginBottom: 10,
  },
  border: {
    borderWidth: 0.1,
    borderColor: 'grey',
    borderRadius: 8,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 17,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
  },
  textLuas: {
    // justifyContent: 'center',
    padding: 14,
    fontSize: 17,
    // borderWidth: 1,
    backgroundColor: '#B3B3B3',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // flex: 1,
  },
  inputLuas: {
    paddingTop: 15,
    paddingBottom: 12,
    paddingRight: 380,
    // marginRight: 200,
    paddingLeft: 16,
    fontSize: 17,
    backgroundColor: '#E5E5E5',
    color: 'grey',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  item: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 10,
    marginBottom: 5,
  },
  subItem: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 35,
    borderColor: 'grey',
  },
  imgCardDropdown: {
    width: 30,
    height: 30,
    marginTop: 12,
    marginLeft: 15,
    marginRight: 22,
    marginBottom: 12,
  },
  subjudul: {
    fontSize: 17,
    // marginTop: 15,
    marginBottom: 10,
    // marginHorizontal: 20,
  },
  subjudul1: {
    fontSize: 17,
    marginTop: 15,
    marginBottom: 10,
    // marginHorizontal: 20,
  },
  textFormat: {
    color: 'grey',
  },
  textUnggah: {
    color: '#500878',
  },
  containerBtnLjt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default RingkasanDokumen;
