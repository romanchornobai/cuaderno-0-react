import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface ProductItem {
  id: string;
  icon: string;
  name: string;
  price: string;
  isChallenge?: boolean;
}

// Array de datos base (6 productos) + Reto cumplido (+2 productos adicionales, total 8)
const products: ProductItem[] = [
  { id: '1', icon: '⌨️', name: 'Teclado Mecánico', price: '59 €' },
  { id: '2', icon: '🖱️', name: 'Ratón Ergonómico', price: '39 €' },
  { id: '3', icon: '🖥️', name: 'Monitor 4K', price: '199 €' },
  { id: '4', icon: '🎧', name: 'Auriculares Hi-Fi', price: '79 €' },
  { id: '5', icon: '💻', name: 'Portátil Ultrabook', price: '899 €' },
  { id: '6', icon: '📱', name: 'Smartphone 5G', price: '599 €' },
  // Reto: Dos productos añadidos al array sin alterar el JSX
  { id: '7', icon: '⌚', name: 'Smartwatch Sport', price: '129 €', isChallenge: true },
  { id: '8', icon: '📷', name: 'Webcam 1080p', price: '49 €', isChallenge: true },
];

export default function Ejercicio08() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      <Text style={styles.subtitle}>
        Renderizado dinámico con FlatList ({products.length} productos en total)
      </Text>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, item.isChallenge && styles.challengeCard]}>
            {item.isChallenge && <Text style={styles.challengeBadge}>Reto +2</Text>}
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 30,
  },
  row: {
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'flex-start',
  },
  challengeCard: {
    borderColor: '#10b981',
    borderWidth: 1.5,
  },
  challengeBadge: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  icon: {
    fontSize: 36,
  },
  name: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  price: {
    marginTop: 6,
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
