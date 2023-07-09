import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants';
import ModalCurrency from './Modal';

export default function Header() {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.header}>
            <Pressable style={styles.buttonBack}>
                <Text style={styles.textBack}>←</Text>
            </Pressable>
            <Text style={styles.title}>Solicitar Pago</Text>
            <Pressable style={styles.buttonPayment} onPress={() => setModalVisible(!isModalVisible)}>
                <Text style={styles.textPayment}>Eur ↓</Text>
            </Pressable>
            <ModalCurrency isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonPayment: {
        marginRight: '6%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: COLORS.lightgray,
    },
    textPayment: {
        fontSize: 15,
        lineHeight: 15,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    buttonBack: {
        marginLeft: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 25,
        backgroundColor: COLORS.lightgray,
    },
    textBack: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    header: {
        flexDirection: 'row',
        marginTop: "20%",
    },
    title: {
        flex: 1,
        color: COLORS.text,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    }
});