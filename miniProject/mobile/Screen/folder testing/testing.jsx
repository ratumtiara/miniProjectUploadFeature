import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  // const [tanggal, setTanggal] = use;

  return (
    <>
      <TouchableOpacity
        style={{backgroundColor: 'grey'}}
        onPress={() => setOpen(true)}>
        <Text>hayo</Text>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          onDateChange={itemValue => setDate(itemValue)}
        />
      </TouchableOpacity>
      <Text>{itemValue}</Text>
      <TextInput
        style={{backgroundColor: 'grey'}}
        placeholder="tes"
        // onChangeText={itemValue2 => setDate(itemValue2)}
      />
    </>
  );
};
