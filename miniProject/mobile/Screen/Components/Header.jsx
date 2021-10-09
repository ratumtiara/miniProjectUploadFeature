import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import React from "react";
import {StyleSheet, View, Text} from 'react-native'

const Header = () => {
    return (
      <View style={headerstyle.header}>
        <Text>Pengajuan KPR</Text>
      </View>
    );
};

const headerstyle = StyleSheet.create({
    header: {
        fontSize: 30,
        flexDirection: "column",
        alignItems: 'center'
    },
});

export default Header;