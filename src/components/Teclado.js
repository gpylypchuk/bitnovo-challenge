import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../../constants';
import Context from '../context/Context';

export default function Teclado() {
    const { context, setContext } = React.useContext(Context);
    
    const amountToPay = (amount) => {
        setContext({
            ...context,
            amount: context.amount + amount,
        });
    };

    const deleteLastDigit = () => {
        setContext({
            ...context,
            amount: context.amount.slice(0, -1),
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Pressable style={styles.button} onPress={() => amountToPay(1)}>
                    <Text style={styles.text}>1</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => amountToPay(2)}>
                    <Text style={styles.text}>2</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => amountToPay(3)}>
                    <Text style={styles.text}>3</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button} onPress={() => amountToPay(4)}>
                    <Text style={styles.text}>4</Text>
                </Pressable>
                <Pressable style={styles.button}onPress={() => amountToPay(5)}>
                    <Text style={styles.text}>5</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => amountToPay(6)}>
                    <Text style={styles.text}>6</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button} onPress={() => amountToPay(7)}>
                    <Text style={styles.text}>7</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => amountToPay(8)}>
                    <Text style={styles.text}>8</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => amountToPay(9)}>
                    <Text style={styles.text}>9</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button}onPress={() => amountToPay('.')}>
                    <Text style={styles.text}>.</Text>
                </Pressable>
                <Pressable style={styles.button}onPress={() => amountToPay(0)}>
                    <Text style={styles.text}>0</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => deleteLastDigit()}>
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
});