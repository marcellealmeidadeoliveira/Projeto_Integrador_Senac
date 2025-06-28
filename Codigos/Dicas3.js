import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Dicas3() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <View style={estilo.Card4}>
          <Image style={estilo.ImagemEditada} 
            source={require('../PastaFotos/LogoEditada.png')} 
          />
        </View>
        <View>
          <Image style={estilo.ImagemEditada2} source={require('../PastaFotos/user.jpg')} />
          <View>
            <Text style={estilo.TextoEditado4}>Usuário</Text>
          </View>
        </View>

        <View style={estilo.Card}>
          <Text style={estilo.TextoEditado}>
            Entenda mais sobre sua pele Mista!
          </Text>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
            Lave o rosto com sabonete
          </Text>
          <Text style={estilo.TextoEditado6}>
            Use produtos que limpam sem ressecar.
          </Text>
          <Text style={estilo.TextoEditado7}>
            Prefira fórmulas que controlam a oleosidade
          </Text>
          <Text style={estilo.TextoEditado7}>
            sem agredir a pele seca.
          </Text>
          <View>
            <Image style={estilo.ImagemEditada3} source={require('../PastaFotos/icon1.png')} />
          </View>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5e1}>
            Hidrate áreas secas
          </Text>
          <Text style={estilo.TextoEditado6e1}>
            Aplique hidratantes nas bochechas
          </Text>
          <Text style={estilo.TextoEditado8}>
            e produtos leves na zona T
          </Text>
          <Text style={estilo.TextoEditado8}>
            (testa, nariz e queixo).
          </Text>
          <View>
            <Image style={estilo.ImagemEditada5} source={require('../PastaFotos/icon3.png')} />
          </View>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
            Use protetor solar em gel-creme
          </Text>
          <Text style={estilo.TextoEditado6}>
            Proteja a pele sem aumentar a oleosidade.
          </Text>
          <Text style={estilo.TextoEditado7}>
            Prefira protetores oil-free e toque seco.
          </Text>
          <View>
            <Image style={estilo.ImagemEditada3e1} source={require('../PastaFotos/icon2.png')} />
          </View>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5e1}>
            Controle o brilho da zona T
          </Text>
          <Text style={estilo.TextoEditado6e1}>
            Use lencinhos antibrilho ou
          </Text>
          <Text style={estilo.TextoEditado8}>
            pós compactos na região central
          </Text>
          <Text style={estilo.TextoEditado8}>
            do rosto ao longo do dia.
          </Text>
          <View>
            <Image style={estilo.ImagemEditada5} source={require('../PastaFotos/icon5.png')} />
          </View>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
            Esfolie as áreas oleosas
          </Text>
          <Text style={estilo.TextoEditado6}>
            1 vez por semana, com produto suave.
          </Text>
          <Text style={estilo.TextoEditado7}>
            Ajuda a remover impurezas e controlar
          </Text>
          <Text style={estilo.TextoEditado7}>
            os cravos e oleosidade.
          </Text>
          <View>
            <Image style={estilo.ImagemEditada3} source={require('../PastaFotos/icon4.png')} />
          </View>
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
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14,

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
    marginRight: 60,
    marginTop: 5
    
  },
  TextoEditado5e1: {
    fontSize: 13,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight:60
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
   textAlign:'right',
       marginRight:'5'
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
    marginRight:'15'
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
    marginTop: -85,
    marginRight: -2,
    height: 90,
    width: 100,
    borderRadius:30
  },
  ImagemEditada3e1: {
    alignSelf: 'flex-end',
    marginTop: -60,
    height: 90,
    width: 110,
borderRadius:30,

  },
  ImagemEditada4: {
    alignSelf: 'flex-start',
    marginTop: -89,
    marginRight: -15,
    height: 90,
    width: 110,

  },
  ImagemEditada5: {
    alignSelf: 'flex-start',
    marginTop: -80,
    marginLeft: 6,
    height: 90,
    width: 100,
  borderRadius:30
  }
});
