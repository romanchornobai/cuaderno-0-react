import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ejercicio01() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      {/* Reto: Añade una tercera línea con el texto "Curso 2026/27" sin romper el centrado */}
      <Text style={styles.course}>Curso 2026/27</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 18,
    color: '#64748b',
  },
  course: {
    marginTop: 12,
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '600',
  },
});
