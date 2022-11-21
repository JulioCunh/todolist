import { StatusBar } from "react-native";
import { Task } from "./src/components/Task";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
      <Task/>
    </>
    
  )
}