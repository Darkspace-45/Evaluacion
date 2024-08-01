import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Gráfico3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxGreen}></View>
    </View>
  )
}

//gestion estilos
const styles = StyleSheet.create({
    container:{
        //flex: 1,
        backgroundColor: '#28425B',
        marginTop: 50,
        //justifyContent: 'center',
        //alignItems: 'center',
        width: 450,
        height: 800
    },
    boxPurple:{
        backgroundColor: 'aquamarine',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        //bottom: 10
        top: 200,
        right: 0
    },
    boxOrange:{
        backgroundColor: 'orange',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        //top:130
        position: 'absolute',
        left: 0,
        top:300
    },
    boxGreen:{
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 400,
        left: 150
    }
});