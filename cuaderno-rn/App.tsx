import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Importación de todos los ejercicios del Cuaderno 0
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
import QuizRepaso from './src/exercises/QuizRepaso';

interface ExerciseItem {
  id: number | string;
  tabLabel: string;
  title: string;
  level: string;
  component: React.ComponentType;
}

const exercisesList: ExerciseItem[] = [
  { id: 1, tabLabel: '01. Pantalla', title: '01 · Mi primera pantalla', level: 'Nivel 1', component: Ejercicio01 },
  { id: 2, tabLabel: '02. Tarjeta', title: '02 · Tarjeta de bienvenida', level: 'Nivel 2', component: Ejercicio02 },
  { id: 3, tabLabel: '03. Perfil', title: '03 · Ficha de perfil', level: 'Nivel 3', component: Ejercicio03 },
  { id: 4, tabLabel: '04. Acceso', title: '04 · Pantalla de acceso', level: 'Nivel 4', component: Ejercicio04 },
  { id: 5, tabLabel: '05. Producto', title: '05 · Tarjeta de producto', level: 'Nivel 5', component: Ejercicio05 },
  { id: 6, tabLabel: '06. Métricas', title: '06 · Dashboard de métricas', level: 'Nivel 6', component: Ejercicio06 },
  { id: 7, tabLabel: '07. Noticias', title: '07 · Feed de noticias', level: 'Nivel 7', component: Ejercicio07 },
  { id: 8, tabLabel: '08. Catálogo', title: '08 · Catálogo con FlatList', level: 'Nivel 8', component: Ejercicio08 },
  { id: 9, tabLabel: '09. Banca', title: '09 · Interfaz bancaria', level: 'Nivel 9', component: Ejercicio09 },
  { id: 10, tabLabel: '10. Fitness', title: '10 · Proyecto final: Fitness', level: 'Nivel 10', component: Ejercicio10 },
  { id: 'quiz', tabLabel: '✓ Repaso (Quiz)', title: 'Repaso Final · 20 Preguntas', level: 'Autoevaluación', component: QuizRepaso },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentExercise = exercisesList[currentIndex];
  const ActiveComponent = currentExercise.component;

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < exercisesList.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      {/* Barra de cabecera con navegación entre ejercicios */}
      <View style={styles.topNavigation}>
        <View style={styles.titleRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>CUADERNO 0 · EXPO</Text>
          </View>
          <Text style={styles.headerTitle}>{currentExercise.title}</Text>
        </View>

        {/* Scroll horizontal con pestañas de todos los ejercicios */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
        >
          {exercisesList.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <Pressable
                key={String(item.id)}
                style={[styles.tabButton, isActive && styles.tabButtonActive]}
                onPress={() => setCurrentIndex(index)}
              >
                <Text style={[styles.tabButtonText, isActive && styles.tabButtonTextActive]}>
                  {item.tabLabel}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* Pantalla del ejercicio activo */}
      <View style={styles.screenContainer}>
        <ActiveComponent />
      </View>

      {/* Barra inferior con botones Anterior / Siguiente */}
      <View style={styles.bottomBar}>
        <Pressable
          style={[styles.navBtn, currentIndex === 0 && styles.navBtnDisabled]}
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <Text style={[styles.navBtnText, currentIndex === 0 && styles.navBtnTextDisabled]}>
            ← Anterior
          </Text>
        </Pressable>

        <Text style={styles.indicatorText}>
          {currentIndex + 1} de {exercisesList.length}
        </Text>

        <Pressable
          style={[styles.navBtn, styles.navBtnPrimary, currentIndex === exercisesList.length - 1 && styles.navBtnDisabled]}
          onPress={handleNext}
          disabled={currentIndex === exercisesList.length - 1}
        >
          <Text style={[styles.navBtnText, styles.navBtnTextPrimary, currentIndex === exercisesList.length - 1 && styles.navBtnTextDisabled]}>
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
  topNavigation: {
    backgroundColor: '#0f172a',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  titleRow: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1e293b',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  badgeText: {
    color: '#38bdf8',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabsScroll: {
    paddingHorizontal: 12,
    gap: 8,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#1e293b',
  },
  tabButtonActive: {
    backgroundColor: '#3b82f6',
  },
  tabButtonText: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '600',
  },
  tabButtonTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#0f172a',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  navBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#1e293b',
  },
  navBtnPrimary: {
    backgroundColor: '#3b82f6',
  },
  navBtnDisabled: {
    backgroundColor: '#1e293b',
    opacity: 0.4,
  },
  navBtnText: {
    color: '#e2e8f0',
    fontSize: 13,
    fontWeight: '600',
  },
  navBtnTextPrimary: {
    color: '#ffffff',
  },
  navBtnTextDisabled: {
    color: '#64748b',
  },
  indicatorText: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '500',
  },
});
