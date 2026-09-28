# Cuaderno 0 · React Native + Expo: Solución Completa de Ejercicios

Este documento contiene la resolución detallada, paso a paso y con código TypeScript de todos los ejercicios del **Cuaderno 0 de React Native con Expo** ([https://albertohdezakkari.github.io/03---REACTNATIVE/](https://albertohdezakkari.github.io/03---REACTNATIVE/)), incluyendo:

- Requisitos cumplidos al 100%.
- Código fuente oficial y código con los **Retos (Challenges)** resueltos.
- Respuestas a todas las preguntas de **Retrieval (Recuperación)**.
- Respuestas a los tests de comprobación (**Check**) con sus explicaciones.
- Respuestas a las preguntas de **Reflexión**.
- Solución completa con justificación de las **20 preguntas del Repaso Final (Quiz)**.
- Estructura del proyecto Expo lista para ejecutar en móvil o web.

---

## 🛠️ 0. Configuración del Entorno

Tal como indica el cuaderno, el proyecto ha sido inicializado con la plantilla TypeScript oficial de Expo:

```bash
cd "c:\Users\Roman\Desktop\GRADO SUPERIOR\PROGRAMACION AKKARI\02 - REACT"
npx create-expo-app@latest cuaderno-rn --template blank-typescript
```

### Cómo ejecutar la aplicación:
1. Acceder al directorio:
   ```bash
   cd cuaderno-rn
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npx expo start
   # O en web:
   npx expo start --web
   ```
3. Escanear el código QR con **Expo Go** en Android/iOS o pulsar `w` para abrir en el navegador web.

---

## 📱 Estructura de Archivos del Proyecto

El proyecto cuenta con un navegador interactivo central en `App.tsx` que permite alternar entre cada uno de los ejercicios y el quiz de evaluación, además de archivos independientes por ejercicio:

```text
02 - REACT/
├── package.json                   # Scripts raíz para arrancar el proyecto
├── SOLUCIONES_CUADERNO_0.md       # Esta guía completa
└── cuaderno-rn/                   # Proyecto Expo
    ├── App.tsx                    # Navegador maestro interactivo
    ├── package.json
    ├── tsconfig.json
    └── src/
        └── exercises/
            ├── Ejercicio01.tsx    # Mi primera pantalla + Reto
            ├── Ejercicio02.tsx    # Tarjeta de bienvenida + Reto paleta
            ├── Ejercicio03.tsx    # Ficha de perfil + Reto 3ª estadística
            ├── Ejercicio04.tsx    # Pantalla de acceso + Reto registro
            ├── Ejercicio05.tsx    # Tarjeta de producto + Reto Oferta
            ├── Ejercicio06.tsx    # Dashboard métricas + Reto 5ª tarjeta
            ├── Ejercicio07.tsx    # Feed de noticias + Reto 4ª noticia
            ├── Ejercicio08.tsx    # Catálogo FlatList + Reto +2 productos
            ├── Ejercicio09.tsx    # Interfaz bancaria + Reto mov. positivo
            ├── Ejercicio10.tsx    # Proyecto Final Fitness personalizado
            └── QuizRepaso.tsx     # Repaso final interactivo (20 preguntas)
```

---

## 🧩 Ejercicio 1: Mi primera pantalla (Nivel 1 · Muy guiado)

### Objetivo y Conceptos
- **Objetivo**: Construir una pantalla centrada con un título y un subtítulo.
- **Conceptos**: `View`, `Text`, `StyleSheet`, `flex: 1`, `justifyContent`, `alignItems`.

### Requisitos Cumplidos:
- [x] Usar un `View` como contenedor principal.
- [x] Mostrar un título y un subtítulo con `Text`.
- [x] Centrar el contenido horizontal (`alignItems: 'center'`) y verticalmente (`justifyContent: 'center'`).
- [x] Aplicar un color de fondo claro (`#f1f5f9`).
- [x] El título destaca visualmente sobre el subtítulo (`fontSize: 32`, `fontWeight: 'bold'`).

### Código Solución con Reto (Tercera línea "Curso 2026/27"):
```tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ejercicio01() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      {/* Reto: Añadida tercera línea sin romper el centrado */}
      <Text style={styles.course}>Curso 2026/27</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 18,
    color: '#64748b',
  },
  course: {
    marginTop: 12,
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '600',
  },
});
```

### Preguntas del Ejercicio 1:
- **Retrieval**: *¿Qué dos propiedades necesitas para centrar los hijos de un View en ambos ejes?*
  - **Respuesta**: Se necesitan `justifyContent: 'center'` (centra en el eje principal, por defecto vertical) y `alignItems: 'center'` (centra en el eje transversal, por defecto horizontal).
- **Check**: *¿Qué consigue `flex: 1` en el contenedor principal?*
  - **Respuesta**: **Opción B**: Hace que el contenedor ocupe todo el espacio disponible en la pantalla.
- **Reflexión**: *Explica con tus palabras la diferencia entre el componente `View` y el componente `Text`.*
  - **Respuesta**: `View` actúa como una caja o contenedor estructural equivalente a un `<div>` (sin estilos de texto ni capacidad de mostrar caracteres directamente), mientras que `Text` es el único componente diseñado y requerido en React Native para renderizar cadenas de texto visibles con estilos tipográficos (fuente, peso, tamaño, color).

---

## 🧩 Ejercicio 2: Tarjeta de bienvenida (Nivel 2 · Guiado)

### Objetivo y Conceptos
- **Objetivo**: Comprender el Box Model de React Native mediante una tarjeta.
- **Conceptos**: `padding`, `margin`, `borderRadius`, `backgroundColor`.

### Requisitos Cumplidos:
- [x] Tarjeta blanca sobre fondo gris claro (`#eef2f7`).
- [x] Padding interior (`padding: 28`) y esquinas redondeadas (`borderRadius: 20`).
- [x] Título, descripción y botón visual estilizado.
- [x] Reto completado: Segunda variante de la tarjeta con paleta alternativa (Dark & Emerald).

### Código Solución:
```tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Ejercicio02() {
  const [darkVariant, setDarkVariant] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.card, darkVariant && styles.altCard]}>
        <Text style={[styles.title, darkVariant && styles.altTitle]}>
          {darkVariant ? '¡Bienvenido a Bordo!' : '¡Bienvenido!'}
        </Text>
        <Text style={[styles.subtitle, darkVariant && styles.altSubtitle]}>
          {darkVariant
            ? 'Variante del reto con paleta Dark & Emerald'
            : 'Diseño de interfaces con React Native'}
        </Text>
        <Pressable
          style={[styles.button, darkVariant && styles.altButton]}
          onPress={() => setDarkVariant(!darkVariant)}
        >
          <Text style={[styles.buttonText, darkVariant && styles.altButtonText]}>
            {darkVariant ? 'VER MODO CLARO' : 'COMENZAR (CAMBIAR PALETA)'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#eef2f7',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
    elevation: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // Variante del Reto (Challenge)
  altCard: {
    backgroundColor: '#0f172a',
    borderColor: '#334155',
    borderWidth: 1,
  },
  altTitle: {
    color: '#f8fafc',
  },
  altSubtitle: {
    color: '#94a3b8',
  },
  altButton: {
    backgroundColor: '#10b981',
  },
  altButtonText: {
    color: '#022c22',
  },
});
```

### Preguntas del Ejercicio 2:
- **Retrieval**: *¿Qué propiedad hace que el contenedor principal ocupe la pantalla?*
  - **Respuesta**: `flex: 1`.
- **Check**: *¿Qué propiedad genera espacio ENTRE el contenido y el borde de una tarjeta?*
  - **Respuesta**: **padding** (el margin crea espacio por fuera de los bordes hacia elementos adyacentes).
- **Reflexión**: *¿Por qué usarías `padding` en una tarjeta en lugar de `margin` para separar el texto del borde?*
  - **Respuesta**: Porque el `padding` crea espacio interior dentro del área delimitada por el fondo y el borde redondeado de la tarjeta, permitiendo que el texto respire sin salirse de la tarjeta. Si usáramos `margin` en el texto, éste empujaría el tamaño global pero el borde de la tarjeta no contendría el relleno coloreado de manera controlada.

---

## 🧩 Ejercicio 3: Ficha de perfil (Nivel 3 · Guiado)

### Objetivo y Conceptos
- **Objetivo**: Introducir imágenes y distribución horizontal con Flexbox.
- **Conceptos**: `Image`, `flexDirection: 'row'`, `gap`, avatar circular (`borderRadius: width / 2`).

### Requisitos Cumplidos:
- [x] Mostrar avatar, nombre y profesión.
- [x] Avatar circular (`width: 110`, `height: 110`, `borderRadius: 55`).
- [x] Dos estadísticas base en fila.
- [x] Reto completado: Añadida la tercera estadística requerida (*Seguidores 1280*).

### Código Solución:
```tsx
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
          {/* Reto: Tercera estadística añadida */}
          <View style={styles.stat}>
            <Text style={styles.number}>1280</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
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
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    marginTop: 18,
    fontSize: 25,
    fontWeight: 'bold',
  },
  job: {
    marginTop: 4,
    color: '#64748b',
  },
  stats: {
    flexDirection: 'row',
    gap: 32,
    marginTop: 24,
  },
  stat: {
    alignItems: 'center',
  },
  number: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  statLabel: {
    marginTop: 4,
    color: '#64748b',
    fontSize: 13,
  },
});
```

### Preguntas del Ejercicio 3:
- **Retrieval**: *¿Qué diferencia había entre `padding` y `margin`?*
  - **Respuesta**: El `padding` es el espacio interior entre el contenido y los bordes del propio elemento; el `margin` es el espacio exterior que separa al elemento de otros elementos vecinos.
- **Check**: *¿Qué propiedad cambia la dirección de distribución de vertical a horizontal?*
  - **Respuesta**: `flexDirection: 'row'`.
- **Reflexión**: *Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?*
  - **Respuesta**: Se debe aplicar directamente en el contenedor padre inmediato que envuelve a los dos bloques de estadísticas (`styles.stats`), porque `flexDirection` define cómo se disponen los hijos directos de ese View en concreto, sin alterar la disposición en columna del resto de elementos de la tarjeta.

---

## 🧩 Ejercicio 4: Pantalla de acceso (Nivel 4 · Guiado)

### Objetivo y Conceptos
- **Objetivo**: Construir visualmente un formulario sin trabajar con estado ni validaciones.
- **Conceptos**: `TextInput`, `Pressable`, `secureTextEntry`.

### Requisitos Cumplidos:
- [x] Título y texto introductorio.
- [x] Campo de correo electrónico (`placeholder="Correo electrónico"`).
- [x] Campo de contraseña con propiedad `secureTextEntry`.
- [x] Botón `Pressable` destacado.
- [x] Sin `useState` ni lógica de validación (solo diseño visual).
- [x] Reto completado: Texto centrado inferior *"¿No tienes cuenta? Regístrate"*.

### Código Solución:
```tsx
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Ejercicio04() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Introduce tus datos para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#94a3b8"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#94a3b8"
        secureTextEntry
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </Pressable>

      {/* Reto: Texto de registro inferior */}
      <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    color: '#64748b',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
    fontSize: 16,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  register: {
    textAlign: 'center',
    marginTop: 22,
    color: '#64748b',
    fontSize: 14,
  },
});
```

### Preguntas del Ejercicio 4:
- **Retrieval**: *¿Qué propiedad usaste para crear esquinas redondeadas?*
  - **Respuesta**: `borderRadius`.
- **Check**: *¿Qué propiedad se utiliza en un TextInput para ocultar visualmente una contraseña?*
  - **Respuesta**: `secureTextEntry`.
- **Reflexión**: *¿Por qué en este ejercicio no necesitamos todavía `useState`?*
  - **Respuesta**: Porque el objetivo de este cuaderno inicial es exclusivamente la **maquetación visual y estructural (UI)**. Los campos de texto y botones se pueden renderizar con sus placeholders y estilos sin requerir capturar valores ni gestionar lógica de validación o envío.

---

## 🧩 Ejercicio 5: Tarjeta de producto (Nivel 5 · Combinación)

### Objetivo y Conceptos
- **Objetivo**: Combinar imagen, jerarquía tipográfica y distribución horizontal.
- **Conceptos**: `overflow: 'hidden'`, `justifyContent: 'space-between'`.

### Requisitos Cumplidos:
- [x] Imagen a todo el ancho de la tarjeta (`width: '100%'`).
- [x] Categoría, nombre, valoración y precio.
- [x] Precio y botón en la misma fila con `justifyContent: 'space-between'`.
- [x] Esquinas redondeadas sobre la imagen gracias a `overflow: 'hidden'`.
- [x] Reto completado: Etiqueta badge de *"OFERTA"* situada antes del nombre.

### Código Solución:
```tsx
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
          <View style={styles.badgeRow}>
            <Text style={styles.category}>TECNOLOGÍA</Text>
            {/* Reto: Etiqueta OFERTA */}
            <View style={styles.offerBadge}>
              <Text style={styles.offerText}>OFERTA</Text>
            </View>
          </View>

          <Text style={styles.title}>Auriculares Wireless Pro</Text>
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
    overflow: 'hidden', // Recorta la imagen a las esquinas redondeadas
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
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  offerText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
```

### Preguntas del Ejercicio 5:
- **Retrieval**: *¿Qué propiedad convierte un View en una fila?*
  - **Respuesta**: `flexDirection: 'row'`.
- **Check**: *¿Por qué puede ser útil `overflow: 'hidden'` en una tarjeta con imagen y borderRadius?*
  - **Respuesta**: Para recortar el contenido que sobresale del borde redondeado. Sin ello, la imagen rectangular tapa las esquinas superiores redondeadas de la tarjeta.
- **Reflexión**: *¿Qué información debería tener mayor jerarquía visual: categoría, nombre del producto o precio? Justifica tu decisión.*
  - **Respuesta**: El nombre del producto debe tener la mayor jerarquía visual (tamaño y peso tipográfico) para que el usuario identifique al instante qué se está vendiendo, seguido del precio (destacado numéricamente para decidir la compra) y por último la categoría como metadato secundario de apoyo.

---

## 🧩 Ejercicio 6: Dashboard de métricas (Nivel 6 · Combinación)

### Objetivo y Conceptos
- **Objetivo**: Construir un grid sencillo de 2 columnas con Flexbox.
- **Conceptos**: `flexWrap: 'wrap'`, `width: '48%'`.

### Requisitos Cumplidos:
- [x] Mostrar métricas distribuidas en dos columnas.
- [x] Cada tarjeta tiene etiqueta, valor y variación.
- [x] La variación positiva se distingue visualmente en color verde (`#16a34a`).
- [x] Reto completado: Añadida la 5ª tarjeta y documentada la explicación de su comportamiento.

### Código Solución:
```tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Ejercicio06() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Resumen del negocio</Text>

      <View style={styles.grid}>
        <Metric title="Ventas" value="12.450 €" change="+12%" />
        <Metric title="Clientes" value="348" change="+8%" />
        <Metric title="Pedidos" value="1.024" change="+18%" />
        <Metric title="Conversión" value="7,4%" change="+2%" />
        {/* Reto: Quinta tarjeta */}
        <Metric title="Devoluciones" value="1,2%" change="-0,5%" isChallenge />
      </View>
    </ScrollView>
  );
}

function Metric({ title, value, change, isChallenge }: { title: string; value: string; change: string; isChallenge?: boolean }) {
  return (
    <View style={[styles.card, isChallenge && styles.challengeCard]}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.change}>{change}</Text>
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
  },
  subtitle: {
    color: '#64748b',
    marginTop: 5,
    marginBottom: 24,
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
  },
  challengeCard: {
    borderColor: '#3b82f6',
    borderWidth: 1.5,
  },
  label: {
    color: '#64748b',
  },
  value: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 8,
  },
  change: {
    color: '#16a34a',
    fontWeight: 'bold',
    marginTop: 8,
  },
});
```

### Preguntas del Ejercicio 6:
- **Retrieval**: *¿Qué hacía `space-between` en el ejercicio anterior?*
  - **Respuesta**: Distribuía los elementos a lo largo de la fila empujando el primero hacia el extremo izquierdo y el último hacia el extremo derecho, dejando todo el espacio sobrante entre ellos.
- **Check**: *¿Qué ocurre cuando usamos `flexWrap: 'wrap'` en un contenedor horizontal?*
  - **Respuesta**: Los elementos que exceden el ancho de la fila pasan automáticamente a una nueva línea hacia abajo.
- **Reto y Reflexión**: *Añade una quinta tarjeta. Observa dónde se coloca y explica por qué. ¿Por qué un ancho del 48% puede ser más práctico que 50%?*
  - **Respuesta del Reto**: La quinta tarjeta se ubica al inicio de una tercera fila, ocupando el 48% izquierdo. Ocurre porque cada fila solo puede albergar dos tarjetas del 48% (48% + 48% = 96% + el `gap` del 4% restante llena el 100%). La 5ª tarjeta desborda y salta a la siguiente fila.
  - **Respuesta de la Reflexión**: Usar 48% en lugar de 50% es fundamental cuando hay espaciado (`gap`, márgenes o paddings). Con 50%, cualquier separación adicional sumaría más del 100% y forzaría a que cada tarjeta cayese a una línea individual (1 columna en lugar de 2).

---

## 🧩 Ejercicio 7: Feed de noticias (Nivel 7 · Nuevo patrón)

### Objetivo y Conceptos
- **Objetivo**: Introducir `ScrollView` y el concepto de componente reutilizable con props.
- **Conceptos**: `ScrollView`, componente reutilizable (`NewsCard`), tipado de props.

### Requisitos Cumplidos:
- [x] Usar `ScrollView` como contenedor desplazable.
- [x] Crear componente reutilizable `NewsCard`.
- [x] `NewsCard` recibe como mínimo `title` y `category` mediante props.
- [x] 3 noticias base con contenidos distintos.
- [x] Reto completado: Añadida una 4ª noticia reutilizando `NewsCard` sin duplicar JSX.

### Código Solución:
```tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Ejercicio07() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Noticias</Text>

      <NewsCard category="TECNOLOGÍA" title="La IA transforma el desarrollo de software" />
      <NewsCard category="MÓVIL" title="React Native continúa evolucionando" />
      <NewsCard category="CLOUD" title="Las arquitecturas cloud ganan protagonismo" />
      {/* Reto: Cuarta noticia añadida sin duplicar el componente */}
      <NewsCard category="CIBERSEGURIDAD" title="Nuevos estándares de autenticación biométrica" />
    </ScrollView>
  );
}

function NewsCard({ category, title }: { category: string; title: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>Hace 2 horas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },
  category: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 7,
    fontSize: 19,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 10,
    color: '#94a3b8',
  },
});
```

### Preguntas del Ejercicio 7:
- **Retrieval**: *¿Qué propiedades usarías para hacer una imagen de avatar circular?*
  - **Respuesta**: Se requiere establecer un `width` y un `height` idénticos (ej. 100×100) y un `borderRadius` igual a la mitad de ese valor (ej. `borderRadius: 50`).
- **Check**: *¿Cuál es la principal ventaja de extraer `NewsCard` como componente?*
  - **Respuesta**: Evita duplicar la estructura visual y permite reutilizarla con diferentes datos, mejorando drásticamente el mantenimiento del código.
- **Reflexión**: *¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?*
  - **Respuesta**: Deben cambiar los datos dinámicos (título, categoría, fecha, imagen), los cuales se envían por props. Debe permanecer igual la estructura JSX contenedora, la jerarquía visual, los márgenes, paddings, tipografías y estilos definidos en el componente.

---

## 🧩 Ejercicio 8: Catálogo con FlatList (Nivel 8 · Datos + interfaz)

### Objetivo y Conceptos
- **Objetivo**: Separar datos y presentación utilizando un array y el componente optimizado `FlatList`.
- **Conceptos**: Array de objetos, `FlatList`, `renderItem`, `keyExtractor`, `numColumns`.

### Requisitos Cumplidos:
- [x] Array `products` definido fuera del cuerpo del componente.
- [x] Uso de `FlatList` con `numColumns={2}` y `columnWrapperStyle`.
- [x] Cada tarjeta muestra icono, nombre y precio.
- [x] Uso de `keyExtractor={(item) => item.id}`.
- [x] Reto completado: Dos productos adicionales añadidos al array (total 8 productos) verificando que el JSX permanece intacto.

### Código Solución:
```tsx
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', icon: '⌨️', name: 'Teclado', price: '59 €' },
  { id: '2', icon: '🖱️', name: 'Ratón', price: '39 €' },
  { id: '3', icon: '🖥️', name: 'Monitor', price: '199 €' },
  { id: '4', icon: '🎧', name: 'Auriculares', price: '79 €' },
  { id: '5', icon: '💻', name: 'Portátil', price: '899 €' },
  { id: '6', icon: '📱', name: 'Móvil', price: '599 €' },
  // Reto: Dos productos añadidos sin tocar el JSX
  { id: '7', icon: '⌚', name: 'Smartwatch', price: '129 €' },
  { id: '8', icon: '📷', name: 'Webcam', price: '49 €' },
];

export default function Ejercicio08() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  icon: {
    fontSize: 36,
  },
  name: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 6,
    color: '#2563eb',
    fontWeight: 'bold',
  },
});
```

### Preguntas del Ejercicio 8:
- **Retrieval**: *¿Qué problema resolvía un componente reutilizable en el ejercicio anterior?*
  - **Respuesta**: Resolvía la duplicación de código permitiendo usar una única plantilla visual para múltiples bloques de contenido.
- **Check**: *En FlatList, ¿qué propiedad contiene la colección que se va a mostrar?*
  - **Respuesta**: La prop `data`.
- **Reflexión**: *¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?*
  - **Respuesta**: Separa la capa de datos de la capa de presentación. Permite modificar, ordenar, añadir o consumir datos desde una API externa sin tener que modificar la estructura gráfica de la aplicación, haciéndola escalable y libre de errores al editar código repetido.

---

## 🧩 Ejercicio 9: Interfaz bancaria (Nivel 9 · Resolución autónoma)

### Objetivo y Conceptos
- **Objetivo**: Combinar estructuras reutilizables, filas, tarjetas y jerarquía en una pantalla realista.
- **Conceptos**: Composición de componentes, legibilidad de datos financieros.

### Requisitos Cumplidos:
- [x] Saludo ("Buenos días 👋") y nombre del usuario.
- [x] Tarjeta de saldo bancario destacada en fondo oscuro.
- [x] Tres botones de acciones rápidas en una fila (`Transferir`, `Bizum`, `Tarjetas`).
- [x] Componente `Movement` reutilizable con tipado TypeScript.
- [x] Al menos 4 movimientos registrados.
- [x] Reto completado: Añadido un movimiento positivo (`+2.340 €`) legible y visualmente claro sin alterar la estructura del componente.

### Código Solución:
```tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';

export default function Ejercicio09() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
        <Text style={styles.account}>ES91 •••• •••• 7821</Text>
      </View>

      <View style={styles.actionsRow}>
        <ActionButton label="Transferir" icon="💸" />
        <ActionButton label="Bizum" icon="📱" />
        <ActionButton label="Tarjetas" icon="💳" />
      </View>

      <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      <Movement title="Supermercado" date="Hoy" amount="-42,80 €" />
      <Movement title="Cafetería" date="Ayer" amount="-3,20 €" />
      {/* Reto: Movimiento positivo distinguible */}
      <Movement title="Nómina" date="20 septiembre" amount="+2.340 €" isPositive />
      <Movement title="Electricidad" date="18 septiembre" amount="-74,20 €" />
    </ScrollView>
  );
}

function ActionButton({ label, icon }: { label: string; icon: string }) {
  return (
    <Pressable style={styles.actionBtn}>
      <Text style={styles.actionIcon}>{icon}</Text>
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}

function Movement({ title, date, amount, isPositive }: { title: string; date: string; amount: string; isPositive?: boolean }) {
  const isGain = isPositive || amount.startsWith('+');
  return (
    <View style={styles.movement}>
      <View style={styles.movementInfo}>
        <Text style={styles.movementTitle}>{title}</Text>
        <Text style={styles.movementDate}>{date}</Text>
      </View>
      <Text style={[styles.amount, isGain ? styles.gain : styles.expense]}>
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
  content: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  hello: {
    color: '#64748b',
  },
  user: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balanceCard: {
    backgroundColor: '#111827',
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
    marginTop: 24,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  actionLabel: {
    fontSize: 12,
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
    fontSize: 13,
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
```

### Preguntas del Ejercicio 9:
- **Retrieval**: *¿Qué información se pasa a un componente mediante props?*
  - **Respuesta**: Se pasa cualquier dato dinámico que el componente necesite para renderizarse (títulos, textos, números, indicadores booleanos, callbacks de funciones, URLs de imagen, etc.).
- **Check**: *Si cuatro movimientos comparten estructura pero cambian título, fecha e importe, ¿qué opción es más mantenible?*
  - **Respuesta**: Crear un componente `Movement` y pasar datos mediante props.
- **Reflexión**: *¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.*
  - **Respuesta**: Se deben convertir en componentes aquellos elementos que se repiten con estructura idéntica (como `Movement` y los botones de acción rápida `ActionButton`). Por el contrario, la tarjeta de saldo y la cabecera del usuario pueden quedarse en `App` porque son piezas únicas de la pantalla sin multiplicidad.

---

## 🧩 Ejercicio 10: Proyecto final: Fitness (Nivel 10 · Integrador)

### Objetivo y Conceptos
- **Objetivo**: Integrar de forma autónoma todo el diseño visual trabajado en el cuaderno.
- **Conceptos**: Descomposición modular, barra de progreso con dos `View`, grid 2×2, scroll continuo, consistencia visual.

### Requisitos Cumplidos:
- [x] Saludo y nombre del usuario.
- [x] Tarjeta principal con objetivo de pasos (7.540 de 10.000).
- [x] Barra de progreso visual que representa el 75% usando dos `View`.
- [x] Cuatro métricas en dos columnas mediante componente `StatCard`.
- [x] Sección de actividad reciente con componente `Activity`.
- [x] Diseño coherente y responsive dentro de pantalla móvil.
- [x] Reto completado: Personalización de paleta a tema nocturno deportivo de alto contraste (*Dark Fitness*), con iconos, tendencias y detalles de ritmo.

### Código Solución:
*(Véase archivo completo en `cuaderno-rn/src/exercises/Ejercicio10.tsx`)*

```tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Ejercicio10() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Laura 👋</Text>

      {/* Tarjeta de objetivo con barra de progreso */}
      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>7.540</Text>
        <Text style={styles.stepsLabel}>pasos de 10.000</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>75% completado</Text>
      </View>

      {/* Grid 2x2 de Métricas */}
      <Text style={styles.sectionTitle}>Resumen de hoy</Text>
      <View style={styles.grid}>
        <StatCard icon="🔥" value="520" label="Calorías" />
        <StatCard icon="⏱" value="48 min" label="Actividad" />
        <StatCard icon="❤️" value="72" label="Pulsaciones" />
        <StatCard icon="📍" value="5,6 km" label="Distancia" />
      </View>

      {/* Actividad Reciente */}
      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <Activity title="Carrera" detail="5,2 km · 28 min" />
      <Activity title="Bicicleta" detail="12 km · 42 min" />
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
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityDetail}>{detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1329', // Reto: Tema Dark Fitness
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  greeting: {
    color: '#94a3b8',
    fontSize: 16,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  goalCard: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: '#38bdf8',
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 10,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#94a3b8',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#334155',
    borderRadius: 5,
    marginTop: 20,
    overflow: 'hidden',
  },
  progress: {
    width: '75%',
    height: '100%',
    backgroundColor: '#22c55e',
  },
  percentage: {
    color: '#22c55e',
    marginTop: 8,
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
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 18,
  },
  statIcon: {
    fontSize: 26,
  },
  statValue: {
    marginTop: 10,
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    marginTop: 4,
    color: '#94a3b8',
  },
  activity: {
    backgroundColor: '#1e293b',
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
    color: '#94a3b8',
  },
});
```

### Preguntas del Ejercicio 10:
- **Retrieval**: *Enumera sin mirar tres herramientas que ya sabes utilizar para organizar una interfaz compleja.*
  - **Respuesta**:
    1. **Flexbox** (`flexDirection`, `justifyContent`, `alignItems`, `flexWrap`, `gap`) para alineación y rejillas.
    2. **Componentes reutilizables con Props** para evitar duplicación y modularizar el código.
    3. **ScrollView / FlatList** para permitir scroll y renderizado eficiente de colecciones.
- **Check**: *En el proyecto final, ¿qué enfoque muestra mejor lo aprendido?*
  - **Respuesta**: **Dividir la interfaz en bloques, resolver cada uno y reutilizar componentes.**
- **Reflexión**: *¿Qué decisiones visuales has tomado por tu cuenta y qué conceptos de ejercicios anteriores has recuperado?*
  - **Respuesta**: Se ha implementado un tema de alto contraste *Dark Fitness* (`#0b1329` y tarjetas en `#1e293b`), usando el Box Model del ejercicio 2 para las tarjetas, la barra de progreso creada con dos `View` y `overflow: 'hidden'` del ejercicio 5, el grid 2×2 con `flexWrap: 'wrap'` del ejercicio 6, y la extracción de componentes parametrizados del ejercicio 7 y 9.

---

## 📝 20 Preguntas del Repaso Final (Quiz) con Respuestas Explicadas

A continuación se detalla la corrección íntegra de las 20 preguntas del test oficial del cuaderno:

| Nº | Pregunta | Respuesta Correcta | Justificación |
|:---:|---|---|---|
| **1** | ¿Qué componente se utiliza normalmente como contenedor visual básico en React Native? | **`View`** | React Native no utiliza HTML ni `<div>`; `View` es la unidad fundamental de contención visual. |
| **2** | ¿Qué componente muestra texto en React Native? | **`Text`** | Cualquier texto visible en pantalla debe estar obligatoriamente encapsulado en un componente `Text`. |
| **3** | ¿Qué consigue `flex: 1` en un contenedor principal? | **Ocupa el espacio disponible** | Permite que el elemento se expanda y rellene todo el espacio libre que le deja su contenedor padre. |
| **4** | ¿Qué propiedad centra normalmente a los hijos en el eje principal? | **`justifyContent`** | `justifyContent` distribuye el espacio a lo largo del eje principal (`flexDirection`). |
| **5** | Con `flexDirection: 'column'`, ¿cuál es normalmente el eje principal? | **Vertical** | En orientación por columna, el flujo de arriba hacia abajo convierte al eje vertical en el eje principal. |
| **6** | ¿Qué diferencia esencial existe entre padding y margin? | **Padding es interior y margin exterior** | El padding separa el contenido de su propio borde interior, mientras que el margin separa el elemento de los demás. |
| **7** | ¿Qué combinación convierte una imagen de 100×100 en circular? | **`borderRadius: 50`** | Un radio de curvatura igual a la mitad exacta del ancho y alto (100 / 2 = 50) produce un círculo perfecto. |
| **8** | ¿Qué propiedad coloca los hijos en horizontal? | **`flexDirection: 'row'`** | En React Native la dirección por defecto es vertical (`column`); `row` los alinea horizontalmente. |
| **9** | ¿Qué componente es adecuado para introducir texto? | **`TextInput`** | Es el componente nativo estándar para campos de entrada de teclado. |
| **10** | ¿Qué propiedad de TextInput oculta visualmente una contraseña? | **`secureTextEntry`** | Al activarla (booleano `true`), transforma los caracteres introducidos en puntos o asteriscos protegidos. |
| **11** | ¿Qué componente utilizarías como zona pulsable en los ejercicios del cuaderno? | **`Pressable`** | `Pressable` es el componente moderno recomendado para detectar eventos de interacción táctil. |
| **12** | ¿Para qué utilizamos `overflow: 'hidden'` en una tarjeta con imagen? | **Para recortar contenido que sobresale** | Impide que la imagen rectangular tape las esquinas redondeadas (`borderRadius`) del contenedor padre. |
| **13** | ¿Qué hace `justifyContent: 'space-between'` en una fila? | **Los separa hacia los extremos** | Empuja el primer elemento al inicio, el último al final y reparte equitativamente el espacio restante en medio. |
| **14** | ¿Qué propiedad permite que elementos de una fila pasen a otra línea? | **`flexWrap: 'wrap'`** | Permite que los elementos desborden y salten a líneas subsiguientes en lugar de comprimirse o salir de pantalla. |
| **15** | ¿Cuándo es especialmente apropiado usar ScrollView? | **Cuando queremos que el contenido pueda desplazarse** | Permite que el usuario navegue en vertical u horizontal cuando la interfaz supera el tamaño físico de la pantalla. |
| **16** | ¿Cuál es una ventaja principal de crear un componente reutilizable? | **Evitar repetir estructura** | Mantiene una sola definición gráfica mantenible y permite instanciarla con distintas props de datos. |
| **17** | En una FlatList, ¿qué prop recibe la colección? | **`data`** | La prop `data` acepta el array de objetos que la lista se encargará de iterar. |
| **18** | ¿Para qué sirve `renderItem` en FlatList? | **Para definir cómo se dibuja cada elemento** | Es una función que recibe `{ item, index }` y devuelve el componente JSX que representa a ese elemento. |
| **19** | Si tres tarjetas tienen la misma estructura pero cambian sus datos, ¿qué enfoque es más mantenible? | **Crear un componente y pasar props** | Centraliza el diseño en una sola función/componente y evita la duplicación masiva de código JSX. |
| **20** | Antes de programar una interfaz compleja, ¿qué estrategia es más adecuada? | **Dividirla en bloques visuales y resolverlos por partes** | Descomponer en cajas simples y componentes modulares reduce la complejidad y facilita el desarrollo. |

---

## 🎯 Conclusión y Verificación

Todos los ejercicios han sido programados, tipados con TypeScript estricto y validados con el compilador (`tsc --noEmit`), garantizando cero errores de compilación y pleno cumplimiento de los requerimientos de la asignatura.
