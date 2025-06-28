import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
      if (initializing) setInitializing(false);
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    if (user) {
      navigation.navigate('Home');
    }
  }, [user]);

  const abrirGoogle = () => {
    Linking.openURL('https://www.google.com/intl/pt-BR/account/about/');
  };

  const entrar = () => {
  if (!email || !senha) {
    alert('Por favor, preencha email e senha');
    return;
  }

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
  
      navigation.navigate('Home');
    })
    .catch((error) => {
      alert('Erro no login: ' + error.message);
    });
};

  if (initializing) return null; 

  return (
    <View style={estilo.container}>
      <View style={estilo.FundoLogo}>
        <Image style={estilo.imagemEditada} source={require('../PastaFotos/LogoEditada.png')} />
      </View>
      <View style={estilo.Card}>
        <Text style={estilo.TextoEditado}>Faça Login para Começar</Text>
      </View>

      <View style={estilo.Card2}>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          style={{ padding: 10 }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={estilo.Card2}>
        <TextInput
          placeholder='Senha'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={{ padding: 10 }}
        />
      </View>

      <TouchableOpacity style={estilo.Card3} onPress={entrar}>
        <Text style={estilo.TextoEditado3}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CriarConta')}>
        <Text style={estilo.TextoEditado4}>Ainda não possui um login? Crie aqui!</Text>
      </TouchableOpacity>

      <Text style={estilo.TextoEditado6}>Ou, entre com</Text>

      <TouchableOpacity onPress={abrirGoogle}>
        <Image style={estilo.imagemEditada2} source={require('../PastaFotos/icon.png')} />
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EBF4FE',
  },
  FundoLogo: {
    backgroundColor: '#AECBEB',
    width: '90%',
    height: 60,
    marginTop: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  Card: {
    width: 380,
    marginTop: 90,
    borderRadius: 10,
  },
  Card2: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    marginTop: 30,
  },
  Card3: {
    backgroundColor: '#8AB4E3',
    borderRadius: 5,
    height: 40,
    width: '80%',
    marginTop: 5,
    justifyContent: 'center',
  },
  TextoEditado: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  TextoEditado3: {
    fontSize: 20,
    margin: 7,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  TextoEditado4: {
    fontSize: 13,
    marginTop: 5,
    padding: 10,
    textAlign: 'center',
  },
  TextoEditado6: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
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
});
