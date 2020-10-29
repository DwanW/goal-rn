import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import ListItem from './components/ListItem';
import HeaderInput from './components/HeaderInput';

export default function App() {
  const [userList, setUserList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const generateUniqueID = () => Date.now().toString(36) + Math.random().toString(36).substring(2)

  const addNewTask = (userInput) => {
    setUserList([...userList, { key: generateUniqueID(), value: userInput}]);
    setIsModalOpen(false);
  }

  const onDelete = (key) => {
    let newList = userList.filter((item) => item.key !== key);
    setUserList(newList);
  } 
  
  const onCancel = () => {
    setIsModalOpen(false);
  }
  return (
    <View style={styles.root}>
      <Button title="ADD" onPress={() => setIsModalOpen(true)} />
      <HeaderInput
        onPress={addNewTask}
        isModalOpen={isModalOpen}
        onCancel={onCancel}
      />
      <FlatList 
        data={userList}
        style={styles.userList}
        renderItem={({item}) => (
          <ListItem 
            text={item.value}
            onDelete={() => onDelete(item.key)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    paddingTop: 50
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth:1,
    padding: 10,
    marginBottom: 20,
    width: "80%"
  },
  headerButton: {
    width:"18%",
    borderRadius:8,
    overflow: "hidden",
    marginBottom: 5
  },
  userList: {
    padding: 0
  }
});
