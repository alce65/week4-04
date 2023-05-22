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
