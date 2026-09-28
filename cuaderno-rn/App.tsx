import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Ejercicio01 from './src/exercises/Ejercicio01';
import Ejercicio02 from './src/exercises/Ejercicio02';
import Ejercicio03 from './src/exercises/Ejercicio03';
import Ejercicio04 from './src/exercises/Ejercicio04';
import Ejercicio05 from './src/exercises/Ejercicio05';
import Ejercicio06 from './src/exercises/Ejercicio06';
import Ejercicio07 from './src/exercises/Ejercicio07';
import Ejercicio08 from './src/exercises/Ejercicio08';
import Ejercicio09 from './src/exercises/Ejercicio09';
import Ejercicio10 from './src/exercises/Ejercicio10';

const exerciseList = [
  { id: 1, label: '01. Pantalla', title: 'Ejercicio 01 · Mi primera pantalla', Component: Ejercicio01 },
  { id: 2, label: '02. Tarjeta', title: 'Ejercicio 02 · Tarjeta de bienvenida', Component: Ejercicio02 },
  { id: 3, label: '03. Perfil', title: 'Ejercicio 03 · Ficha de perfil', Component: Ejercicio03 },
  { id: 4, label: '04. Acceso', title: 'Ejercicio 04 · Pantalla de acceso', Component: Ejercicio04 },
  { id: 5, label: '05. Producto', title: 'Ejercicio 05 · Tarjeta de producto', Component: Ejercicio05 },
  { id: 6, label: '06. Métricas', title: 'Ejercicio 06 · Dashboard de métricas', Component: Ejercicio06 },
  { id: 7, label: '07. Noticias', title: 'Ejercicio 07 · Feed de noticias', Component: Ejercicio07 },
  { id: 8, label: '08. Catálogo', title: 'Ejercicio 08 · Catálogo con FlatList', Component: Ejercicio08 },
  { id: 9, label: '09. Banca', title: 'Ejercicio 09 · Interfaz bancaria', Component: Ejercicio09 },
  { id: 10, label: '10. Fitness', title: 'Ejercicio 10 · Proyecto final: Fitness', Component: Ejercicio10 },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = exerciseList[currentIndex];
  const ActiveComponent = current.Component;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      {/* Barra superior de navegación */}
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>{current.title}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabs}
        >
          {exerciseList.map((item, index) => {
            const active = index === currentIndex;
            return (
              <Pressable
                key={item.id}
                style={[styles.tab, active && styles.tabActive]}
                onPress={() => setCurrentIndex(index)}
              >
                <Text style={[styles.tabText, active && styles.tabTextActive]}>
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* Pantalla del ejercicio limpio */}
      <View style={styles.screen}>
        <ActiveComponent />
      </View>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <Pressable
          style={[styles.btn, currentIndex === 0 && styles.btnDisabled]}
          onPress={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          <Text style={[styles.btnText, currentIndex === 0 && styles.btnTextDisabled]}>
            ← Anterior
          </Text>
        </Pressable>

        <Text style={styles.counter}>{currentIndex + 1} de {exerciseList.length}</Text>

        <Pressable
          style={[styles.btn, styles.btnNext, currentIndex === exerciseList.length - 1 && styles.btnDisabled]}
          onPress={() => currentIndex < exerciseList.length - 1 && setCurrentIndex(currentIndex + 1)}
          disabled={currentIndex === exerciseList.length - 1}
        >
          <Text style={[styles.btnText, styles.btnTextNext, currentIndex === exerciseList.length - 1 && styles.btnTextDisabled]}>
            Siguiente →
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  topBar: {
    backgroundColor: '#0f172a',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  topTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  tabs: {
    paddingHorizontal: 12,
    gap: 8,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#1e293b',
  },
  tabActive: {
    backgroundColor: '#3b82f6',
  },
  tabText: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  screen: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#0f172a',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#1e293b',
  },
  btnNext: {
    backgroundColor: '#3b82f6',
  },
  btnDisabled: {
    opacity: 0.3,
  },
  btnText: {
    color: '#cbd5e1',
    fontSize: 13,
    fontWeight: '600',
  },
  btnTextNext: {
    color: '#ffffff',
  },
  btnTextDisabled: {
    color: '#64748b',
  },
  counter: {
    color: '#94a3b8',
    fontSize: 12,
  },
});
