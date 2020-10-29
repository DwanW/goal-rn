import React,{useState} from 'react';

import { View, TextInput, StyleSheet, Button } from 'react-native';

const HeaderInput = ({onPress}) => {
    const [userInput, setInput] = useState('');

    const onInputChange = (value) => {
        setInput(value)
    }
    
    return (
    <View style={styles.header}>
        <TextInput
            placeholder="Enter Description Here"
            style={styles.input}
            onChangeText={onInputChange}
            value={userInput}
        />
        <View style={styles.headerButton}>
            <Button
                title="+"
                onPress={() => onPress(userInput)}
            />
        </View>
    </View>
)}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    input: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: "80%"
    },
    headerButton: {
        width: "18%",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 5
    },
})

export default HeaderInput;