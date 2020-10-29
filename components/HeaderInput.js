import React, { useState } from 'react';

import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const HeaderInput = ({ onPress, isModalOpen, onCancel }) => {
    const [userInput, setInput] = useState('');

    const onInputChange = (value) => {
        setInput(value)
    }

    return (
        <Modal visible={isModalOpen} animationType="slide">
            <View style={styles.header}>
                <TextInput
                    placeholder="Enter Description Here"
                    style={styles.input}
                    onChangeText={onInputChange}
                    value={userInput}
                />
                <View style={styles.headerButton}>
                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            onPress={() => { onPress(userInput); setInput("") }}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="gray"
                            onPress={() => onCancel()}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    },
    input: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: "80%"
    },
    headerButton: {
        width: "40%",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 5
    },
    button: {
        width: "50%"
    }
})

export default HeaderInput;