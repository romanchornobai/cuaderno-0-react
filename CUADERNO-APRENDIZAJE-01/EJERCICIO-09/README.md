# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
- Componer una pantalla compleja
- Detectar repetición
- Crear componentes mantenibles

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

**Respuesta:**  
Se deben extraer a componentes independientes aquellos bloques que se repiten con frecuencia (como `Movement` para cada transacción o `ActionButton` para las acciones rápidas), ya que comparten estructura idéntica con datos cambiantes. En cambio, elementos únicos de la pantalla como el saludo con el nombre o la tarjeta principal de saldo disponible pueden permanecer directamente en `App` puesto que no se van a duplicar en esta vista.

## Qué he modificado
- Se estructuró un movimiento positivo de ingreso ('Nómina · +2.340 €') que se renderiza con texto destacado en verde (`#16a34a`).
- Se añadieron botones de acción rápida en fila ('Transferir', 'Bizum', 'Tarjetas').

## Resultado
La app bancaria luce profesional con la tarjeta de saldo oscuro en la parte superior, los botones de acción rápida y la lista de movimientos donde los ingresos en verde se diferencian claramente de los gastos.
