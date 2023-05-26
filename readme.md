# Week4

## Day1

## ToDo List Review

- Ajustes ESLint
- Index.html / favicon
- ApiRepository
  - uso de genéricos
  - tipados explícitos
- TaskList
  - template con 1 solo return
  - uso del repo dándole un tipo
  - posibles errores de comparación
  - awaits pendientes

Nuevos conceptos

- Gestión de errores en el fetch
- Inyección de dependencia en el repo
- Interfaces: inversión de dependencia (soliD)


## Code Review: Pokemon

- Análisis del API
- Definición del modelo
  - Index signatures

    ```ts
    type Dict<T> = { [k: string]: T }; // <- index signature
    ```

  - JSON to types
- Repositorio
  - Agrupando múltiples fetch
- Paginación
- Página de detalle

Testing

```shell
  npm i jest @types/jest ts-jest jest-ts-webcompat-resolver
  npm i jest-environment-jsdom
  npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

eslintrc

```js
 env: { jest: true }
 ```

 config

 ```js
 /** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
};
```
