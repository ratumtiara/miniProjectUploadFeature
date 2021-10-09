import { isTSConstructSignatureDeclaration } from '@babel/types';
import React, { useState, Component, useEffect } from 'react';
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
} from 'react-native';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import Login from './Login';
import DataPengajuan from '../Form/Fasilitas Pembayaran/Data Pengajuan';

import Swiper from 'react-native-swiper';
import Markdown from 'react-native-easy-markdown';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LandingPage(props) {
  const vw = Dimensions.get('window').width / 100;
  const vh = Dimensions.get('window').height / 100;

  const { navigation } = props;

  const [getToken, setGetToken] = useState('');
  const getTokenFunc = () => {
    AsyncStorage.getItem('token')
      .then((value) => {
        setGetToken(value)
      })
  }

  getTokenFunc()

  const handleNext = () => {
    const token = getToken;

    console.log(token);

    if (token === null) {
      navigation.navigate('Login')
    } else if (token !== null) {
      navigation.navigate('DataPengajuan')
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Swiper style={styles.wrapper} height={400} showsButtons loop={false}>
          <Image
            style={styles.lpIklan}
            source={require('../../Image/lp3.png')}
            resizeMode="contain"></Image>
          <Image
            style={styles.lpIklan}
            source={require('../../Image/lp4.png')}
            resizeMode="contain"></Image>
        </Swiper>
        <View style={styles.card}>
          <Text style={styles.textHeader}>Formulir Tersimpan</Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.textHeader}>Keuntungan</Text>
          </View>
          <Image
            source={require('../../Image/infocard3.png')}
            style={styles.imgCard3}
            resizeMode="contain"
          />
        </View>

        <View>
          <Collapse style={styles.card}>
            <CollapseHeader
              style={{
                borderBottomWidth: 1,
                borderColor: 'grey',
                borderRadius: 5,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.textHeader2}>Proses KPR iB Syariah </Text>
                  <Text
                    style={{
                      color: '#500878',
                      marginLeft: 11,
                      marginBottom: 10,
                    }}>
                    Bank Muamalat
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
              <View>
                <View style={styles.cardBody}>
                  <Image
                    source={require('../../Image/lpkpr1.png')}
                    style={styles.imgCard}
                    resizeMode="contain"
                  />
                  <Text style={styles.textBody}>
                    isi formulir KPR secara online melalui Aplikasi MDin dan
                    Official Website Bank Muamalat
                  </Text>
                </View>
                <View style={styles.cardBody}>
                  <Image
                    source={require('../../Image/lpkpr2.png')}
                    style={styles.imgCard}
                    resizeMode="contain"
                  />
                  <Text style={styles.textBody}>Upload Dokumen Syarat KPR</Text>
                </View>
                <View style={styles.cardBody}>
                  <Image
                    source={require('../../Image/lpkpr3.png')}
                    style={styles.imgCard}
                    resizeMode="contain"
                  />
                  <Text style={styles.textBody}>
                    Proses penilaian calon debitur, agunan serta verifikasi
                    dokumen
                  </Text>
                </View>
                <View>
                  <Image
                    source={require('../../Image/lpkpr5.png')}
                    style={{
                      width: 300,
                      height: 49,
                      marginVertical: 20,
                      borderTopRightRadius: 100,
                      borderBottomRightRadius: 100,
                    }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </CollapseBody>
          </Collapse>
        </View>

        <View>
          <Collapse style={styles.card}>
            <CollapseHeader
              style={{
                borderBottomWidth: 1,
                borderColor: 'grey',
                borderRadius: 5,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textHeader2}>Syarat Pengajuan</Text>
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
              <Text style={styles.textBody}>
                1. Usia maksimal saat jatuh tempo pembiayaan
              </Text>
              <View style={{ marginHorizontal: 11 }}>
                <Text style={styles.textBody1}>
                  {'- Bagi pegawai/belum pensiun 55 tahun \n' +
                    '- Bagi wiraswasta 60 tahun '}
                </Text>
              </View>
              <Text style={styles.textBody}>2. Status karyawan:</Text>
              <View style={{ marginHorizontal: 11 }}>
                <Text style={styles.textBody1}>
                  {'- Karyawan tetap (minimal telah bekerja 1 tahun \n' +
                    '- Karyawan kontrak (minimal telah bekerja 2 tahun \n' +
                    '- Wiraswasta/Profesional.'}
                </Text>
              </View>
              <Text style={{ marginHorizontal: 12, fontSize: 15 }}>
                Pembiayaan dicover dengan asuransi jiwa.
              </Text>
              <Text style={styles.textBody}>
                3. Tidak dalam Daftar Pembiayaan Bermasalah
              </Text>
              <Text style={styles.textBody}>
                4. Usia minimal 21 tahun dan sudah menikah
              </Text>
            </CollapseBody>
          </Collapse>
        </View>

        <View>
          <Collapse style={styles.card}>
            <CollapseHeader
              style={{
                borderBottomWidth: 1,
                borderColor: 'grey',
                borderRadius: 5,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textHeader2}>Dokumen</Text>
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
              <Text style={styles.textBody}>
                1. Formulir permohonan pembiayaan untuk individu
              </Text>
              <Text style={styles.textBody}>
                2. Fotocopy KTP, KK, Surat Nikah (bila sudah menikah)
              </Text>
              <Text style={styles.textBody}>3. Fotocopy NPW</Text>
              <Text style={styles.textBody}>
                4. Asli slip gaji & surat keterangan kerja (untuk
                pegawai/karyawan)
              </Text>
              <Text style={styles.textBody}>
                5. Fotocopy mutasi rekening buku tabungan/statement giro 3 bulan
                terakhir
              </Text>
              <Text style={styles.textBody}>
                6. Laporan keuangan atau laporan usaha (untuk wiraswasta)
              </Text>
              <Text style={styles.textBody}>
                7. Fotocopy sertifikat, IMB dan PBB
              </Text>
            </CollapseBody>
          </Collapse>
        </View>

        <View style={{ alignItems: 'center', marginVertical: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#500878' }}>
            Daftarkan diri anda segera
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#500878' }}>
            KPR iB Bank Muamalat
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.btnCard}
            onPress={() => handleNext()}>
            <Text
              style={{
                color: 'white',
                margin: 5,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {' '}
              Ajukan Sekarang{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  lpIklan: {
    // position: 'absolute',
    // flex: 1,
    height: 400,
    width: null,
    // top: 91,
  },
  cardCont: {
    borderRadius: 5,
    height: 328,
    flex: 1,
    borderWidth: 1,
    // paddingBottom: 20,
  },
  cardHeaderCont: {
    height: 33,
    borderBottomWidth: 1,
  },
  textHeader: {
    fontSize: 16,
    color: '#500878',
    marginTop: 10,
    marginLeft: 11,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textHeader2: {
    fontSize: 16,
    color: '#500878',
    marginTop: 10,
    marginLeft: 11,
    fontWeight: 'bold',
    flex: 1,
  },
  textBody: {
    fontSize: 15,
    marginVertical: 12,
    marginHorizontal: 11,
    flex: 1,
    textAlign: 'justify',
    lineHeight: 20,

    // marginBottom: 12,
  },
  textBody1: {
    fontSize: 15,
    marginBottom: 12,
    marginHorizontal: 11,
    // flex: 1,
    textAlign: 'justify',
    lineHeight: 20,

    // marginBottom: 12,
  },
  cardBody: {
    flexDirection: 'row',
    marginTop: 12,
  },
  imgCard: {
    width: 49,
    height: 49,
    marginTop: 12,
    marginLeft: 15,
    marginRight: 22,
    marginBottom: 12,
  },
  imgCardDropdown: {
    width: 30,
    height: 30,
    marginTop: 12,
    marginLeft: 15,
    marginRight: 22,
    marginBottom: 12,
  },
  btnCard: {
    paddingVertical: 10,
    width: 250,
    backgroundColor: '#500878',
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 35,
    borderColor: 'grey',
  },
  cardkedua: {
    height: 33,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    borderColor: 'grey',
  },
  cardketiga: {
    height: 368,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    borderColor: 'grey',
  },
  imgCard3: {
    height: 340,
    width: null,
    margin: 30,
  },

  // wrapper: {
  //   top: 15,
  // },
});

export default LandingPage;
