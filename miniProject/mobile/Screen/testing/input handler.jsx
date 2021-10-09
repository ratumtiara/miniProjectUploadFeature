// import React, { Component } from 'react';
// import {
//   TextField,
//   FilledTextField,
//   OutlinedTextField,
// } from 'react-native-material-textfield';

// class Example extends Component {
//   fieldRef = React.createRef();

//   onSubmit = () => {
//     let { current: field } = this.fieldRef;

//     console.log(field.value());
//   };

//   formatText = (text) => {
//     return text.replace(/[^+\d]/g, '');
//   };

//   render() {
//     return (
//       <OutlinedTextField
//         label='Phone number'
//         keyboardType='phone-pad'
//         formatText={this.formatText}
//         onSubmitEditing={this.onSubmit}
//         ref={this.fieldRef}
//       />
//     );
//   }
// }


import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Home = () => {
  const [input, setInput] = useState('');



  return (
    <View style={styles.container}>
      <TextInput
        // onFocus={backgroundColor= "grey"}
        style={{height: 40}}
        placeholder="Type here!"
        autoFocus={true}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
