
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, ScrollView,Button, Image } from 'react-native';
import { FontAwesome5,MaterialIcons,Feather, Entypo } from '@expo/vector-icons'; 
import {useState} from 'react';
import Contact from './Customer';



export default function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <View style={styles.container}>
      < View style={styles.seContainer}>
      <View style={styles.Con}>
        <View style={styles.homebar}>
          <TouchableOpacity>
         <MaterialIcons name="payments" size={30} color="white" style={{marginStart:9, backgroundColor:"rgb(255, 208, 42)",borderRadius:7 }} />
         </TouchableOpacity>
         <TouchableOpacity>
        <MaterialIcons name="delivery-dining" size={30} color="white" style={{marginStart:48, backgroundColor:"rgb(189, 189, 189)",borderRadius:8}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name="location-pin" size={30} color="white" style={{marginStart:48, backgroundColor:"rgb(189, 189, 189)",borderRadius:8}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons name="favorite" size={30} color="white" style={{marginStart:48, backgroundColor:"rgb(189, 189, 189)",borderRadius:8}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather name="more-vertical" size={30} color="white"  style={{marginStart:48, backgroundColor:"rgb(189, 189, 189)",borderRadius:8}}/>
        </TouchableOpacity>
        </View>
        <Text style={{fontSize: 24, marginTop:35 , color:'rgb(255, 208, 42)'}}>The total Price is {totalPrice}</Text>
        </View>

      < ScrollView>
      <Contact name="Bread,eggs & tea or juice" price ={15} totalPrice={totalPrice} setTotalPrice={setTotalPrice} Image source={require('./assets/Egg.jpg')} />
      <Contact name="Bread,eggs,vegetables,cheese & juice"price ={18} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      <Contact name="Bread, eggs, bacon, vegetables & juice" price ={25} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      <Contact name="Rice, vegetables and pork " price ={18} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      <Contact name="Rice, vegetables and beef " price ={25} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      <Contact name="Rice, vegetables and chicken " price ={28} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      <Contact name="papa, vegetables beef" price ={30} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      <Contact name="papa, vegetables pork"  price ={38} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      <Contact name="papa, vegetables chicken" price ={40} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
 
      </ScrollView>
      
      <StatusBar style="auto" />
      </View>
       <View style={[styles.searchbar, styles.elvation]}>
       <TouchableOpacity>
         <FontAwesome5 name="search" size={20} color="white" style={{marginStart:8,marginTop:8}} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={{marginTop:6, marginLeft:10,color: 'white', fontSize:19}}>Search Here</Text>
         </TouchableOpacity>
       </View>
       
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '113%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seContainer: {
    height: '90%',
    width: '100%',
    backgroundColor: 'white',
  },
  Con:{
    backgroundColor:'rgb(33, 33, 33)',
  },
  homebar: {
    marginTop:53,
    flexDirection: 'row',
  },
  searchbar: {
    flexDirection: 'row',
    backgroundColor:'rgb(33, 33, 33)',
    height:'22.58%',
    width:360,
    marginLeft:0,
    
  },
});