# Repaso Final · 20 Preguntas con Feedback

Respuestas oficiales a las 20 preguntas de autoevaluación del Cuaderno 0 de React Native con Expo:

---

### 1. ¿Qué componente se utiliza normalmente como contenedor visual básico en React Native?
- a) `div`
- **b) `View`**  *(Correcta)*
- c) `Container`
- d) `Section`

> **Explicación**: React Native no utiliza etiquetas HTML. `View` es el contenedor visual básico equivalente al `div`.

---

### 2. ¿Qué componente muestra texto en React Native?
- a) `Label`
- b) `Paragraph`
- **c) `Text`**  *(Correcta)*
- d) `Span`

> **Explicación**: Todo texto visible en pantalla debe estar obligatoriamente dentro de un componente `Text`.

---

### 3. ¿Qué consigue `flex: 1` en un contenedor principal?
- **a) Ocupa el espacio disponible**  *(Correcta)*
- b) Crea una fila
- c) Cambia el color
- d) Añade padding

> **Explicación**: `flex: 1` permite al contenedor expandirse para ocupar todo el espacio disponible en pantalla.

---

### 4. ¿Qué propiedad centra normalmente a los hijos en el eje principal?
- a) `alignItems`
- **b) `justifyContent`**  *(Correcta)*
- c) `textAlign`
- d) `margin`

> **Explicación**: `justifyContent` distribuye los elementos hijos a lo largo del eje principal.

---

### 5. Con `flexDirection: 'column'`, ¿cuál es normalmente el eje principal?
- a) Horizontal
- **b) Vertical**  *(Correcta)*
- c) Diagonal
- d) No existe

> **Explicación**: Con `column` (la orientación por defecto en React Native), el eje principal es vertical.

---

### 6. ¿Qué diferencia esencial existe entre padding y margin?
- a) No existe
- **b) Padding es interior y margin exterior**  *(Correcta)*
- c) Margin es interior y padding exterior
- d) Ambos cambian el tamaño de letra

> **Explicación**: `padding` separa el contenido del borde interior; `margin` separa el elemento respecto a otros elementos exteriores.

---

### 7. ¿Qué combinación convierte una imagen de 100×100 en circular?
- a) `borderRadius: 10`
- **b) `borderRadius: 50`**  *(Correcta)*
- c) `padding: 50`
- d) `flex: 50`

> **Explicación**: Un radio de borde igual a la mitad exacta del ancho y alto (100 / 2 = 50) produce un círculo perfecto.

---

### 8. ¿Qué propiedad coloca los hijos en horizontal?
- **a) `flexDirection: 'row'`**  *(Correcta)*
- b) `display: 'inline'`
- c) `orientation: 'horizontal'`
- d) `justifyContent: 'row'`

> **Explicación**: En React Native usamos `flexDirection: 'row'` para distribuir elementos en una fila horizontal.

---

### 9. ¿Qué componente es adecuado para introducir texto?
- a) `Input`
- b) `TextField`
- **c) `TextInput`**  *(Correcta)*
- d) `FormInput`

> **Explicación**: `TextInput` es el componente estándar de React Native para la entrada de texto por teclado.

---

### 10. ¿Qué propiedad de TextInput oculta visualmente una contraseña?
- **a) `secureTextEntry`**  *(Correcta)*
- b) `passwordMode`
- c) `hidden`
- d) `privateText`

> **Explicación**: `secureTextEntry` convierte visualmente los caracteres introducidos en puntos protegidos.

---

### 11. ¿Qué componente utilizarías como zona pulsable en los ejercicios del cuaderno?
- a) `ButtonView`
- **b) `Pressable`**  *(Correcta)*
- c) `Click`
- d) `TouchableDiv`

> **Explicación**: `Pressable` es el componente moderno recomendado para responder a pulsaciones e interacciones táctiles.

---

### 12. ¿Para qué utilizamos `overflow: 'hidden'` en una tarjeta con imagen?
- a) Para centrarla
- **b) Para recortar contenido que sobresale**  *(Correcta)*
- c) Para ocultar el texto
- d) Para hacer scroll

> **Explicación**: Resulta imprescindible para que la imagen respete visualmente las esquinas redondeadas (`borderRadius`) del contenedor padre.

---

### 13. ¿Qué hace `justifyContent: 'space-between'` en una fila?
- a) Superpone elementos
- **b) Los separa hacia los extremos**  *(Correcta)*
- c) Los hace circulares
- d) Los convierte en columnas

> **Explicación**: Distribuye el espacio entre los hijos, situando el primer elemento al inicio y el último al final.

---

### 14. ¿Qué propiedad permite que elementos de una fila pasen a otra línea?
- **a) `flexWrap: 'wrap'`**  *(Correcta)*
- b) `overflow: 'next'`
- c) `flex: 2`
- d) `rowBreak: true`

> **Explicación**: `flexWrap: 'wrap'` permite que los elementos salten automáticamente a una nueva línea cuando superan el ancho disponible.

---

### 15. ¿Cuándo es especialmente apropiado usar ScrollView?
- **a) Cuando queremos que el contenido pueda desplazarse**  *(Correcta)*
- b) Solo para imágenes
- c) Solo para formularios
- d) Para sustituir StyleSheet

> **Explicación**: `ScrollView` permite desplazar vertical u horizontalmente contenido que supera la altura de la pantalla física.

---

### 16. ¿Cuál es una ventaja principal de crear un componente reutilizable?
- **a) Evitar repetir estructura**  *(Correcta)*
- b) Eliminar JavaScript
- c) No necesitar estilos
- d) Evitar cualquier dato

> **Explicación**: Permite mantener una única definición visual y reutilizarla pasándole diferentes datos mediante props.

---

### 17. En una FlatList, ¿qué prop recibe la colección?
- a) `items`
- b) `values`
- **c) `data`**  *(Correcta)*
- d) `collection`

> **Explicación**: `data` contiene el array de datos que `FlatList` se encarga de recorrer y renderizar.

---

### 18. ¿Para qué sirve `renderItem` en FlatList?
- **a) Para definir cómo se dibuja cada elemento**  *(Correcta)*
- b) Para crear el array
- c) Para añadir CSS
- d) Para navegar

> **Explicación**: `renderItem` recibe cada elemento (`{ item }`) y devuelve su representación visual en JSX.

---

### 19. Si tres tarjetas tienen la misma estructura pero cambian sus datos, ¿qué enfoque es más mantenible?
- a) Copiar tres veces el JSX
- **b) Crear un componente y pasar props**  *(Correcta)*
- c) Crear tres apps
- d) Usar HTML

> **Explicación**: La reutilización mediante componentes y props elimina la duplicación y facilita el mantenimiento del código.

---

### 20. Antes de programar una interfaz compleja, ¿qué estrategia es más adecuada?
- a) Añadir librerías al azar
- **b) Dividirla en bloques visuales y resolverlos por partes**  *(Correcta)*
- c) Escribir todo en un único Text
- d) Copiar una solución sin analizarla

> **Explicación**: Descomponer la pantalla en cajas sencillas y componentes reutilizables reduce la carga cognitiva y organiza el desarrollo.
