# Ejercicio 01 - Mi primera pantalla

## Qué he aprendido
- Crear una pantalla con View y Text
- Aplicar estilos con StyleSheet
- Centrar contenido con Flexbox

## Respuesta a la pregunta de comprensión
Explica con tus palabras la diferencia entre el componente `View` y el componente `Text`.

**Respuesta:**  
En React Native, `View` funciona como un contenedor o caja estructural (equivalente a un `<div>` en la web) que sirve para agrupar elementos, definir el layout y aplicar estilos con Flexbox. No puede contener directamente texto visible. Por el contrario, `Text` es el único componente diseñado y permitido en React Native para renderizar texto visible en pantalla y aplicar estilos tipográficos (fuente, peso, tamaño, color, alineación).

## Qué he modificado
- Se añadió un tercer componente `Text` con el contenido 'Curso 2026/27'.
- Se aplicó un estilo específico con `color: '#2563eb'`, `fontSize: 16` y `marginTop: 18` para que destaque sin romper el centrado general de la pantalla.

## Resultado
La pantalla muestra un fondo gris azulado claro con un título grande y en negrita, un subtítulo en tono medio y la tercera línea 'Curso 2026/27' en azul, todo perfectamente centrado horizontal y verticalmente.
