import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Ejercicio10() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* 1. Saludo y nombre del usuario */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Buenos días,</Text>
          <Text style={styles.user}>Laura 👋</Text>
        </View>
        <View style={styles.badgeReto}>
          <Text style={styles.badgeRetoText}>Proyecto Final</Text>
        </View>
      </View>

      {/* 2 y 3. Tarjeta principal con objetivo diario de pasos y barra de progreso */}
      <View style={styles.goalCard}>
        <View style={styles.goalHeader}>
          <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
          <Text style={styles.goalStatus}>En progreso</Text>
        </View>
        <Text style={styles.steps}>7.540</Text>
        <Text style={styles.stepsLabel}>pasos de 10.000 (Meta diaria)</Text>

        {/* Barra de progreso visual mediante dos View */}
        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <View style={styles.progressFooter}>
          <Text style={styles.percentage}>75% completado</Text>
          <Text style={styles.remaining}>Faltan 2.460 pasos</Text>
        </View>
      </View>

      {/* 4 y 5. Cuatro métricas en dos columnas con componente reutilizable */}
      <Text style={styles.sectionTitle}>Resumen de hoy</Text>
      <View style={styles.grid}>
        <StatCard icon="🔥" value="520 kcal" label="Calorías quemadas" trend="+14%" />
        <StatCard icon="⏱️" value="48 min" label="Tiempo activo" trend="+5%" />
        <StatCard icon="❤️" value="72 ppm" label="Pulsaciones medias" trend="Normal" />
        <StatCard icon="📍" value="5,6 km" label="Distancia recorrida" trend="+1.2 km" />
      </View>

      {/* 6. Sección de actividad reciente con componente reutilizable */}
      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <Activity
        icon="🏃‍♀️"
        title="Carrera al aire libre"
        detail="5,2 km · 28 min · Ritmo 5:23 /km"
        time="Hoy, 07:30"
      />
      <Activity
        icon="🚴‍♂️"
        title="Ruta en bicicleta"
        detail="12,4 km · 42 min · 280 kcal"
        time="Ayer, 18:15"
      />
      <Activity
        icon="🧘‍♀️"
        title="Sesión de Estiramientos"
        detail="20 min · Frecuencia baja · Relajación"
        time="20 sep, 20:00"
      />
    </ScrollView>
  );
}

// Componente reutilizable para métricas (StatCard)
interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  trend?: string;
}

function StatCard({ icon, value, label, trend }: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statHeader}>
        <Text style={styles.statIcon}>{icon}</Text>
        {trend && <Text style={styles.trendText}>{trend}</Text>}
      </View>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// Componente reutilizable para actividad reciente
interface ActivityProps {
  icon: string;
  title: string;
  detail: string;
  time: string;
}

function Activity({ icon, title, detail, time }: ActivityProps) {
  return (
    <View style={styles.activity}>
      <View style={styles.activityIconBox}>
        <Text style={styles.activityIcon}>{icon}</Text>
      </View>
      <View style={styles.activityContent}>
        <View style={styles.activityTopRow}>
          <Text style={styles.activityTitle}>{title}</Text>
          <Text style={styles.activityTime}>{time}</Text>
        </View>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1329', // Reto: Paleta personalizada moderna estilo Dark Fitness
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    color: '#94a3b8',
    fontSize: 16,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  badgeReto: {
    backgroundColor: '#1e293b',
    borderColor: '#38bdf8',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeRetoText: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: 'bold',
  },
  goalCard: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 6,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalLabel: {
    color: '#38bdf8',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  goalStatus: {
    color: '#22c55e',
    fontSize: 12,
    fontWeight: '600',
  },
  steps: {
    marginTop: 12,
    color: '#ffffff',
    fontSize: 46,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 2,
  },
  progressBackground: {
    height: 12,
    backgroundColor: '#334155',
    borderRadius: 6,
    marginTop: 20,
    overflow: 'hidden',
  },
  progress: {
    width: '75%', // Representa el 75% completado
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: 6,
  },
  progressFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  percentage: {
    color: '#22c55e',
    fontWeight: 'bold',
    fontSize: 14,
  },
  remaining: {
    color: '#94a3b8',
    fontSize: 13,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 14,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#1e293b',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 26,
  },
  trendText: {
    fontSize: 11,
    color: '#22c55e',
    fontWeight: 'bold',
    backgroundColor: '#064e3b',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  statValue: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statLabel: {
    marginTop: 4,
    color: '#94a3b8',
    fontSize: 12,
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  activityIconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  activityIcon: {
    fontSize: 22,
  },
  activityContent: {
    flex: 1,
  },
  activityTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ffffff',
  },
  activityTime: {
    fontSize: 12,
    color: '#64748b',
  },
  activityDetail: {
    marginTop: 4,
    color: '#94a3b8',
    fontSize: 13,
  },
});
