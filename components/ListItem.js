import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({text, onDelete}) => (
    <TouchableOpacity onPress={onDelete}>
        <View style={styles.listItem}>
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginBottom:9,
        borderRadius:10,
        backgroundColor : "#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
      }
})

export default ListItem;