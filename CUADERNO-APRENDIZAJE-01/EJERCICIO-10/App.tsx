import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Laura 👋</Text>

      {/* Modificación solicitada: objetivo 8.200 pasos con barra al 82% */}
      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>8.200</Text>
        <Text style={styles.stepsLabel}>pasos de 10.000</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>82% completado</Text>
      </View>

      <Text style={styles.sectionTitle}>Resumen</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="610 kcal" label="Calorías" />
        <StatCard icon="⏱" value="55 min" label="Actividad" />
        <StatCard icon="❤️" value="69" label="Pulsaciones" />
        <StatCard icon="📍" value="6,3 km" label="Distancia" />
      </View>

      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <Activity title="Carrera al aire libre" detail="6,3 km · 35 min" />
      <Activity title="Entrenamiento en sala" detail="45 min · Alta intensidad" />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ title, detail }: { title: string; detail: string }) {
  return (
    <View style={styles.activity}>
      <View>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#052e16', // Paleta fitness verde bosque
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#86efac',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24,
  },
  goalCard: {
    backgroundColor: '#14532d',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: '#86efac',
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#bbf7d0',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#064e3b',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '82%', // 82% correspondiente a 8.200 pasos
    height: '100%',
    backgroundColor: '#4ade80',
  },
  percentage: {
    color: '#86efac',
    marginTop: 9,
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#14532d',
    borderRadius: 16,
    padding: 18,
  },
  statIcon: {
    fontSize: 28,
  },
  statValue: {
    marginTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    marginTop: 4,
    color: '#86efac',
  },
  activity: {
    backgroundColor: '#14532d',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
  },
  activityTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  activityDetail: {
    marginTop: 4,
    color: '#86efac',
  },
});
