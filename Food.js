import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import {useState} from 'react'

export default function Food({name, phoneNumber, totalPrice, setTotalPrice, image}) {
  const [price, setPrice] = useState(0);
  function makeMeOlder(){
    setPrice(price + 15)
    setTotalPrice(totalPrice + 15)
    
    
  }
  return (
    <View style={[styles.food, styles.elvation]}>
     <ImageBackground 
       source={require("./assets/lunch.webp")}
       style={{height:'98%',width:'98.5%',margin:5}}>
       <Text style={styles.name}>{name}</Text>
      <Image style={styles.image} source={require('./assets/Egg.jpg')} />
      <View style={styles.details}>
         
         <Text style={{color: 'white'}}>Price: {price}</Text>
         <Text style={{color: 'white'}}>{phoneNumber}</Text>
         <View style={styles.Buttons}>
         <View style={[styles.Button1, styles.elvation]}>
         <Button title="MakeOder" color={'rgb(33, 33, 33)'}  onPress={makeMeOlder} />
         </View>
         <View style={[styles.Button2, styles.elvation]}>
         <Button title="CancelOder" color={'rgb(33, 33, 33)'} onPress={makeMeOlder} />
         </View>
         </View>
      </View>
     </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    food: {
        marginTop: 10,
        height:'19%',
        width:'98.5%',
        marginLeft:4,
        flexDirection: 'row',
        borderColor: 'white',
       
      },
      details: {
        marginLeft: 10,
      },
      image: {
        height: 100,
        width: 100,
        marginStart:10,
        borderRadius:50
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginStart:10,
        color:'white'
      },
      elvation:{
        elevation:20,
        shadowColor:'black',
      },
      Buttons:{
        flexDirection:'row',
        marginStart:5
      },
      Button:{
        flexDirection:'row',
    
      },
      Button1:{
        marginTop:5,
       },
       Button2:{
         marginTop:5,
         marginLeft:126,
       },
})