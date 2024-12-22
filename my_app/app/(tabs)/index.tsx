import { Text, View , Image, StyleSheet} from "react-native";

export default function Index() {
return (
<View
style={{
flex: 1,
justifyContent: "center",
alignItems: "center",
}}
>
<Text style={styles.text}>Hello world</Text>
<Image source={require('../../assets/images/react-logo.png')}style={styles.logo}/>

</View>
);
}
const styles = StyleSheet.create({
  logo:{
    width:100,
    height:100,
    borderStyle:"solid",
    borderWidth:2,
    borderColor:"blue"
  },
  text:{
      color:"red",
      fontSize:36
  }
})