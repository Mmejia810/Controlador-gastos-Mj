# Parte 4 – Validación y logs

## Identificación de fallos en los logs

En el proyecto se pueden identificar diferentes tipos de fallos a través de los logs:

1. **Linter (ESLint)**  
   - Los errores aparecen en consola indicando el archivo, línea y tipo de error.  
   - Ejemplo:
     
     /src/Account.ts
     33:13  error  Unexpected aliasing of 'this' to local variable  @typescript-eslint/no-this-alias
     
   - Esto indica que el código no cumple con las reglas configuradas en ESLint.

2. **Pruebas unitarias (Vitest)**  
   - Los fallos se muestran con la prueba que falló, el mensaje esperado y el recibido.  
   - Ejemplo:
     
     Account › getBalance() debe sumar ingresos y restar gastos correctamente
     Expected: 150
     Received: 200
     
   - Permite identificar si la lógica de las funciones no funciona como se esperaba.

3. **Cobertura de pruebas**  
   - Se puede generar un reporte de cobertura con Vitest.  
   - Archivos no cubiertos aparecerán con porcentaje bajo y líneas marcadas en rojo.



## Generar un run fallido

1. Introducir un error en el código, por ejemplo:
   ```ts
   return previousValue + currentEntry.amount; // Ignora categoría (gasto o ingreso)


   # Parte 5 – IA y Ética

## Métodos para detectar código generado por IA

1. **Análisis de patrones de código**  
   - Herramientas como **GPTZero**, **CodeCarbon** o plugins de IDE analizan patrones típicos de código generado por IA:  
     - Comentarios genéricos o excesivamente explicativos.  
     - Formato muy consistente o estilo “perfecto”.  
     - Uso repetitivo de ciertas funciones o estructuras.  

2. **Detección basada en modelos de lenguaje**  
   - Se entrenan modelos para distinguir entre código escrito por humanos y código generado por IA, evaluando:  
     - Elección de nombres de variables.  
     - Complejidad y estructura de funciones.  
     - Probabilidad estadística de secuencias de tokens.  


## Por qué no se puede asegurar al 100% la autoría

- Los patrones de IA pueden ser muy similares al estilo humano.  
- La IA puede generar código casi indistinguible del humano.  
- Humanos pueden usar IA parcialmente (copiar y adaptar), lo que complica la atribución.  
- Por ello, la detección siempre es **probabilística**, no determinista.



## Políticas razonables de uso de IA en educación y calidad

1. **Transparencia**  
   - Indicar claramente cuándo se ha usado IA para generar código o documentación.  

2. **Complemento, no reemplazo**  
   - Usar IA como asistente para sugerencias o ejemplos, no para entregar proyectos completos.  

3. **Revisión humana obligatoria**  
   - Todo código generado con IA debe ser revisado y comprendido por el estudiante o desarrollador.  

4. **Ética y citación**  
   - Reconocer el uso de herramientas de IA en comentarios o documentación del proyecto.  

5. **Evaluación de calidad y aprendizaje**  
   - Garantizar que el uso de IA no sustituya el aprendizaje real.  
   - Priorizar comprensión y habilidades humanas en la evaluación.


