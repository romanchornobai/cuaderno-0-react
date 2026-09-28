import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Ejercicio07() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.header}>Noticias</Text>
      <Text style={styles.subHeader}>Feed interactivo de actualidad tecnológica</Text>

      {/* 3 noticias requeridas */}
      <NewsCard
        category="TECNOLOGÍA"
        title="La IA transforma el desarrollo de software y la educación técnica"
        date="Hace 1 hora"
      />
      <NewsCard
        category="MÓVIL"
        title="React Native continúa evolucionando con la Nueva Arquitectura"
        date="Hace 2 horas"
      />
      <NewsCard
        category="CLOUD"
        title="Las arquitecturas cloud y serverless ganan protagonismo global"
        date="Hace 4 horas"
      />

      {/* Reto: Cuarta noticia añadida sin duplicar la definición de NewsCard */}
      <NewsCard
        category="CIBERSEGURIDAD"
        title="Nuevos protocolos de autenticación biométrica y claves Passkey"
        date="Hace 6 horas"
        isChallenge={true}
      />
    </ScrollView>
  );
}

// Componente reutilizable con tipado de props
interface NewsCardProps {
  category: string;
  title: string;
  date?: string;
  isChallenge?: boolean;
}

function NewsCard({ category, title, date = 'Hace un momento', isChallenge }: NewsCardProps) {
  return (
    <View style={[styles.card, isChallenge && styles.challengeCard]}>
      <View style={styles.categoryRow}>
        <Text style={styles.category}>{category}</Text>
        {isChallenge && <Text style={styles.challengeBadge}>Reto: 4ª noticia</Text>}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
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
    paddingBottom: 40,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subHeader: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  challengeCard: {
    borderColor: '#3b82f6',
    borderWidth: 1.5,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  challengeBadge: {
    fontSize: 11,
    color: '#2563eb',
    fontWeight: '600',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  title: {
    marginTop: 8,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1e293b',
    lineHeight: 25,
  },
  date: {
    marginTop: 12,
    color: '#94a3b8',
    fontSize: 13,
  },
});
