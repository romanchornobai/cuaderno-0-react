import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';

export default function Ejercicio09() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      {/* Tarjeta de saldo destacada */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
        <View style={styles.balanceFooter}>
          <Text style={styles.account}>ES91 •••• •••• 7821</Text>
          <Text style={styles.accountType}>Cuenta Nómina</Text>
        </View>
      </View>

      {/* Tres acciones rápidas en fila (Requisito 3) */}
      <Text style={styles.sectionSubtitle}>Acciones rápidas</Text>
      <View style={styles.quickActions}>
        <QuickActionButton icon="💸" label="Transferir" />
        <QuickActionButton icon="📱" label="Bizum" />
        <QuickActionButton icon="💳" label="Tarjetas" />
      </View>

      {/* Movimientos recientes (Requisito 4 y 5 + Reto movimiento positivo) */}
      <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      <Movement title="Supermercado Mercadona" date="Hoy, 14:20" amount="-42,80 €" />
      <Movement title="Cafetería Central" date="Ayer, 09:15" amount="-3,20 €" />
      {/* Movimiento positivo (Reto) */}
      <Movement title="Nómina mensual" date="20 septiembre" amount="+2.340,00 €" isPositive={true} />
      <Movement title="Factura de Luz (Iberdrola)" date="18 septiembre" amount="-74,20 €" />
      {/* Movimiento positivo adicional para consolidar el reto */}
      <Movement title="Bizum recibido (Carlos)" date="15 septiembre" amount="+25,00 €" isPositive={true} />
    </ScrollView>
  );
}

// Botón de acción rápida
function QuickActionButton({ icon, label }: { icon: string; label: string }) {
  return (
    <Pressable style={styles.actionBtn}>
      <Text style={styles.actionIcon}>{icon}</Text>
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}

// Componente reutilizable Movement (Requisito 4 + Reto legible sin alterar estructura)
type MovementProps = {
  title: string;
  date: string;
  amount: string;
  isPositive?: boolean;
};

function Movement({ title, date, amount, isPositive }: MovementProps) {
  // Se determina el color según si el importe comienza con '+' o la prop isPositive
  const positive = isPositive || amount.trim().startsWith('+');

  return (
    <View style={styles.movement}>
      <View style={styles.movementInfo}>
        <Text style={styles.movementTitle}>{title}</Text>
        <Text style={styles.movementDate}>{date}</Text>
      </View>
      <Text style={[styles.amount, positive ? styles.amountPositive : styles.amountNegative]}>
        {amount}
      </Text>
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
  hello: {
    color: '#64748b',
    fontSize: 16,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 20,
  },
  balanceCard: {
    backgroundColor: '#111827',
    borderRadius: 22,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 5,
  },
  balanceLabel: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: '500',
  },
  balance: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 8,
  },
  balanceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  account: {
    color: '#94a3b8',
    fontSize: 13,
  },
  accountType: {
    color: '#3b82f6',
    fontSize: 12,
    fontWeight: '600',
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
    marginTop: 24,
    marginBottom: 12,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  actionIcon: {
    fontSize: 22,
    marginBottom: 6,
  },
  actionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1e293b',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 28,
    marginBottom: 14,
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  movementInfo: {
    flex: 1,
  },
  movementTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1e293b',
  },
  movementDate: {
    marginTop: 3,
    color: '#94a3b8',
    fontSize: 13,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  amountNegative: {
    color: '#0f172a',
  },
  amountPositive: {
    color: '#16a34a',
  },
});
