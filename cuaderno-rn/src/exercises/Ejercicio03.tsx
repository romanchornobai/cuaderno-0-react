import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Ejercicio03() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Laura Martínez</Text>
        <Text style={styles.job}>Diseñadora UX/UI</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>24</Text>
            <Text style={styles.statLabel}>Proyectos</Text>
          </View>
          {/* Estadística Reto: Seguidores 1280 */}
          <View style={styles.stat}>
            <Text style={styles.number}>1280</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          {/* Tercera estadística para consolidar el reto */}
          <View style={styles.stat}>
            <Text style={styles.number}>4.9 ⭐</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
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
    backgroundColor: '#e2e8f0',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#3b82f6',
  },
  name: {
    marginTop: 18,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  job: {
    marginTop: 4,
    color: '#64748b',
    fontSize: 16,
  },
  stats: {
    flexDirection: 'row',
    gap: 28,
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 18,
  },
  stat: {
    alignItems: 'center',
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  statLabel: {
    marginTop: 4,
    fontSize: 13,
    color: '#64748b',
  },
});
