import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';

interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
}

const quizData: QuizQuestion[] = [
  {
    q: '1. ¿Qué componente se utiliza normalmente como contenedor visual básico en React Native?',
    options: ['div', 'View', 'Container', 'Section'],
    answer: 1,
    explanation: 'React Native no utiliza HTML. `View` es el contenedor visual básico.',
  },
  {
    q: '2. ¿Qué componente muestra texto en React Native?',
    options: ['Label', 'Paragraph', 'Text', 'Span'],
    answer: 2,
    explanation: 'El texto visible debe estar dentro de un componente `Text`.',
  },
  {
    q: '3. ¿Qué consigue `flex: 1` en un contenedor principal?',
    options: ['Ocupa el espacio disponible', 'Crea una fila', 'Cambia el color', 'Añade padding'],
    answer: 0,
    explanation: '`flex: 1` permite al elemento expandirse para ocupar el espacio disponible.',
  },
  {
    q: '4. ¿Qué propiedad centra normalmente a los hijos en el eje principal?',
    options: ['alignItems', 'justifyContent', 'textAlign', 'margin'],
    answer: 1,
    explanation: '`justifyContent` distribuye los hijos a lo largo del eje principal.',
  },
  {
    q: '5. Con `flexDirection: \'column\'`, ¿cuál es normalmente el eje principal?',
    options: ['Horizontal', 'Vertical', 'Diagonal', 'No existe'],
    answer: 1,
    explanation: 'Con `column`, el eje principal es vertical.',
  },
  {
    q: '6. ¿Qué diferencia esencial existe entre padding y margin?',
    options: [
      'No existe',
      'Padding es interior y margin exterior',
      'Margin es interior y padding exterior',
      'Ambos cambian el tamaño de letra',
    ],
    answer: 1,
    explanation: 'Padding separa el contenido del borde interior; margin separa el elemento de otros elementos.',
  },
  {
    q: '7. ¿Qué combinación convierte una imagen de 100×100 en circular?',
    options: ['borderRadius: 10', 'borderRadius: 50', 'padding: 50', 'flex: 50'],
    answer: 1,
    explanation: 'Un radio igual a la mitad del ancho/alto produce un círculo.',
  },
  {
    q: '8. ¿Qué propiedad coloca los hijos en horizontal?',
    options: ['flexDirection: \'row\'', 'display: \'inline\'', 'orientation: \'horizontal\'', 'justifyContent: \'row\''],
    answer: 0,
    explanation: 'En React Native usamos `flexDirection: \'row\'`.',
  },
  {
    q: '9. ¿Qué componente es adecuado para introducir texto?',
    options: ['Input', 'TextField', 'TextInput', 'FormInput'],
    answer: 2,
    explanation: '`TextInput` es el componente de entrada de texto.',
  },
  {
    q: '10. ¿Qué propiedad de TextInput oculta visualmente una contraseña?',
    options: ['secureTextEntry', 'passwordMode', 'hidden', 'privateText'],
    answer: 0,
    explanation: '`secureTextEntry` muestra la entrada como contenido protegido.',
  },
  {
    q: '11. ¿Qué componente utilizarías como zona pulsable en los ejercicios del cuaderno?',
    options: ['ButtonView', 'Pressable', 'Click', 'TouchableDiv'],
    answer: 1,
    explanation: '`Pressable` representa una zona que puede responder a pulsaciones.',
  },
  {
    q: '12. ¿Para qué utilizamos `overflow: \'hidden\'` en una tarjeta con imagen?',
    options: ['Para centrarla', 'Para recortar contenido que sobresale', 'Para ocultar el texto', 'Para hacer scroll'],
    answer: 1,
    explanation: 'Resulta útil para respetar visualmente los bordes redondeados del contenedor.',
  },
  {
    q: '13. ¿Qué hace `justifyContent: \'space-between\'` en una fila?',
    options: ['Superpone elementos', 'Los separa hacia los extremos', 'Los hace circulares', 'Los convierte en columnas'],
    answer: 1,
    explanation: 'Distribuye el espacio entre los hijos, dejando el primero y último hacia los extremos.',
  },
  {
    q: '14. ¿Qué propiedad permite que elementos de una fila pasen a otra línea?',
    options: ['flexWrap: \'wrap\'', 'overflow: \'next\'', 'flex: 2', 'rowBreak: true'],
    answer: 0,
    explanation: '`flexWrap: \'wrap\'` permite múltiples líneas.',
  },
  {
    q: '15. ¿Cuándo es especialmente apropiado usar ScrollView?',
    options: ['Cuando queremos que el contenido pueda desplazarse', 'Solo para imágenes', 'Solo para formularios', 'Para sustituir StyleSheet'],
    answer: 0,
    explanation: 'ScrollView permite desplazar contenido mayor que la pantalla.',
  },
  {
    q: '16. ¿Cuál es una ventaja principal de crear un componente reutilizable?',
    options: ['Evitar repetir estructura', 'Eliminar JavaScript', 'No necesitar estilos', 'Evitar cualquier dato'],
    answer: 0,
    explanation: 'Permite mantener una sola estructura y reutilizarla con datos diferentes.',
  },
  {
    q: '17. En una FlatList, ¿qué prop recibe la colección?',
    options: ['items', 'values', 'data', 'collection'],
    answer: 2,
    explanation: '`data` contiene la colección que FlatList representa.',
  },
  {
    q: '18. ¿Para qué sirve `renderItem` en FlatList?',
    options: ['Para definir cómo se dibuja cada elemento', 'Para crear el array', 'Para añadir CSS', 'Para navegar'],
    answer: 0,
    explanation: '`renderItem` recibe cada elemento y devuelve su representación visual.',
  },
  {
    q: '19. Si tres tarjetas tienen la misma estructura pero cambian sus datos, ¿qué enfoque es más mantenible?',
    options: ['Copiar tres veces el JSX', 'Crear un componente y pasar props', 'Crear tres apps', 'Usar HTML'],
    answer: 1,
    explanation: 'La reutilización mediante componentes y props reduce duplicación.',
  },
  {
    q: '20. Antes de programar una interfaz compleja, ¿qué estrategia es más adecuada?',
    options: ['Añadir librerías al azar', 'Dividirla en bloques visuales y resolverlos por partes', 'Escribir todo en un único Text', 'Copiar una solución sin analizarla'],
    answer: 1,
    explanation: 'Descomponer el problema reduce carga cognitiva y facilita detectar componentes reutilizables.',
  },
];

