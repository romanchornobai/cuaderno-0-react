import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Ejercicio06() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Resumen del negocio</Text>

      <View style={styles.grid}>
        {/* 4 métricas base requeridas */}
        <Metric title="Ventas" value="12.450 €" change="+12%" isPositive={true} />
        <Metric title="Clientes" value="348" change="+8%" isPositive={true} />
        <Metric title="Pedidos" value="1.024" change="+18%" isPositive={true} />
        <Metric title="Conversión" value="7,4%" change="+2%" isPositive={true} />

        {/* Reto: Quinta tarjeta añadida */}
        <Metric title="Devoluciones" value="1,2%" change="-0,5%" isPositive={true} isChallenge={true} />
      </View>

      {/* Explicación del comportamiento del Reto */}
      <View style={styles.challengeBox}>
        <Text style={styles.challengeTitle}>💡 Explicación del Reto (5ª Tarjeta):</Text>
        <Text style={styles.challengeText}>
          La quinta tarjeta se coloca al inicio de una nueva fila a la izquierda. Al usar{' '}
          <Text style={styles.codeText}>flexDirection: 'row'</Text> con{' '}
          <Text style={styles.codeText}>flexWrap: 'wrap'</Text> y ancho de{' '}
          <Text style={styles.codeText}>48%</Text>, las dos primeras filas se completan con dos tarjetas
          cada una (48% + 48% + gap ≈ 100%), obligando a la quinta a pasar automáticamente a la siguiente fila.
        </Text>
      </View>
    </ScrollView>
  );
}

function Metric({
  title,
  value,
  change,
  isPositive,
  isChallenge,
}: {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
  isChallenge?: boolean;
}) {
  return (
    <View style={[styles.card, isChallenge && styles.challengeCard]}>
      {isChallenge && <Text style={styles.badgeReto}>RETO (5ª)</Text>}
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={[styles.change, isPositive ? styles.positive : styles.negative]}>
        {change}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 50,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subtitle: {
    color: '#64748b',
    marginTop: 5,
    marginBottom: 24,
    fontSize: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
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
  badgeReto: {
    alignSelf: 'flex-start',
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 6,
  },
  label: {
    color: '#64748b',
    fontSize: 14,
    fontWeight: '500',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 6,
  },
  change: {
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 14,
  },
  positive: {
    color: '#16a34a',
  },
  negative: {
    color: '#dc2626',
  },
  challengeBox: {
    marginTop: 24,
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  challengeTitle: {
    fontWeight: 'bold',
    color: '#1e293b',
    fontSize: 14,
    marginBottom: 6,
  },
  challengeText: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 18,
  },
  codeText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#2563eb',
  },
});
