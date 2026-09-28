# Ejercicio 04 - Pantalla de acceso

## Qué he aprendido
- Diseñar inputs
- Representar un botón con Pressable
- Diferenciar interfaz y lógica

## Respuesta a la pregunta de comprensión
¿Por qué en este ejercicio no necesitamos todavía `useState`?

**Respuesta:**  
Porque el objetivo de este ejercicio es puramente el diseño visual y la maquetación estática de la interfaz (UI). Los componentes `TextInput` y `Pressable` se pueden renderizar con sus placeholders, bordes y estilos sin necesidad de almacenar valores en memoria, validar formularios ni gestionar eventos de envío.

## Qué he modificado
- Se agregó tras el botón `Pressable` un componente `Text` centrado con el mensaje: '¿No tienes cuenta? Regístrate'.
- Se maquetó con `textAlign: 'center'`, `color: '#64748b'` y `marginTop: 22`.

## Resultado
El formulario de acceso luce ordenado y moderno con sus dos campos de entrada con fondo suave, el botón principal azul destacado y el enlace inferior de registro centrado.
