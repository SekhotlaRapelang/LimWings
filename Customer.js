import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import {useState} from 'react'

export default function Contact({name, totalPrice, setTotalPrice,price, background, profile }) {
  const [iterms, setIterms] = useState(0);
  const initialPrice = price;

  function AddIterms(){
    setIterms(iterms + 1)
    price += initialPrice;
    setTotalPrice(totalPrice + initialPrice)
    }
    function CancelIterms(){
      setIterms(iterms - 1)
      price -= initialPrice;
      setTotalPrice(totalPrice - initialPrice)
    }
  return (
    <>
    <View style={styles.contact}>
    < View style={[styles.secondC,  styles.elvation]}>
    
     <ImageBackground 
       source={background}
       style={{height:'98.5%',width:'98.5%',marginTop:5, marginStart:5}}>
       <Text style={styles.name}>{name}</Text>
      <Image style={styles.image} source={profile} />
      <View style={styles.details}>
         
         <Text style={{color: 'white'}}>Price: M{price}</Text>
         <Text style={{color: 'white'}}>Iterms: {iterms}</Text>
         <View style={styles.Buttons}>
         <View style={[styles.Button1, styles.elvation]}>
         <Button title="MakeOder" color={'rgb(33, 33, 33)'}  onPress={AddIterms} />
         </View>
         <View style={[styles.Button2, styles.elvation]}>
         <Button title="CancelOder" color={'rgb(33, 33, 33)'} onPress={CancelIterms} />
         </View>
         </View>
      </View>
     </ImageBackground>
     
     </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    contact: {
        flex:1,
        flexDirection: 'row',
        borderColor: 'rgb(189, 189, 189)',
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      secondC:{
        height: '90%',
        width: '98%',
        marginTop: 25,
        backgroundColor: 'white',
       
      },
     /* Each: {
        
        width: '98%',
        marginTop: 1,
       // backgroundColor: 'white',
        
      },*/
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
        elevation:10,
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
        marginTop:0,
       },
       Button2:{
         marginTop:0,
         marginLeft:126,
       },
})