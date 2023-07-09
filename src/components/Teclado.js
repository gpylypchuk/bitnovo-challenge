import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../../constants';

export default function Teclado() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>1</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>2</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>3</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>4</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>5</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>6</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>7</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>8</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>9</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>💸</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>0</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>⬅</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        width: 100,
        height: 50,
    },
    text: {
        fontSize: 25,
        lineHeight: 39,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        marginTop: "60%",
    },
});