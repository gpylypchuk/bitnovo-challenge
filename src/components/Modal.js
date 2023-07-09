import React from "react";
import { Modal, Text, View, StyleSheet } from "react-native";

export default function ModalCurrency({ isModalVisible, setModalVisible }) {
    return (
        <>
            <Modal visible={isModalVisible}>
                <View>
                    <Text>Modal</Text>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({

});
