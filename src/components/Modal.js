import React from "react";
import { Modal, Text, View, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants";

export default function ModalCurrency({ isModalVisible, setModalVisible }) {
    return (
        <>
            <Modal visible={isModalVisible} transparent={true} animationType={'slide'}>
                <View style={styles.container}>
                    <View style={styles.modalStyle}>
                        <Pressable style={styles.buttonClose} onPress={() => setModalVisible(!isModalVisible)}>
                            <Text style={styles.textClose}>✕</Text>
                        </Pressable>
                        <Text style={styles.title}>Elige una moneda</Text>
        
                        <View>
                            <Pressable style={styles.currencies}>
                                <Text style={styles.title}>EUR</Text>
                                <Text style={styles.currency}>Euro</Text>
                            </Pressable>
                            <Pressable style={styles.currencies}>
                                <Text style={styles.title}>GBP</Text>
                                <Text style={styles.currency}>Libra Esterlina</Text>
                            </Pressable>
                            <Pressable style={styles.currencies}>
                                <Text style={styles.title}>USD</Text>
                                <Text style={styles.currency}>Dolar Estadounidense</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    currency: {
        marginLeft: 'auto',
        fontSize: 20,
        lineHeight: 20,
        alignSelf: 'center',
        fontWeight: '300',
        marginLeft: 10,
        color: COLORS.textGray,
    },
    currencies: {
        flexDirection: 'row',
        marginTop: 25,
        paddingBottom: 10,
        borderColor: COLORS.lightgray,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    buttonClose: {
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 20,
        backgroundColor: COLORS.lightgray,
    },
    textClose: {
        fontSize: 15,
        lineHeight: 15,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    modalStyle: {
        marginTop: "auto",
        marginBottom: "20%",
        margin: 20,
        paddingTop: 15,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
