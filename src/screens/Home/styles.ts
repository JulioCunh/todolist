import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
  {
    containerApp: {
      flex:1,
      backgroundColor: "#1a1a1a"
    },
    container: {
      position: "absolute",
      height: 173,
      left: 0,
      right: 0,
      top: 0,
      backgroundColor: '#0d0d0d',
    },
    
    logo: {
      width: 110.34,
      height: 32,
      right: 132.33,
      left: 132.33,
      top: 70,
    },
    input: {
      flexDirection:'row',
      justifyContent: 'center',
      padding: 0,
      gap: 4,

      position: 'absolute',
      height: 54,
      left: 24,
      right: 24,
      top: 142,
    },
    inputText:{
      flexDirection:'row',
      alignItems: 'center',
      padding: 16,
      gap: 8,

      width: 271,
      height: 54,
      backgroundColor: '#262626',
      boder: '1px solid #0d0d0d',
      borderRadius: 6,

      order: 0,
      flexGrow: 1,
      color:'#f2f2f2',
      fontSize: 16,
    },
    button: {
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 18,
      gap: 8,

      width: 52,
      height: 52,
      backgroundColor: '#1E6F9F',
      borderRadius: 6,

      order: 1,
      flexGrow: 0,
      marginLeft: 4,
    },
    buttonText: {
      color: '#f2f2f2',
      fontSize: 16,
      fontWeight: 'bold',
  
    },
    

  }
)