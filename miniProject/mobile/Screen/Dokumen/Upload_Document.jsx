import React, { useState } from 'react';
import {
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
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import RNFetchBlob from 'rn-fetch-blob';
import DocumentPicker from 'react-native-document-picker';
// import axios from 'axios';

function UploadDocument(props) {
  const [ktp, setKtp] = useState('');
  const [kartu_keluarga, setKartu_Keluarga] = useState('');
  const [surat_nikah, setSurat_Nikah] = useState('');
  const [npwp, setNpwp] = useState('');
  const [slip_gaji_asli, setSlip_Gaji_Asli] = useState('');
  const [keterangan_kerja, setKeterangan_Kerja] = useState('');
  const [mutasi_rekening, setMutasi_Rekening] = useState('');
  const [laporan_keuangan, setLaporan_Keuangan] = useState('');
  const [sertifikat_bangunan, setSertifikat_Bangunan] = useState('');
  const [imb, setImb] = useState('');
  const [pbb, setPbb] = useState('');

  const { navigation } = props;

  // const handleNext = () => {
  //   const getIdUser = 11;

  //   if (
  //     ktp === '' ||
  //     kartu_keluarga === '' ||
  //     surat_nikah === '' ||
  //     npwp === '' ||
  //     slip_gaji_asli === '' ||
  //     keterangan_kerja === '' ||
  //     mutasi_rekening === '' ||
  //     laporan_keuangan === '' ||
  //     sertifikat_bangunan === '' ||
  //     imb === '' ||
  //     pbb === ''

  //   ) {
  //     Alert.alert('Proses Gagal', 'Data anda belum lengkap', [
  //       // {
  //       //   text: "Cancel",
  //       //   onPress: () => console.log("Cancel Pressed"),
  //       //   style: "cancel"
  //       // },
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ]);
  //   } else {
  //     axios({
  //       url:
  //         'http://localhost:4000/api/data_pembiayaan/update_form_data_pembiayaan/' +
  //         getIdUser,
  //       method: 'PUT',
  //       data: {
  //         ktp,
  //         kartu_keluarga,
  //         surat_nikah,
  //         npwp,
  //         slip_gaji_asli,
  //         keterangan_kerja,
  //         mutasi_rekening,
  //         laporan_keuangan,
  //         sertifikat_bangunan,
  //         imb,
  //         pbb
  //       },
  //     })
  //       .then(response => {
  //         console.log(response);
  //         navigation.navigate('RingkasanDokumen');
  //       })
  //       // .then(response => {
  //       //   console.log(response);
  //       //   navigation.navigate('UploadDocument');
  //       // })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }

  const KTP = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setKtp(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const KK = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setKartu_Keluarga(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const SuratNikah = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSurat_Nikah(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const NPWP = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setNpwp(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const SlipGaji = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSlip_Gaji_Asli(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const SKK = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setKeterangan_Kerja(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const MutasiRekening = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setMutasi_Rekening(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const LaporanKeuangan = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setLaporan_Keuangan(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const SertifikatBangunan = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSertifikat_Bangunan(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const IMB = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setImb(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const PBB = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setPbb(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View>
      <ScrollView style={style.container}>
        <View>
          <Text style={style.judul}>Dokumen Wajib</Text>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>KTP</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={KTP}>
                {ktp ? `${ktp.name ? ktp.name : ''}` : 'Unggah'}
              </Text>
              <View>
                {ktp ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>Kartu Keluarga</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={KK}>
                {kartu_keluarga
                  ? `${kartu_keluarga.name ? kartu_keluarga.name : ''}`
                  : 'Unggah'}
              </Text>
              <View>
                {kartu_keluarga ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>Surat Nikah *</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={SuratNikah}>
                {surat_nikah
                  ? `${surat_nikah.name ? surat_nikah.name : ''}`
                  : 'Unggah'}
              </Text>
              <View>
                {surat_nikah ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>NPWP</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={NPWP}>
                {npwp ? `${npwp.name ? npwp.name : ''}` : 'Unggah'}
              </Text>
              <View>
                {npwp ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>Slip Gaji Asli</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={SlipGaji}>
                {slip_gaji_asli
                  ? `${slip_gaji_asli.name ? slip_gaji_asli.name : ''}`
                  : 'Unggah'}
              </Text>
              <View>
                {slip_gaji_asli ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>Surat Keterangan Kerja</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={SKK}>
                {keterangan_kerja
                  ? `${keterangan_kerja.name ? keterangan_kerja.name : ''}`
                  : 'Unggah'}
              </Text>
              <View>
                {keterangan_kerja ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>Mutasi Rekening Buku Tabungan</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={MutasiRekening}>
                {mutasi_rekening
                  ? `${mutasi_rekening.name ? mutasi_rekening.name : ''}`
                  : 'Unggah'}
              </Text>
              <View>
                {mutasi_rekening ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>Laporan Keuangan atau Usaha</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={LaporanKeuangan}>
                {laporan_keuangan
                  ? `${laporan_keuangan.name ? laporan_keuangan.name : ''}`
                  : 'Unggah'}
              </Text>
              <View>
                {laporan_keuangan ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={style.judul}>Dokumen Jaminan Untuk Pembeli</Text>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>Sertifikat Bagunan*</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={SertifikatBangunan}>
                {sertifikat_bangunan
                  ? `${sertifikat_bangunan.name ? sertifikat_bangunan.name : ''
                  }`
                  : 'Unggah'}
              </Text>
              <View>
                {sertifikat_bangunan ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>IMB*</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={IMB}>
                {imb ? `${imb.name ? imb.name : ''}` : 'Unggah'}
              </Text>
              <View>
                {imb ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.containerView}>
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={style.subjudul}>PBB*</Text>
            </View>
            <View>
              <Text style={style.textFormat}>
                Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
              <Text style={style.textUnggah} onPress={PBB}>
                {pbb ? `${pbb.name ? pbb.name : ''}` : 'Unggah'}
              </Text>
              <View>
                {pbb ? (
                  <Image
                    source={require('../../Image/DeleteIcon.png')}
                    style={{
                      width: 20,
                      left: 1,
                      bottom: 13,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text>
            Data yang Anda berikan akan tersimpan dan terlindungi dengan aman
            didalam sistem Bank Muamalat.
          </Text>
        </View>

        <View style={style.containerBtnLjt}>
          {/* <View style={{flexDirection: 'column'}}> */}
          <TouchableOpacity style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#500878' }}>
              Simpan Dokumen
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
              onPress={() => navigation.navigate('RingkasanDokumen')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
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
    marginVertical: 20,
  },
  subjudul: {
    fontSize: 20,
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
    borderWidth: 1,
    borderRadius: 9,
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
  textLama: {
    // justifyContent: 'center',
    padding: 14,
    // borderWidth: 1,
    backgroundColor: '#e3e3e3',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputLama: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 120,
    // marginRight: 50,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textUnggah: {
    color: '#500878',
  },
  containerView: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#cccccc',
  },
  textFormat: {
    color: 'grey',
  },
  containerBtnLjt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
export default UploadDocument;
