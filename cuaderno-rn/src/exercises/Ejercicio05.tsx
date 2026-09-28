import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600' }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.badgeRow}>
            <Text style={styles.category}>TECNOLOGÍA</Text>
            <View style={styles.offerBadge}>
              <Text style={styles.offerText}>OFERTA</Text>
            </View>
          </View>

          <Text style={styles.title}>Auriculares Wireless</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>89,99 €</Text>
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
  },
  image: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 20,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 12,
  },
  offerBadge: {
    backgroundColor: '#fee2e2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  offerText: {
    color: '#b91c1c',
    fontSize: 11,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
