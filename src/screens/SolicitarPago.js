import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Teclado from '../components/Teclado';

export default function SolicitarPago() {
    return (
        <View>
            <Header />
            <Teclado />
        </View>
    );
}