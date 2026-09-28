# Ejercicio 03 - Ficha de perfil

## Qué he aprendido
- Mostrar imágenes
- Crear avatares circulares
- Distribuir elementos en horizontal

## Respuesta a la pregunta de comprensión
Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?

**Respuesta:**  
Se debe aplicar en el `View` padre inmediato que contiene exclusivamente a las dos estadísticas (el contenedor de estadísticas), y no en la tarjeta principal. De este modo, solo las dos estadísticas se distribuyen horizontalmente en fila, mientras que el resto de elementos de la tarjeta (avatar, nombre, profesión) continúan distribuyéndose verticalmente en columna.

## Qué he modificado
- Se transformó el bloque de estadísticas para alojar 3 métricas en fila: '24 Proyectos', '1280 Seguidores' y '86 Contactos'.
- Se empleó `justifyContent: 'space-around'` y ancho del 100% en el contenedor horizontal.

## Resultado
La ficha de perfil presenta un avatar perfectamente circular en la parte superior, el nombre y cargo de la usuaria, y una fila equilibrada con las 3 estadísticas clave bien distribuidas.
