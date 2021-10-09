import React, { useState } from 'react';
// import CheckBox from '@react-native-community/checkbox';
// import OrderedList from '@govuk-react/ordered-list';
// import { OrderedList, ListItem } from 'govuk-react';
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

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

function RingkasanPernyataan(props) {
  const { navigation } = props;
  // let listpernyataan = [
  //   {
  //     pernyataan:
  //       'Apabila kemudian hari terdapat data, informasi,dokumen, identitas diri, keterangan atau sehubungan dengan Formulir Aplikasi ini tidak benar, maka saya bersedia untuk mempertanggungjawabkannya sesuai dengan ketentuan hukum yang berlaku.',
  //     key: 0,
  //   },
  //   {
  //     pernyataan:
  //       'Dengan ini saya memberikan kuasa kepada Bank Muamalat untuk melakukan pemeriksaan terhadap kebenaran data/ informasi serta dokumen-dokumen yang saya serahkandari sumber maupun denga ncara yang dianggap baik dan perlu oleh Bank Muamalat, termasuk pengecekan terhadao kebenaran rekening terkait, dan membebaskan Bank Muamalat dari segala tuntutan dari pihak manapun sehubungan pemeriksaan tersebut.',
  //     key: 1,
  //   },
  //   {
  //     pernyataan:
  //       'Bank Muamalat berhak dan berwenang untuk menolak atau menyetujui seluruh atau sebagian dari jumlah yang saya mohon berdasarkan verifikasi dan analisa Bank Muamalat.',
  //     key: 2,
  //   },
  //   {
  //     pernyataan:
  //       'Bank Muamalat berhak melakukan penilaian atas tanah dan bangunan yang akan dijaminkan dengan atau tanpa bantuan dari perusahaan penilai independen yang ditunjuk oleh Bank Muamalat dan untuk keperluan tersebut saya mengikatkan diri untuk membayar seluruh biaya yang berkaitan dengan penilaian ruma tersebut meskipun permohonan pembiayaan saya tidak disetujui oleh Bank Muamalat atau terjadi pembatalan permohonan pembiayaan atas permintaan  saya.',
  //     key: 3,
  //   },
  //   {
  //     pernyataan:
  //       'Saya akan menyediakan seluruh biaya-biaya prarealisasi di rekening pribadi atas nama saya yang ada di Bank Muamalat',
  //     key: 4,
  //   },
  //   {
  //     pernyataan:
  //       'Semua Dokumen yang telah diserahkan dan dibiayai penilaian agunan yang telah disetor melalui Bank Muamalat tidak akan saya tarik kembali.',
  //     key: 5,
  //   },
  //   {
  //     pernyataan:
  //       'Seluruh fasilitas pembiayaan Bank Muamalat dilaporkan ke dalam Sistem Layanan Informasi Keuangan (SLIK)',
  //     key: 6,
  //   },
  //   {
  //     pernyataan:
  //       'Saya menyatakan bersedia dan akan mentaati segala persyaratan dan ketentuan yang berlaku di Bank Muamalat, ketentuan dari Regulator maupun ketentuan perundang-undangan yang berlaku.',
  //     key: 7,
  //   },
  //   {
  //     pernyataan:
  //       'Saya bersedia meneripa penawaran produk lainnya dari Bank Muamalat.',
  //     key: 8,
  //   },
  // ];
  let dummy = [
    {
      description:
        'Apabila kemudian hari terdapat data, informasi,dokumen, identitas diri, keterangan atau sehubungan dengan Formulir Aplikasi ini tidak benar, maka saya bersedia untuk mempertanggungjawabkannya sesuai dengan ketentuan hukum yang berlaku.',
    },
    {
      description:
        'Dengan ini saya memberikan kuasa kepada Bank Muamalat untuk melakukan pemeriksaan terhadap kebenaran data/ informasi serta dokumen-dokumen yang saya serahkandari sumber maupun denga ncara yang dianggap baik dan perlu oleh Bank Muamalat, termasuk pengecekan terhadao kebenaran rekening terkait, dan membebaskan Bank Muamalat dari segala tuntutan dari pihak manapun sehubungan pemeriksaan tersebut.',
    },
    {
      description:
        'Bank Muamalat berhak dan berwenang untuk menolak atau menyetujui seluruh atau sebagian dari jumlah yang saya mohon berdasarkan verifikasi dan analisa Bank Muamalat.',
    },
    {
      description:
        'Bank Muamalat berhak melakukan penilaian atas tanah dan bangunan yang akan dijaminkan dengan atau tanpa bantuan dari perusahaan penilai independen yang ditunjuk oleh Bank Muamalat dan untuk keperluan tersebut saya mengikatkan diri untuk membayar seluruh biaya yang berkaitan dengan penilaian ruma tersebut meskipun permohonan pembiayaan saya tidak disetujui oleh Bank Muamalat atau terjadi pembatalan permohonan pembiayaan atas permintaan  saya.',
    },
    {
      description:
        'Saya akan menyediakan seluruh biaya-biaya prarealisasi di rekening pribadi atas nama saya yang ada di Bank Muamalat',
    },
    {
      description:
        'Semua Dokumen yang telah diserahkan dan dibiayai penilaian agunan yang telah disetor melalui Bank Muamalat tidak akan saya tarik kembali.',
    },
    {
      description:
        'Seluruh fasilitas pembiayaan Bank Muamalat dilaporkan ke dalam Sistem Layanan Informasi Keuangan (SLIK)',
    },
    {
      description:
        'Saya menyatakan bersedia dan akan mentaati segala persyaratan dan ketentuan yang berlaku di Bank Muamalat, ketentuan dari Regulator maupun ketentuan perundang-undangan yang berlaku.',
    },
    {
      description:
        'Saya bersedia meneripa penawaran produk lainnya dari Bank Muamalat.',
    },
  ];

  const [toogleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View
          style={{
            borderWidth: 0.34,
            height: vh * 60,
            marginTop: vh * 4,
            borderRadius: 5,
            borderColor: 'grey',
          }}>
          <ScrollView nestedScrollEnabled={true}>
            {/* <View style={styles.cardBody}> */}
            <View style={{ padding: 10 }}>
              <Text
                style={{ fontSize: 25, fontWeight: 'bold', color: '#4D4D4D' }}>
                Pernyataan
              </Text>
            </View>
            <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'justify',
                  lineHeight: 20,
                  color: 'grey',
                }}>
                Sehubungan dengan data/informasi serta dokumen yang saya berikan
                dengan ini saya selaku pemohon kredit menyatakan sebagai
                berikut:{' '}
              </Text>
            </View>
            <View style={styles.dropdownContainer}>
              {dummy.map((data, index) => {
                return (
                  <View style={styles.dropdownItem} key={index}>
                    <Text style={styles.dropdownNum}>{index + 1}.</Text>

                    <Text style={styles.dropdownDesc}>{data.description}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>

        <View style={styles.containeragreement}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.checkList}
              onPress={() => {
                setToggleCheckBox(!toogleCheckBox);
              }}>
              {toogleCheckBox ? (
                <Image
                  style={styles.checkIcon}
                  source={require('../../Image/checklist.png')}
                />
              ) : null}
            </TouchableOpacity>
            {/* toogleCheckBox, setToggleCheckBox */}
            <Text style={styles.agreement}>
              Bahwa semua informasi dan dokumen yang saya lampir kan dalam
              permohonan ini adalah benar dan apabila terdapat perubahan data
              dalam aplikasi, saya wajib segera memberikan informasi terbaru
              kepada Bank Muamalat.{' '}
            </Text>
          </View>
        </View>

        <View style={styles.containeragreement}>
          <View style={styles.cardHeaderCont}>
            <Text style={styles.agreement1}>
              Formulir ini tunduk dan telah di sesuaikan dengan ketentuan
              perundang-undangan, termasuk peraturan Otoritas jasa keuangan
              (OJK). Informasi lebih lanjut hubungi Salam Muamalat 1500016. Bank
              Muamalat terdaftar dan diawasi oleh Otoritas Jasa Keuangan dan
              Dewan Pengawas Syariah.
            </Text>
          </View>
        </View>

        <View style={styles.simpanLanjut}>
          <TouchableOpacity style={styles.simpanForm}>
            <Text style={styles.simpanForm}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnLanjut}
            onPress={() => navigation.navigate('PengajuanBerhasil')}>
            <Text style={styles.btn}>Ajukan KPR</Text>
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
    height: 150,
    flex: 1,
    borderWidth: 0.34,
    borderColor: 'grey',
    borderRadius: 5,
    // paddingBottom: 20,
  },
  containeragreement: {
    //   borderRadius: 5,
    marginTop: 50,
    height: 125,
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
    marginLeft: 11,
    fontWeight: 'bold',
  },
  textBody: {
    fontSize: 15,
    marginLeft: 11,
    color: '#999999',
    // marginBottom: 12,
  },
  agreement1: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify',
    lineHeight: 20,
    marginTop: 20,
    // flex: 1,
    color: '#999999',
  },
  agreement: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 25,
    textAlign: 'justify',
    lineHeight: 20,
    marginTop: 20,
    flex: 1,
    color: '#999999',
    // marginBottom: 12,
  },
  cardBody: {
    flexDirection: 'row',
    marginTop: 15,
    // borderBottomWidth: 0.34
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
    borderColor: 'black',
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
  },
  inputLuas: {
    paddingTop: 17,
    paddingBottom: 12,
    paddingRight: 500,
    // marginRight: 50,
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
  scrollviewPernyataan: {
    marginBottom: 10,
    maxHeight: 100,
  },
  simpanLanjut: {
    flexDirection: 'row',
    marginVertical: 40,
    justifyContent: 'space-around',
  },
  simpanForm: {
    // alignItems: "flex-end",
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    fontSize: 25,
    flex: 0.5,
    // marginRight: 0,
    color: '#500878',
  },
  btnLanjut: {
    // paddingLeft: 50
    borderRadius: 9,
    padding: 10,
    flex: 0.05 * vw,
    alignItems: 'center',
    backgroundColor: '#500878',
    // justifyContent: 'center',
    // marginRight: -100,
  },
  btn: {
    fontSize: 25,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    color: 'white',
  },
  dropdownContainer: {
    marginBottom: vh * 5,
    marginTop: vh * 2,
  },
  dropdownItem: {
    flexDirection: 'row',
    marginBottom: vh * 2,
    // backgroundColor: "violet"
  },
  dropdownNum: {
    marginHorizontal: vw * 2,
    color: 'grey',
  },
  dropdownTextContainer: {
    marginRight: vw * 10,
    // backgroundColor: "grey"
  },
  dropdownTitle: {},
  dropdownDesc: {
    marginLeft: vw * 1,
    paddingRight: vw * 7,
    textAlign: 'justify',
    lineHeight: 20,
    fontSize: 15,
    color: 'grey',
  },
  checkList: {
    width: 5.2 * vw,
    height: 5.2 * vw,
    // backgroundColor: "red"

    borderWidth: 0.34,
    borderRadius: 5,
    marginTop: 23,
    marginHorizontal: 10,
    borderColor: 'grey',
  },
  checkIcon: {
    width: 4.8 * vw,
    height: 4.8 * vw,
    resizeMode: 'center',
    backgroundColor: '#500878',
    borderRadius: 20,
  },
});

export default RingkasanPernyataan;
