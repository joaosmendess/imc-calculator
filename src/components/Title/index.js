import React from "react";
import { StyleSheet ,View, Text } from "react-native";

export default function Title () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>IMC CALCULATOR </Text>
           
        </View>
    );
}


const styles = StyleSheet.create ({
    container: {
       padding:0,
        backgroundColor: '#eaeaea',
      },
    title: {
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
},
})