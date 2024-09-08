
# Indice  
[1. ECMAScript](#1-ecmascript)  
- [1.1 ECMAScript 1 (ES1) - 1997](#11-ecmascript-1-es1---1997)  
- [1.2 ECMAScript 2 (ES2) - 1998](#12-ecmascript-2-es2---1998)  
- [1.3 ECMAScript 3 (ES3) - 1999](#13-ecmascript-3-es3---1999)  
- [1.4 ECMAScript 4 (ES4)](#14-ecmascript-4-es4)  
- [1.5 ECMAScript 5 (ES5) - 2009](#15-ecmascript-5-es5---2009)  
- [1.5.1 ECMAScript 5.1 (ES5.1) - 2011](#151-ecmascript-51-es51---2011)  
- [1.6 ECMAScript 6 (ES6) / ECMAScript 2015 (ES2015)](#16-ecmascript-6-es6--ecmascript-2015-es2015)  
- [1.7 ECMAScript 2016 (ES7)](#17-ecmascript-2016-es7)  
- [1.8 ECMAScript 2017 (ES8)](#18-ecmascript-2017-es8)  
- [1.9 ECMAScript 2018 (ES9)](#19-ecmascript-2018-es9)  
- [1.10 ECMAScript 2019 (ES10)](#110-ecmascript-2019-es10)  
- [1.11 ECMAScript 2020 (ES11)](#111-ecmascript-2020-es11)  
- [1.12 ECMAScript 2021 (ES12)](#112-ecmascript-2021-es12)  
- [1.13 ECMAScript 2022 (ES13)](#113-ecmascript-2022-es13)  
- [1.14 ECMAScript 2023 (ES14)](#114-ecmascript-2023-es14)  
- [1.15 ECMAScript 2024 (ES15)](#115-ecmascript-2024-es15)

[2. Estrategias de programacion](#2-estrategias-de-programacion)  
- [2.1 Estrategias Cossbrowser](#21-estrategias-cossbrowser)  
- [2.2 Uso de Polyfills y Fallbacks](#22-uso-de-polyfills-y-fallback)  
- [2.3 Enfoque Transpilador](#23-enfoque-transpilador)  

[3. Svelte y la traspilación](#3-svelte-y-la-traspilación)  
- [3.1 Compilación a JavaScript Puro](#31-compilación-a-javascript-puro)  
- [3.2 Consideraciones Adicionales para Compatibilidad](#32-consideraciones-adicionales-para-compatibilidad)  
- [3.2.1 Funciones y APIs Modernas](#321-funciones-y-apis-modernas)  
- [3.2.2. Características de CSS Moderno](#322-características-de-css-moderno)  
- [3.2.3. Transpilación de JavaScript](#323-transpilación-de-javascript)  
- [3.3 Estrategia Combinada](#33-estrategia-combinada)  
- [3.4 Conclusión](#34-conclusión)



# 1. ECMAScript
ECMAScript es el estándar en el que se basa JavaScript. A lo largo de los años, se han lanzado varias versiones de ECMAScript, cada una agregando nuevas características y mejoras. Aquí tienes un resumen de las principales versiones de ECMAScript:

## 1.1 ECMAScript 1 (ES1) - 1997
- La primera versión oficial del estándar ECMAScript.

## 1.2 ECMAScript 2 (ES2) - 1998
- Corrección de errores y alineación con el estándar internacional ISO/IEC 16262.

## 1.3 ECMAScript 3 (ES3) - 1999
- Introdujo características como expresiones regulares, mejor manejo de cadenas, declaraciones try/catch para manejo de excepciones y más.

## 1.4 ECMAScript 4 (ES4)
- Esta versión nunca fue oficialmente lanzada debido a diferencias en la comunidad de desarrollo sobre la dirección que debería tomar el lenguaje.

## 1.5 ECMAScript 5 (ES5) - 2009
- Introdujo características como el modo estricto ("use strict";), métodos de array adicionales (como forEach, map, filter), JSON.parse y JSON.stringify, propiedades de acceso (getters y setters), entre otras mejoras.

## 1.5.1 ECMAScript 5.1 (ES5.1) - 2011
- Revisión menor de ES5, alineada con el estándar internacional ISO/IEC 16262:2011.

## 1.6 ECMAScript 6 (ES6) / ECMAScript 2015 (ES2015)
- Una de las versiones más significativas, que introdujo características como:
  - Declaraciones let y const
  - Funciones flecha (=>)
  - Clases y módulos (class, import, export)
  - Plantillas de cadena de texto (template literals)
  - Parámetros por defecto y rest/spread operators (...)
  - Promesas (Promises)
  - Iteradores y generadores
  - Símbolos (Symbols)
  - Mapas y conjuntos (Maps, Sets)

## 1.7 ECMAScript 2016 (ES7)
- Introdujo el operador de exponenciación (**)
- Método Array.prototype.includes

## 1.8 ECMAScript 2017 (ES8)
- Introdujo async/await para manejar promesas de manera más sencilla.
- Métodos Object.values y Object.entries
- Métodos String.prototype.padStart y String.prototype.padEnd

## 1.9 ECMAScript 2018 (ES9)
- Rest/spread properties para objetos
- Método Promise.prototype.finally
- Mejoras en expresiones regulares (RegExp)

## 1.10 ECMAScript 2019 (ES10)
- Introdujo el método Array.prototype.flat y Array.prototype.flatMap
- Object.fromEntries
- String.prototype.trimStart y String.prototype.trimEnd
- Mejoras en la sintaxis de try/catch

## 1.11 ECMAScript 2020 (ES11)
- BigInt para representación de números enteros grandes
- Operador de encadenamiento opcional (?.)
- Operador de coalescencia nula (??)
- Métodos Promise.allSettled
- Importaciones dinámicas (import())

## 1.12 ECMAScript 2021 (ES12)
- Métodos String.prototype.replaceAll
- Separadores numéricos (1_000_000 para un millón)
- Promise.any
- WeakRefs y finalizadores (FinalizationRegistry)

## 1.13 ECMAScript 2022 (ES13)
- Clases privadas y métodos estáticos privados (#field, #method)
- Asignación lógica (||=, &&=, ??=)
- Operador de top-level await
- Object.hasOwn
- Estas versiones reflejan la evolución continua de ECMAScript para adaptarse a las necesidades modernas de desarrollo web y mejorar la usabilidad, eficiencia y seguridad del lenguaje.


## 1.14 ECMAScript 2023 (ES14)
- Métodos inmutables para arrays: toSorted, toReversed, with, toSpliced, findLast y findLastIndex.
- Soporte para comentarios #!: al comienzo de los archivos para facilitar la ejecución de scripts.
- Uso de símbolos como claves en colecciones débiles: permitiendo una mayor flexibilidad.
- Especificación: https://tc39.es/ecma262/2023/

## 1.15 ECMAScript 2024 (ES15)
- Pipe Operator: Este operador permitirá encadenar funciones de una manera más legible y funcional, mejorando la claridad del código cuando se aplican múltiples transformaciones a un valor​ (SitePoint)​​ (DEV Community)​.
- Records y Tuples: Estos son nuevos tipos de datos inmutables. Los Records funcionan como objetos inmutables, mientras que los Tuples son similares a los arrays pero también inmutables. Esta característica facilita la programación funcional y la gestión del estado de manera predecible​ (SitePoint)​​ (Modern CSS WebDev)​.
- Temporal API: Una nueva API para manejar fechas y tiempos de manera más efectiva, reemplazando las limitaciones del objeto Date. Esto incluye nuevas formas de crear, manipular y formatear fechas y tiempos​ (DEV Community)​​ (Modern CSS WebDev)​.
- Decorators: Permiten añadir funcionalidad adicional a clases y métodos de manera más declarativa. Los decorators son una característica ya común en otros lenguajes como Python y TypeScript​ (Modern CSS WebDev)​.
- Regular Expressions /v Flag: Una mejora en las expresiones regulares que cambiará la sintaxis y semántica para hacerlas más consistentes con otros lenguajes de programación​ (DEV Community)​.
- Object.groupBy(): Esta función permitirá agrupar objetos basados en una propiedad específica, simplificando la manipulación de colecciones de datos​ (Modern CSS WebDev)​.
- Promise.withResolvers(): Un nuevo método que proporciona una forma más intuitiva de trabajar con promesas, facilitando la creación y manejo de promesas dentro del código​ (Modern CSS WebDev)​.
- Especificación: https://www.w3schools.com/js/js_2024.asp

# 2. Estrategias de programación
La transpilación es el proceso de convertir el código fuente escrito en un lenguaje de programación a otro lenguaje de programación. En el contexto de JavaScript, la transpilación se refiere generalmente a la conversión de código ECMAScript moderno (como ECMAScript 2023) a una versión más antigua de ECMAScript (como ECMAScript 5) para asegurar la compatibilidad con todos los navegadores, incluyendo aquellos que no soportan las características más recientes del lenguaje.

**¿Por Qué es Necesaria la Transpilación?**
- Compatibilidad del Navegador: No todos los navegadores soportan las últimas características de ECMAScript. Los navegadores más antiguos o aquellos que no se actualizan frecuentemente pueden no ser compatibles con el código ECMAScript moderno.
- Uso de Características Modernas: Los desarrolladores quieren aprovechar las nuevas características del lenguaje que hacen que el código sea más limpio, eficiente y mantenible.

**Herramientas de Transpilación más comunes en JS**:
- Babel: Babel es la herramienta de transpilación más popular en JavaScript. Convierte el código ECMAScript moderno a ECMAScript 5, que es ampliamente soportado por la mayoría de los navegadores.
- TypeScript Compiler: TypeScript es un superset de JavaScript que añade tipos estáticos. El compilador de TypeScript también puede transpilar código TypeScript a JavaScript estándar.


## 2.1 Estrategias Cossbrowser
Generalmente, el programador suele tomar una de las siguientes estrategias «crossbrowser» para asegurarse que el código funcionará en todos los navegadores:
- Enfoque Conservador --	ECMAScript 5:	Incómodo de escribir. Anticuado. Compatible con navegadores nativamente.
- Enfoque Delegador --	Depende:	Cómodo. Rápido. Genera dependencia al framework/librería.
- Enfoque Evergreen --	ECMAScript 2024+:	Cómodo. Moderno. No garantiza la compatibilidad en navegadores antiguos.
- Enfoque Transpilador -- ECMAScript 2024+:	Cómodo. Moderno. Preparado para el futuro. Requiere preprocesado.

## 2.2 Uso de Polyfills y Fallbacks
Independientemente del enfoque que se decida utilizar, el programador también puede utilizar polyfills o fallbacks para asegurarse de que ciertas características funcionarán en navegadores antiguos. También puede utilizar enfoques mixtos.
  - Un polyfill no es más que una librería o código Javascript que actúa de «parche» o «relleno» para dotar de una característica que el navegador aún no posee, hasta que una actualización del navegador la implemente.
  - Un fallback es algo también muy similar: un fragmento de código que el programador prepara para que en el caso de que algo no entre en funcionamiento, se ofrezca una alternativa.

## 2.3 Enfoque Transpilador
El programador decide crear código de la última versión de ECMAScript. Para asegurarse de que funcione en todos los navegadores, utiliza un transpilador, que no es más que un sistema que revisa el código y lo traduce de la versión actual de ECMAScript a ECMAScript 5, que es la que leerá el navegador.

La ventaja de este método es que se puede escribir código Javascript moderno y actualizado (con sus ventajas y novedades) y cuando los navegadores soporten completamente esa versión de ECMAScript, sólo tendremos que retirar el transpilador (porque no lo necesitaremos). La desventaja es que hay que preprocesar el código (cada vez que cambie) para hacer la traducción.

Quizás, el enfoque más moderno de los mencionados es utilizar transpiladores. Sistemas como Babel son muy utilizados y se encargan de traducir de ECMAScript 6 a ECMAScript 5.



# 3. Svelte y la traspilación
Si bien es cierto que Svelte compila el código a JavaScript puro (vanilla JS), lo que mejora significativamente la compatibilidad del código con muchos navegadores, aún hay algunos puntos a considerar para garantizar una compatibilidad completa, especialmente con navegadores más antiguos. Aquí hay algunas aclaraciones y consideraciones:

## 3.1 Compilación a JavaScript Puro
Svelte compila los componentes a JavaScript puro optimizado, lo que significa que el código resultante generalmente es compatible con la mayoría de los navegadores modernos. Esto elimina muchas de las preocupaciones típicas de compatibilidad que se encuentran al usar sintaxis y características modernas de JavaScript directamente.

## 3.2 Consideraciones Adicionales para Compatibilidad
### 3.2.1 Funciones y APIs Modernas:
- Aunque el código de Svelte se compila a JavaScript puro, si tu código utiliza funciones o APIs modernas de JavaScript (como fetch, Promise, async/await, Map, Set, etc.), estas aún podrían no ser compatibles con navegadores antiguos.
- Solución: Utilizar polyfills para agregar soporte para estas funciones y APIs en navegadores que no las soportan nativamente.
```
// main.js
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './App.svelte';

const app = new App({
  target: document.body,
});

export default app;
```
### 3.2.2. Características de CSS Moderno:
- Svelte también permite escribir CSS moderno en sus componentes. Si usas características modernas de CSS que no son compatibles con navegadores antiguos, es posible que necesites escribir fallbacks o utilizar herramientas de post-procesamiento de CSS como Autoprefixer.
- Solución: Configurar herramientas de post-procesamiento de CSS para añadir los prefijos necesarios y asegurar la compatibilidad.

### 3.2.3. Transpilación de JavaScript:
- Svelte en sí no transcompila automáticamente el código JavaScript moderno a versiones más antiguas de ECMAScript. Si utilizas características de ECMAScript 6+ que no son compatibles con todos los navegadores, necesitas una herramienta como Babel para transpilar tu código a una versión compatible.
- Solución: Configurar Babel en tu proyecto Svelte.
```
// svelte.config.js
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    format: 'iife',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte(),
    resolve(),
    commonjs(),
    babel({
      extensions: ['.js', '.mjs', '.html', '.svelte'],
      exclude: ['node_modules/**'],
      presets: [
        ['@babel/preset-env', {
          targets: '> 0.25%, not dead',
        }],
      ],
    }),
  ],
};
```

## 3.3 Estrategia Combinada
Para asegurar la compatibilidad más amplia posible, puedes combinar varias estrategias:
- Uso de Polyfills: Incluir polyfills para funciones y APIs modernas que puedan no estar soportadas en todos los navegadores.
- Transpilación con Babel: Utilizar Babel para transpilar el código JavaScript moderno a una versión más antigua y compatible.
- Post-procesamiento de CSS: Utilizar herramientas como Autoprefixer para asegurar la compatibilidad del CSS.
- Pruebas Cross-Browser: Realizar pruebas en varios navegadores para identificar cualquier problema de compatibilidad y solucionarlo.

## 3.4 Conclusión
Usar Svelte simplifica en gran medida la escritura de aplicaciones web modernas al compilar el código a JavaScript puro, lo que mejora la compatibilidad con navegadores modernos. Sin embargo, para garantizar una compatibilidad completa, especialmente con navegadores más antiguos, es recomendable utilizar polyfills, herramientas de transpilación como Babel y post-procesamiento de CSS. Esto asegura que tu aplicación funcione correctamente en el mayor número posible de navegadores.
