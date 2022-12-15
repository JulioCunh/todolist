import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
  title: string;
  onRemove: () => void;
}

export function Task({ title, onRemove}: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.conter}>
        <Text style={{color: '#4EA8DE'}}>Criadas</Text>
        <Text style={{color: '#8284FA'}}>Concluídas</Text>
      </View>
      
        <View style={styles.containerTask}>
        <TouchableOpacity>
        <Image source={require('../../assets/check.png')} style={{marginRight: 8,}} />
        </TouchableOpacity>
          <Text style={styles.taskText}>
            {title}
          </Text>
          <TouchableOpacity onPress={onRemove}>
           <Image source={require('../../assets/trash.png')}  />
           </TouchableOpacity>
      
        </View>
       
    </View>
  )
}