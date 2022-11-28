import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Task() {
  return (
    <View style={styles.container}>

      <View style={styles.conter}>
        <Text style={{color: '#4EA8DE'}}>Criadas</Text>
        <Text style={{color: '#8284FA'}}>Concluídas</Text>
      </View>
      
        <View style={styles.containerTask}>
        
        <Image source={require('../../assets/check.png')} style={{marginRight: 8,}} />
          <Text style={styles.taskText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          </Text>
           <Image source={require('../../assets/trash.png')}  />
      
        </View>
       
    </View>
  )
}