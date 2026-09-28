# Ejercicio 07 - Feed de noticias

## Qué he aprendido
- Crear contenido desplazable
- Extraer componentes
- Pasar datos sencillos mediante props

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

**Respuesta:**  
Deben cambiar los datos dinámicos propios de cada noticia (el título, la categoría y la fecha), los cuales se envían dinámicamente mediante `props`. Por el contrario, debe permanecer idéntica toda la estructura visual fija: la tarjeta `View`, los márgenes, el padding, las esquinas redondeadas, los colores de fondo y las clases de estilo tipográfico.

## Qué he modificado
- Se reutilizó el componente `NewsCard` para incluir una 4ª noticia ('DISEÑO · Interfaces accesibles y centradas en el usuario') sin duplicar su declaración JSX ni estilos.

## Resultado
El feed de noticias permite desplazamiento vertical fluido mediante ScrollView, mostrando 4 noticias con la misma apariencia profesional y contenidos diferenciados.
