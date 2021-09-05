import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9'
    },
    caja1:{
        flex: 5, // 5 + 3 + 2 = 10 => Flex: 5 = 50% de la pantalla
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2:{
        flex: 3, // 5 + 3 + 2 = 10 => Flex: 3 = 30% de la pantalla
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3:{
        flex: 2, // 5 + 3 + 2 = 10 => Flex: 2 = 20% de la pantalla
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
})