// lg nyoba
import { isTSConstructSignatureDeclaration } from '@babel/types';
import React from 'react';
// import Stepper from 'react-native-stepper-ui';
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

import Markdown from 'react-native-easy-markdown';

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

function profil(props) {
  const { navigation } = props;
  return (
    <View>
      <View>
        <Text>Status Pengajuan KPR</Text>
      </View>
      <View>
        <Image
          source={require('../../Image/iconCard.png')}
        //   style={styles.imgCard}
        />
        <View>
          <Text>Kamu belum mengajukan KPR.</Text>
          <Text>Yuk, Wujudkan rumah idamanmu bersama Bank Muamalat.</Text>
        </View>
      </View>

      <View>
        <Image
          source={require('../../Image/iconCard.png')}
        //   style={styles.imgCard}
        />
        <View>
          <Text>Kamu belum mengajukan KPR.</Text>
          <Text>Yuk, Wujudkan rumah idamanmu bersama Bank Muamalat.</Text>
        </View>
      </View>

      <View>
        <Image
          source={require('../../Image/iconCard.png')}
        //   style={styles.imgCard}
        />
        <View>
          <Text>Kamu belum mengajukan KPR.</Text>
          <Text>Yuk, Wujudkan rumah idamanmu bersama Bank Muamalat.</Text>
        </View>
      </View>

      <View>
        <Image
          source={require('../../Image/iconCard.png')}
        //   style={styles.imgCard}
        />
        <View>
          <Text>Kamu belum mengajukan KPR.</Text>
          <Text>Yuk, Wujudkan rumah idamanmu bersama Bank Muamalat.</Text>
        </View>
      </View>
    </View>
  );
}

export default profil;
