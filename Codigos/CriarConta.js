import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { auth } from '../Firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function CriarConta({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Link = () => {
    Linking.openURL('https://www.google.com/intl/pt-BR/account/about/');
  };

  function cadastrar() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha email e senha corretamente.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        Alert.alert('Atenção', 'Dados cadastrados com sucesso. Faça Login.');
        navigation.navigate('Login', { email });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          Alert.alert('Atenção', 'Este e-mail já tem cadastro.');
        } else if (errorCode === 'auth/weak-password') {
          Alert.alert('Senha', 'Deve ter no mínimo 6 caracteres.');
        } else if (errorCode === 'auth/invalid-email') {
          Alert.alert('E-mail', 'Este e-mail é inválido.');
        } else {
          Alert.alert('Erro', error.message);
        }
      });
  }

  return (
    <View style={estilo.Alinhar}>
      <View style={estilo.FundoLogo}>
        <View>
          <Image style={estilo.imagemEditada} source={require('../PastaFotos/LogoEditada.png')} />
        </View>
      </View>
      <View style={estilo.Alinhar2}>
        <View>
          <Text style={estilo.TextoEditado3}>Crie a sua conta</Text>
          <Text style={estilo.TextoEditado4}>Inscreva-se para começar</Text>
        </View>
      
        <View style={estilo.CorBotao}>
          <TextInput
            placeholder='Digite seu Email.'
            style={estilo.TextoEditado}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={estilo.CorBotao}>
          <TextInput
            placeholder='Senha'
            style={estilo.TextoEditado}
            onChangeText={setSenha}
            value={senha}
            secureTextEntry
          />
          <View style={estilo.CorBotao2}>
            <TouchableOpacity onPress={cadastrar}>
              <Text style={estilo.TextoEditado2}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={estilo.Alinhar3}>
        <Text style={estilo.TextoEditado5}> Não possui conta? Entre com o Google</Text>
      </View>
      <TouchableOpacity onPress={Link}>
        <Image style={estilo.imagemEditada2} source={require('../PastaFotos/icon.png')} />
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  Alinhar: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EBF4FE',
  },
  Alinhar2: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Alinhar3: {
    justifyContent: 'center',
  },
  CorBotao: {
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 5,
    marginBottom: 25,
  },
  CorBotao2: {
    backgroundColor: '#8AB4E3',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginBottom: 25,
    justifyContent: 'center',
    marginTop: 35,
  },
  FundoLogo: {
    backgroundColor: '#AECBEB',
    width: '90%',
    height: 60,
    marginTop: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  TextoEditado: {
    fontSize: 13,
    padding: 2,
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 5,
    opacity: 0.5,
    color: 'black',
    fontWeight: 'bold',
  },
  TextoEditado2: {
    fontSize: 15,
    padding: 2,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  TextoEditado3: {
    fontSize: 15,
    padding: 2,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  TextoEditado4: {
    fontSize: 13,
    padding: 2,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  TextoEditado5: {
    fontSize: 13,
    marginTop: 60,
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  TextoEditado6: {
    fontSize: 13,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: -10,
  },
  imagemEditada: {
    height: 59,
    width: 253,
    marginLeft: 50,
  },
  imagemEditada2: {
    height: 60,
    width: 60,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  fundo: {
    backgroundColor: '#EBF4FE',
  },
});
