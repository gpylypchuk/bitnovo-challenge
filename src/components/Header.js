import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants';
import ModalCurrency from './Modal';
import Context from '../context/Context';

export default function Header() {
    const [isModalVisible, setModalVisible] = useState(false);
    const { context, setContext } = React.useContext(Context);

    const modal = () => {
        setContext({ ...context, isModalOpen: true });
        setModalVisible(!isModalVisible);
    };

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

    return (
        <View style={styles.header}>
            <Pressable style={styles.buttonBack}>
                <Text style={styles.textBack}>←</Text>
            </Pressable>
            <Text style={styles.title}>Solicitar Pago</Text>
            <Pressable style={styles.buttonPayment} onPress={() => modal()}>
                <Text style={styles.textPayment}>{context.currency} ↓</Text>
            </Pressable>
            <ModalCurrency isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
        </View>
    );
}

