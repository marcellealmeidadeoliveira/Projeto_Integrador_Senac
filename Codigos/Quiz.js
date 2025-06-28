import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import { useState } from 'react';



const perguntas = [
    {
        id: 1,
        texto: 'Como sua pele se sente ao final do dia?',
        resposta: [
            { id: 'A', texto: 'Brilhante, principalmente na zona T (testa, nariz e queixo).' },
            { id: 'B', texto: 'Seca e pode até sentir um pouco de repuxamento.' },
            { id: 'C', texto: 'Sente-se equilibrada, mas com algumas áreas mais oleosas (geralmente na zona T) e outras mais secas.' },
        ],
    },
    {
        id: 2,
        texto: 'Como você descreveria a aparência da sua pele?',
        resposta: [
            { id: 'A', texto: 'Brilhante e com tendência a acne ou cravos.' },
            { id: 'B', texto: 'Opaca e com áreas que podem estar descamando.' },
            { id: 'C', texto: 'Algumas partes brilham (zona T) e outras estão secas ou normais.' },
        ],
    },
    {
        id: 3,
        texto: 'Como sua pele reage após usar um hidratante?',
        resposta: [
            { id: 'A', texto: 'O hidratante fica "pesado" e deixa a pele mais oleosa.' },
            { id: 'B', texto: 'A pele ainda parece seca ou com sensação de repuxamento, mesmo após a aplicação.' },
            { id: 'C', texto: 'A pele absorve bem o hidratante, mas algumas áreas ficam mais oleosas do que outras.' },
        ],
    },
    {
        id: 4,
        texto: 'Você costuma ter problemas com acne?',
        resposta: [
            { id: 'A', texto: 'Sim, especialmente na zona T ou em áreas com mais brilho.' },
            { id: 'B', texto: 'Não, minha pele raramente tem acne.' },
            { id: 'C', texto: 'Às vezes, especialmente na zona T, mas em outras áreas minha pele está mais seca.' },
        ],
    },
    {
        id: 5,
        texto: 'Quando você usa maquiagem, como se comporta na pele?',
        resposta: [
            { id: 'A', texto: 'A maquiagem tende a derreter ou brilhar rapidamente, especialmente na zona T.' },
            { id: 'B', texto: 'A maquiagem pode craquelar ou ficar ressecada ao longo do dia.' },
            { id: 'C', texto: 'A maquiagem dura bem, mas em algumas áreas pode precisar de retoques (como na zona T ou nas bochechas).' },
        ],
    },
];

export default function Quiz({ navigation }) {
    const [IndPergunta, setIndPergunta] = useState(0);
    const [respostas, setRespostas] = useState([]);

    const PerguntaAtual = perguntas[IndPergunta];

    function selecionarResposta(letra) {
        const nova = [...respostas, letra];
        setRespostas(nova);

        if (IndPergunta + 1 < perguntas.length) {
            setIndPergunta(IndPergunta + 1);
        } else {
            mostrarResultado(nova);
        }
    }

    function mostrarResultado(respostas) {
        const contar = { A: 0, B: 0, C: 0 };
        respostas.forEach((r) => contar[r]++);
        let final = '';
        let nome = 'joão';
        
        let finalDois='';
        if (contar.A > contar.B && contar.A > contar.C) {
            final = 'Oleosa', 
            finalDois= 'Sua pele é Oleosa, especialmente nas áreas da zona T. Ela pode brilhar ao longo do dia eé mais propensa a acne e cravos.';
        } else if (contar.B > contar.A && contar.B > contar.C) {
            final = 'Seca',
            finalDois= 'Sua pele tende a ser Seca, podendo ter sensação de repuxamento e áreas descamando. Você precisa de hidratação extra para manter o equilíbrio.'
        } else {
            final = 'Mista',
            finalDois='Sua pele tende a ser Mista, com algumas áreas geralmente a zona T mais oleosas e outras mais secas ou normais. É importante usar produtos  adequados para diferentes áreas do rosto. ';
        }

  

    
      navigation.navigate('ResultadoQuiz', { final, finalDois });
       
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#EBF4FE' }}>
            <ScrollView>
                <View style={estilo.container3}>
                    <View style={estilo.Card4}>
                        <Image style={estilo.ImagemEditada} source={require('../PastaFotos/LogoEditada.png')} />
                    </View>

                    <View style={estilo.container2}>
                        <Text style={estilo.container}>{PerguntaAtual.texto}</Text>
                    </View>
                </View>

                {PerguntaAtual.resposta.map((resposta) => (
                    <TouchableOpacity
                        key={resposta.id}
                        style={estilo.container4}
                        onPress={() => selecionarResposta(resposta.id)}
                    >
                        <Text style={estilo.container}>{resposta.id} - {resposta.texto}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    container2: {
        backgroundColor: '#83B0E1',
        Height: 60,
        width: '95%',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
    },
    container3: {
        marginTop: 10,
        alignItems: 'center',
    },
    container4: {
        backgroundColor: '#83B0E1',
        mHeight: 50,
        width: '80%',
        borderRadius: 3,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 60,
    },
    Card4: {
        backgroundColor: '#AECBEB',
        width: '95%',
        height: 60,
        marginTop: 50,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    TextoEditado4: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
    },
    ImagemEditada: {
        height: 50,
        width: 215,
        alignSelf: 'center',
    },
    ImagemEditada2: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginTop: 15,
        alignSelf: 'center',
    },
});
