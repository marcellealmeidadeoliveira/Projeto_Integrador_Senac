import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, TouchableOpacity, Linking } from 'react-native';
import { fetchCliente} from '../Codigos/Api';

export default function Home({navigation}) {
  const [registro, setRegistros] = useState([]);

  useEffect(() => {
    fetchCliente(setRegistros);
  }, []);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={estilo.container}>
      <View style={estilo.Card4}>
        <Image style={estilo.ImagemEditada} 
        source={require('../PastaFotos/LogoEditada.png')}/>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Usuario')}>
      <Image style={estilo.ImagemEditada2} source={require('../PastaFotos/user.jpg')}/>
      <View>
        <Text style={estilo.TextoEditado4}>
          Usuario</Text>     </View>
          </TouchableOpacity>
      </View>
      <View style={estilo.Card}>
      <Image style={estilo.ImagemEditada3} source={require('../PastaFotos/LogoEditada.png')}/>
      <Text style={estilo.TextoEditado5}>A melhor escolha para seu rosto e sua pele!</Text>
      </View>
      <View>
        <Text style={estilo.TextoEditado}>
          SkinCare
        </Text>
      </View>
      <View style={estilo.Card2}>
        <TouchableOpacity onPress={()=>navigation.navigate('Quiz')}>
        <Text style={estilo.TextoEditado2}>
          Rotina especial para VOCÊ</Text>
          </TouchableOpacity>
      </View>

      <View style={estilo.Card3}>
        <TouchableOpacity onPress={()=>navigation.navigate('Dicas')}>
        <Text style={estilo.TextoEditado3}>
          Entenda sobre pele SECA</Text>
</TouchableOpacity>
      </View>
  

      <View style={estilo.Card3}>
           <TouchableOpacity onPress={()=>navigation.navigate('Dicas2')}>
        <Text style={estilo.TextoEditado3}>
        Entenda sobre pele OLEOSA</Text>
</TouchableOpacity>
      </View>
      <View style={estilo.Card3}>
         <TouchableOpacity onPress={()=>navigation.navigate('Dicas3')}>
        <Text style={estilo.TextoEditado3}>
        Entenda sobre pele MISTA</Text>
        </TouchableOpacity>
      </View>
   
    </View>
    </ScrollView>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#EBF4FE',
  },
  Card: {
    backgroundColor: '#AECBEB',
    width: '90%',
    height: 150,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  Card2: {
    backgroundColor:'#AECBEB',
    width: '90%',
    height: 80,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 15,
    borderColor:'#8eaed4',
    borderLeftWidth:15,
    borderRightWidth:15,
    borderTopWidth:15,
    borderBottomWidth:15,
    marginBottom:20
  },
  Card3: {
    backgroundColor:'#a1c0e3',
    width: '80%',
    height: 70,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    borderColor:'#AECBEB',
    borderLeftWidth:15,
    borderRightWidth:15,
    borderTopWidth:15,
    borderBottomWidth:15
  },
  Card4: {
    backgroundColor: '#AECBEB',
    width: '90%',
    height: 60,
    marginTop: 50,
    borderRadius: 5,
    justifyContent: 'center'
  },
  TextoEditado: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  TextoEditado2: {
    marginTop: 14,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  TextoEditado3: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  TextoEditado4: {
    fontSize: 18,
    textAlign: 'center',
    color:'white',
    fontWeight:'bold',
    marginTop:-40,
    marginLeft:170
  },
  TextoEditado5: {
fontSize:15,
color:'white',
fontWeight:'bold'
  },
  ImagemEditada:{
    height: 50,
    width: 215,
  },
  ImagemEditada2:{
    alignSelf:'flex-end',
    marginTop:-53,
    marginRight:-55,
    borderRadius:30
  },
  ImagemEditada3:{
    height: 60,
    width: 270,
marginTop:30
  },
});
 
