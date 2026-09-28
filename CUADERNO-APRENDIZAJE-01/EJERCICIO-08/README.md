# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
- Separar datos y presentación
- Crear listas con FlatList
- Usar renderItem y keyExtractor

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

**Respuesta:**  
Permite desacoplar por completo los datos de la presentación visual. El código JSX es una plantilla única y limpia que se renderiza automáticamente para cualquier número de elementos. Si se añade, modifica o elimina un producto (o si los datos proceden de una API externa), la interfaz se actualiza de inmediato sin riesgo de cometer errores de maquetación en JSX repetido.

## Qué he modificado
- Se amplió el array de datos de 6 a 8 elementos (añadiendo Smartwatch y Cámara).
- La `FlatList` renderizó automáticamente los 8 elementos en 4 filas de 2 columnas sin tocar el JSX del componente principal.

## Resultado
El catálogo muestra una cuadrícula responsive de 8 productos distribuidos en dos columnas perfectas generadas dinámicamente mediante FlatList.
