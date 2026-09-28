import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Modificación solicitada: variante con paleta cálida (naranja/ámbar) */}
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#eef2f7',
  },
  card: {
    backgroundColor: '#fff7ed', // Fondo cálido modificado
    padding: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9a3412', // Color de título modificado
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#ea580c', // Botón naranja modificado
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
