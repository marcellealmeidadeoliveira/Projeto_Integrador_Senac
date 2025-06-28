import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Codigos/Login.js'; 
import CriarConta from '../Codigos/CriarConta.js'; 
import Home from '../Codigos/Home.js'; 
import Quiz from '../Codigos/Quiz.js';
import ResultadoQuiz from '../Codigos/ResultadoQuiz.js'

import Tela from '../Codigos/TelaSkincareOleosa.js'
import Tela2 from '../Codigos/TelaSkincareMista.js'
import Tela3 from '../Codigos/TelaSkincareSeca.js'

import Dicas from '../Codigos/Dicas.js'
import Dicas2 from '../Codigos/Dicas2.js'
import Dicas3 from '../Codigos/Dicas3.js'
import Usuario from '../Codigos/Usuario.js';  
const Stack = createStackNavigator();

function RotasTab() {
  return (
<NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
    options={{headerShown:false}} />
        <Stack.Screen name="CriarConta" component={CriarConta}
    options={{headerShown:false}} />
    <Stack.Screen name="Home" component={Home}
    options={{headerShown:false}} />
       <Stack.Screen name="Usuario" component={Usuario}
    options={{headerShown:false}} />
        <Stack.Screen name="Dicas" component={Dicas}
    options={{headerShown:false}} />
      <Stack.Screen name="Dicas2" component={Dicas2}
    options={{headerShown:false}} />
      <Stack.Screen name="Dicas3" component={Dicas3}
    options={{headerShown:false}} />
       <Stack.Screen name="Quiz" component={Quiz}
    options={{headerShown:false}} />
           <Stack.Screen name="ResultadoQuiz" component={ResultadoQuiz}
    options={{headerShown:false}} />

               <Stack.Screen name="Tela" component={Tela}
    options={{headerShown:false}} />
      <Stack.Screen name="Tela2" component={Tela2}
    options={{headerShown:false}} />

      <Stack.Screen name="Tela3" component={Tela3}
    options={{headerShown:false}} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

export default RotasTab;
