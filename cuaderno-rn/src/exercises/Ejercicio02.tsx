import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

export default function Ejercicio02() {
  const [useAltPalette, setUseAltPalette] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Selector para ver la tarjeta estándar o la variante del Reto */}
      <View style={styles.variantToggle}>
        <Pressable
          style={[styles.toggleBtn, !useAltPalette && styles.toggleBtnActive]}
          onPress={() => setUseAltPalette(false)}
        >
          <Text style={[styles.toggleBtnText, !useAltPalette && styles.toggleBtnTextActive]}>
            Estándar
          </Text>
        </Pressable>
        <Pressable
          style={[styles.toggleBtn, useAltPalette && styles.toggleBtnActive]}
          onPress={() => setUseAltPalette(true)}
        >
          <Text style={[styles.toggleBtnText, useAltPalette && styles.toggleBtnTextActive]}>
            Reto: Variante Oscura / Esmeralda
          </Text>
        </Pressable>
      </View>

      {!useAltPalette ? (
        /* Tarjeta Estándar (Requisitos Oficiales) */
        <View style={styles.card}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>COMENZAR</Text>
          </View>
        </View>
      ) : (
        /* Reto: Segunda variante con paleta de colores diferente */
        <View style={[styles.card, styles.altCard]}>
          <Text style={[styles.title, styles.altTitle]}>¡Bienvenido a Bordo!</Text>
          <Text style={[styles.subtitle, styles.altSubtitle]}>
            Variante del reto con paleta Dark & Emerald
          </Text>
          <View style={[styles.button, styles.altButton]}>
            <Text style={[styles.buttonText, styles.altButtonText]}>EXPLORAR CURSO</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#eef2f7',
  },
  variantToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 8,
  },
  toggleBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#cbd5e1',
  },
  toggleBtnActive: {
    backgroundColor: '#0f172a',
  },
  toggleBtnText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
  },
  toggleBtnTextActive: {
    color: '#ffffff',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  // Estilos de la variante del Reto (Challenge)
  altCard: {
    backgroundColor: '#0f172a',
    borderColor: '#334155',
    borderWidth: 1,
  },
  altTitle: {
    color: '#f8fafc',
  },
  altSubtitle: {
    color: '#94a3b8',
  },
  altButton: {
    backgroundColor: '#10b981',
  },
  altButtonText: {
    color: '#022c22',
    fontWeight: 'bold',
  },
});