export default function QuizRepaso() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qIdx: number, oIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qIdx, oIdx]) => {
    return acc + (quizData[Number(qIdx)].answer === oIdx ? 1 : 0);
  }, 0);

  const totalAnswered = Object.keys(selectedAnswers).length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>Repaso Final</Text>
      <Text style={styles.headerSubtitle}>20 preguntas de autoevaluación con feedback</Text>

      {/* Tarjeta de puntuación */}
      <View style={styles.scoreCard}>
        <Text style={styles.scoreText}>
          Progreso: {totalAnswered} de {quizData.length} respondidas
        </Text>
        {totalAnswered > 0 && (
          <Text style={styles.scoreNumber}>
            Aciertos: {score} / {quizData.length} ({Math.round((score / quizData.length) * 100)}%)
          </Text>
        )}
        <Pressable
          style={styles.toggleResultsBtn}
          onPress={() => setShowResults(!showResults)}
        >
          <Text style={styles.toggleResultsBtnText}>
            {showResults ? 'Ocultar explicaciones' : 'Mostrar explicaciones y soluciones'}
          </Text>
        </Pressable>
      </View>

      {/* Lista de preguntas */}
      {quizData.map((item, qIdx) => {
        const selected = selectedAnswers[qIdx];
        const isAnswered = selected !== undefined;
        const isCorrect = selected === item.answer;

        return (
          <View key={qIdx} style={styles.questionCard}>
            <Text style={styles.questionText}>{item.q}</Text>

            <View style={styles.optionsList}>
              {item.options.map((opt, oIdx) => {
                const isThisSelected = selected === oIdx;
                const isThisCorrect = oIdx === item.answer;

                return (
                  <Pressable
                    key={oIdx}
                    style={[
                      styles.optionBtn,
                      isThisSelected && !showResults && styles.optionSelected,
                      isThisSelected && showResults && (isCorrect ? styles.optionCorrect : styles.optionIncorrect),
                      !isThisSelected && showResults && isThisCorrect && styles.optionCorrectOutline,
                    ]}
                    onPress={() => handleSelect(qIdx, oIdx)}
                  >
                    <Text
                      style={[
                        styles.optionBtnText,
                        isThisSelected && styles.optionTextWhite,
                      ]}
                    >
                      {String.fromCharCode(65 + oIdx)}) {opt}
                      {showResults && isThisCorrect ? '  ✓' : ''}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Explicación si se activan las respuestas o si ya se respondió */}
            {(showResults || isAnswered) && (
              <View style={[styles.feedbackBox, isCorrect ? styles.feedbackBoxCorrect : styles.feedbackBoxIncorrect]}>
                <Text style={styles.feedbackTitle}>
                  {isCorrect ? '✅ ¡Correcto!' : 'ℹ️ Explicación:'}
                </Text>
                <Text style={styles.explanationText}>{item.explanation}</Text>
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 60,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 20,
  },
  scoreCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  scoreText: {
    color: '#94a3b8',
    fontSize: 14,
  },
  scoreNumber: {
    color: '#38bdf8',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },
  toggleResultsBtn: {
    marginTop: 12,
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  toggleResultsBtnText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  questionCard: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 14,
    lineHeight: 22,
  },
  optionsList: {
    gap: 8,
  },
  optionBtn: {
    backgroundColor: '#f1f5f9',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  optionSelected: {
    backgroundColor: '#3b82f6',
    borderColor: '#2563eb',
  },
  optionCorrect: {
    backgroundColor: '#16a34a',
    borderColor: '#15803d',
  },
  optionIncorrect: {
    backgroundColor: '#dc2626',
    borderColor: '#b91c1c',
  },
  optionCorrectOutline: {
    borderColor: '#16a34a',
    borderWidth: 2,
    backgroundColor: '#f0fdf4',
  },
  optionBtnText: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '500',
  },
  optionTextWhite: {
    color: 'white',
    fontWeight: 'bold',
  },
  feedbackBox: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f8fafc',
  },
  feedbackBoxCorrect: {
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 3,
    borderLeftColor: '#16a34a',
  },
  feedbackBoxIncorrect: {
    backgroundColor: '#fef2f2',
    borderLeftWidth: 3,
    borderLeftColor: '#dc2626',
  },
  feedbackTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#1e293b',
    marginBottom: 4,
  },
  explanationText: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
});
