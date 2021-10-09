import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function PengajuanBerhasil(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={{marginTop: 100}}>
          <Text style={styles.text}>Alhamdulillah</Text>
        </View>
        <View>
          <Image
            source={require('../../Image/gambar_berhasil.png')}
            resizeMode="contain"
            style={{marginVertical: 100}}></Image>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>Pengajuan Kamu</Text>
          <Text style={styles.textBold}>Berhasil</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('LandingPage')}>
            {' '}
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLanjut}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('LandingPage')}>
            Lihat Pengajuan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#500878',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 25,
    color: 'white',
    padding: 20,
  },
  textBold: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  containerBody: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnLanjut: {
    // paddingLeft: 50
    borderRadius: 9,
    // padding: 10,
    alignItems: 'center',
    backgroundColor: '#70AD47',
    justifyContent: 'center',
    // marginRight: -200,
  },
});

export default PengajuanBerhasil;
