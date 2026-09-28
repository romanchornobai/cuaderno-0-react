import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
        <Text style={styles.account}>ES00 •••• •••• 7821</Text>
      </View>

      <View style={styles.actionsRow}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionText}>Transferir</Text>
        </View>
        <View style={styles.actionBtn}>
          <Text style={styles.actionText}>Bizum</Text>
        </View>
        <View style={styles.actionBtn}>
          <Text style={styles.actionText}>Tarjetas</Text>
        </View>
      </View>

      {/* Modificación solicitada: movimiento positivo formateado en verde */}
      <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      <Movement title="Nómina" date="20 septiembre" amount="+2.340 €" isPositive />
      <Movement title="Supermercado" date="Hoy" amount="-42,80 €" />
      <Movement title="Cafetería" date="Ayer" amount="-3,20 €" />
      <Movement title="Electricidad" date="18 septiembre" amount="-74,20 €" />
    </ScrollView>
  );
}

type MovementProps = {
  title: string;
  date: string;
  amount: string;
  isPositive?: boolean;
};

function Movement({ title, date, amount, isPositive }: MovementProps) {
  return (
    <View style={styles.movement}>
      <View style={styles.movementInfo}>
        <Text style={styles.movementTitle}>{title}</Text>
        <Text style={styles.movementDate}>{date}</Text>
      </View>
      <Text style={[styles.amount, isPositive ? styles.gain : styles.expense]}>
        {amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  hello: {
    marginTop: 60,
    color: '#64748b',
  },
  user: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  balanceCard: {
    backgroundColor: '#020617',
    borderRadius: 22,
    padding: 24,
  },
  balanceLabel: {
    color: '#cbd5e1',
  },
  balance: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 8,
  },
  account: {
    color: '#94a3b8',
    marginTop: 28,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  actionText: {
    fontWeight: '600',
    color: '#1e293b',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  movementInfo: {
    flex: 1,
  },
  movementTitle: {
    fontWeight: 'bold',
  },
  movementDate: {
    marginTop: 3,
    color: '#94a3b8',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  gain: {
    color: '#16a34a',
  },
  expense: {
    color: '#0f172a',
  },
});
