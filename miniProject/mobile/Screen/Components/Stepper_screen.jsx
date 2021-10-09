//lg uji coba
import React, { useState } from 'react';
import {
  Button,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const status = [
  'Data Pengajuan',
  'Data Agunan',
  'Data Diri',
  'Data Pekerjaan',
  'Data Pembiayaan',
];
const activeColor = '#500878';

export default function TrackingStatus() {
  const [activeIndex, setActive] = useState(0);
  const setActiveIndex = val => {
    LayoutAnimation.easeInEaseOut();
    setActive(val);
  };
  const marginLeft = (100 / (status.length - 1)) * activeIndex - 100 + '%';
  return (
    <View style={styles.constainer}>
      <Text style={styles.prop}>{activeIndex}</Text>
      <View style={styles.statusContainer}>
        <View style={styles.line}>
          <View style={[styles.activeLine, { marginLeft }]} />
        </View>
        {status.map((status, index) => (
          <View style={[styles.dot]} key={status}>
            <View
              style={[
                index <= activeIndex
                  ? {
                    height: '100%',
                    width: '100%',
                    backgroundColor: activeColor,
                  }
                  : { backgroundColor: '#ccc' },
                { borderRadius: 50 },
              ]}>
              <Text style={{ color: 'white' }}>{index + 1}</Text>
            </View>
          </View>
        ))}
        <View style={styles.labelContainer}>
          {status.map((status, index) => (
            <Text key={status} style={styles.label}>
              {status}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.btns}>
        <Button
          title="prev"
          onPress={() => setActiveIndex(activeIndex - 1)}
          disabled={activeIndex <= 0}
        />
        <Button
          title="next"
          onPress={() => setActiveIndex(activeIndex + 1)}
          disabled={activeIndex >= status.length - 1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
  },
  dot: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#ccc',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 5,
    width: '100%',
    backgroundColor: '#ccc',
    position: 'absolute',
    borderRadius: 5,
    overflow: 'hidden',
  },
  activeLine: {
    height: '100%',
    width: '100%',
    backgroundColor: activeColor,
    borderRadius: 5,
  },
  btns: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  labelContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    top: 30,
  },
  prop: {
    marginBottom: 20,
    width: 100,
    textAlign: 'center',
  },
});
