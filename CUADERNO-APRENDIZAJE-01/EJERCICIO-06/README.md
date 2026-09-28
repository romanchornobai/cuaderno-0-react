# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
- Crear un grid con Flexbox
- Usar flexWrap
- Organizar métricas visuales

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

**Respuesta:**  
Porque al usar `flexDirection: 'row'` con `flexWrap: 'wrap'`, la suma de los anchos de los elementos en una misma fila no puede exceder el 100%. Si cada tarjeta tuviera un 50% de ancho, cualquier separación (`gap`, margen o padding) sumaría más del 100% y provocaría que cada tarjeta saltase a su propia línea (1 columna). Al usar 48%, la suma (48% + 48% = 96%) deja un 4% de margen libre para el `gap` entre columnas.

## Qué he modificado
- Se añadió una quinta tarjeta métrica de 'Tickets' con valor '86' y cambio '+5%'.
- Gracias a `flexWrap: 'wrap'` y al ancho del 48%, la tarjeta se colocó automáticamente al principio de una tercera fila.

## Resultado
El panel de control visualiza una cuadrícula simétrica de 2 columnas con las métricas organizadas en tarjetas blancas, donde la 5ª tarjeta ocupa limpiamente la primera posición de la tercera fila.
