import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, TouchableOpacity, Linking, FlatList } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { fetchRotinas } from './Api';


const rotina1 =[
{    nome: 'Rotina de Pele Mista',
    passo1: '1. Limpeza: Use um gel de limpeza suave, equilibrante para pele mista.',
    passo2: '2. Tônico equilibrante: Ajuda a controlar a oleosidade da zona T e hidratar as áreas secas.',
    passo3: '3. Sérum com vitamina C ou niacinamida: Uniformiza o tom e controla a oleosidade.',
    passo4: '4. Hidratante leve, oil-free nas áreas oleosas e mais cremoso nas secas.',
    passo5: '5. Protetor solar FPS 50 (oil-free ou fórmula balanceada).'
  },
  {
    nome: 'Refrescância e Equilíbrio',
    passo1: '1. Água micelar ou lenço de limpeza facial: Remove oleosidade e impurezas.',
    passo2: '2. Spray facial (água termal ou bruma hidratante): Para refrescar e manter a hidratação.',
    passo3: '3. Reaplicação do protetor solar balanceado para pele mista.'
  },
  {
    nome: 'Limpeza e Tratamento',
    passo1: '1. Demaquilante (se necessário): Remova maquiagem e impurezas.',
    passo2: '2. Gel ou espuma de limpeza suave: Limpa sem ressecar.',
    passo3: '3. Esfoliação leve (1-2x por semana): Para renovar a pele.',
    passo4: '4. Tônico equilibrante: Controla a oleosidade e hidrata.',
    passo5: '5. Sérum com ácido glicólico ou retinol leve: Renovação celular.',
    passo6: '6. Hidratante noturno mais nutritivo nas áreas secas e leve nas oleosas.'
  }
]




export default function Tela2() {
const item = rotina1[0];
const item2 = rotina1[1];
const item3 = rotina1[2];
  return (
<ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 15 }}>
      <View style={estilo.container}>
        <View style={estilo.Card4}>
          <Image style={estilo.ImagemEditada}

            source={require('../PastaFotos/LogoEditada.png')}
          />
        </View>
        <View>
          <Image style={estilo.ImagemEditada2} source={require('../PastaFotos/user.jpg')} />
          <View>
            <Text style={estilo.TextoEditado4}>
              Usuario</Text></View>
        </View>

        <View style={estilo.Card}>
          <Text style={estilo.TextoEditado}>
{item.nome}
          </Text>
        </View>

<View style={estilo.Card}>
          <Text style={estilo.TextoEditado}>
Manhã
          </Text>
        </View>

      <View style={{ backgroundColor: '#AECBEB', height: '28%', width: '94%', borderRadius: 5, marginTop: 40 }}>
  <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop:20, marginLeft:30, marginRight:30 }}>
    {item.passo1 + '\n\n' +
     item.passo2 + '\n\n' +
     item.passo3 + '\n\n' +
     item.passo4 + '\n\n' +
     item.passo5}
  </Text>
</View>



<View style={estilo.Card}>
          <Text style={estilo.TextoEditado}>
Tarde
          </Text>
        </View>

      <View style={{ backgroundColor: '#AECBEB', height: '20%', width: '94%', borderRadius: 5, marginTop: 40 }}>
  <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop:25, marginLeft:30, marginRight:30 }}>
    {item2.passo1 + '\n\n' +
     item2.passo2 + '\n\n' +
     item2.passo3}
  </Text>
</View>



<View style={estilo.Card}>
          <Text style={estilo.TextoEditado}>
Noite
          </Text>
        </View>

      <View style={{ backgroundColor: '#AECBEB', width: '94%', borderRadius: 5, marginTop: 40, paddingBottom: 100, height:'35%' }}>
  <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop:25, marginLeft:30, marginRight:30 }}>
    {item3.passo1 + '\n\n' +
     item3.passo2 + '\n\n' +
     item3.passo3 + '\n\n' +
     item3.passo4 + '\n\n' +
     item3.passo5 + '\n\n' + item3.passo6}
  </Text>
</View>

<View style={{ backgroundColor: '#AECBEB', width: '95%', borderRadius: 3, marginTop: 40, marginBottom: 70 }}>

</View>

      </View>
</ScrollView>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EBF4FE',
  },
  Card: {
    backgroundColor: '#AECBEB',
    height: 50,
    width: '75%',
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 3
  },
  Card2: {
    backgroundColor: '#AECBEB',
    borderRadius: 15,
    marginTop: 35,
    height: 110,
    width: '90%',
    marginLeft: -10
  },
  Card4: {
    backgroundColor: '#AECBEB',
    width: '95%',
    height: 60,
    marginTop: 50,
    borderRadius: 5,
    justifyContent: 'center'
  },
  Card5: {
    backgroundColor: 'rgb(160, 188, 224)',
    height: 100,
    width: '95%',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 2,
  },
  TextoEditado: {
   fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 7
  },
  TextoEditado2: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14
  },
  TextoEditado3: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 3
  },
  TextoEditado4: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: -40,
    marginLeft: 170
  },
  TextoEditado5: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TextoEditado5e1: {
    fontSize: 13,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight: 60
  },
  TextoEditado6: {
    fontSize: 13,
    marginTop: 7,
    padding: 5,
  },
  TextoEditado6e1: {
    fontSize: 13,
    marginTop: 7,
    padding: 5,
    textAlign: 'right',
    marginRight: '5'
  },
  TextoEditado7: {
    fontSize: 13,
    padding: 5,
    marginTop: -10
  },
  TextoEditado8: {
    fontSize: 13,
    padding: 5,
    marginTop: -10,
    textAlign: 'right',
    marginRight: '15'
  },
  ImagemEditada: {
    height: 50,
    width: 215,
  },
  ImagemEditada2: {
    alignSelf: 'flex-end',
    marginTop: -53,
    marginRight: -55,
    borderRadius: 30
  },
  ImagemEditada3: {
    alignSelf: 'flex-end',
    marginTop: -89,
    marginRight: -15,
    height: 115,
    width: 110,
  },
  ImagemEditada3e1: {
    alignSelf: 'flex-end',
    marginTop: -75,
    marginRight: -15,
    height: 115,
    width: 110,
    borderRadius: 20
  },
  ImagemEditada4: {
    alignSelf: 'flex-start',
    marginTop: -89,
    marginRight: -15,
    height: 115,
    width: 110,

  },
  ImagemEditada5: {
    alignSelf: 'flex-start',
    marginTop: -89,
    marginLeft: -15,
    height: 115,
    width: 110,
    borderRadius: 10
  }
});