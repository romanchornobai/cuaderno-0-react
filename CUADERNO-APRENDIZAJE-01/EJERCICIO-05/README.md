# Ejercicio 05 - Tarjeta de producto

## Qué he aprendido
- Componer una tarjeta de producto
- Usar space-between
- Controlar el recorte visual con overflow

## Respuesta a la pregunta de comprensión
¿Qué información debería tener mayor jerarquía visual: categoría, nombre del producto o precio? Justifica tu decisión.

**Respuesta:**  
El nombre del producto debe tener la mayor jerarquía visual (mayor tamaño y peso `bold`) para que el usuario identifique inmediatamente qué artículo está viendo. El precio debe ser el segundo elemento más destacado para facilitar la decisión de compra, mientras que la categoría cumple una función secundaria de contextualización y metadato con menor tamaño de letra.

## Qué he modificado
- Se añadió un badge de 'OFERTA' situado justo encima o antes del título del producto.
- Se estilizó con fondo rojo claro (`#fee2e2`), texto rojo intenso (`#b91c1c`) y bordes redondeados tipo píldora (`borderRadius: 12`).

## Resultado
La tarjeta de producto integra armoniosamente la imagen superior con esquinas recortadas por overflow hidden, la etiqueta roja de OFERTA, la valoración de estrellas y la fila final con precio y botón de compra.
