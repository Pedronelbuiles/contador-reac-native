import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({title, position = 'br', onPress}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.5 }
                style={[styles.fabLocation, (position === 'bl' ? styles.left : styles.right)]}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {title} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[styles.fabLocation, (position === 'bl' ? styles.left : styles.right)]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('white', true, 37)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}> {title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
    fabLocation :{
        position: 'absolute',
        bottom: 25
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 6,
    },
    fabText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})