import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Ejercicio05() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600' }}
          style={styles.image}
        />

        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.category}>TECNOLOGÍA</Text>
            {/* Reto: Añade una etiqueta "OFERTA" situada antes del nombre del producto */}
            <View style={styles.offerBadge}>
              <Text style={styles.offerText}>OFERTA -20%</Text>
            </View>
          </View>

          <Text style={styles.title}>Auriculares Wireless Pro</Text>
          <Text style={styles.rating}>⭐ 4.8 (124 reseñas)</Text>

          <View style={styles.bottom}>
            <View>
              <Text style={styles.oldPrice}>109,99 €</Text>
              <Text style={styles.price}>89,99 €</Text>
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </Pressable>
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
    backgroundColor: '#f8fafc',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 14,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  category: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  offerBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  offerText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  rating: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748b',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  oldPrice: {
    fontSize: 14,
    color: '#94a3b8',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
