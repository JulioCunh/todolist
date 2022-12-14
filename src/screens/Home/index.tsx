import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../../components/Task";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');

  function AddTask() {
   /* if (tasks.includes(taskName)) {
      return Alert.alert('Participante existe', 'Já existe um participante com esse nome');
    }*/

    setTasks(prevState => [...prevState, taskName])
    setTaskName('');
  }

  function taskRemove(title: string) {
    Alert.alert('Remover', `Remover o participante ${title}?`, [
      {
        text: 'sim',
        onPress: () => setTasks(prevState => prevState.filter(tasks => tasks !== title)),
        },
        {
          text: 'não',
          style: 'cancel'
        }
      
    ])
  }

  return (
    <View style={styles.containerApp}>
    <View style={styles.container}>
      <Image source={require('../../../src/assets/Logo.png')} style={styles.logo} />
      </View> 
    
    

    <View style={styles.input}>
    <TextInput
        style={styles.inputText}
        placeholder="Nome do participante"
        placeholderTextColor="#808080"
        onChangeText={setTaskName}
        value={taskName}

      />

    < TouchableOpacity style={styles.button} onPress={AddTask}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    </View>
    
    <FlatList 
    data={tasks}
    keyExtractor={item => item}
    renderItem={({ item }) => (
      <Task
      key={item}
      title={item}
      onRemove={() => taskRemove(item)}
    />
    )}
    showsVerticalScrollIndicator={false}

    />
    </View> 
  )
}