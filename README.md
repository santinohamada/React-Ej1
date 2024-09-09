# Ejercicio de Componente React: Saludo

Este proyecto es un componente básico de **React** que muestra un saludo personalizado. El mensaje de saludo se pasa como **prop** al componente.

## Descripción

El componente `Saludo` recibe una propiedad (`mensaje`) y muestra un texto de saludo en formato: 

```
Hello [mensaje] !
```

## Código del componente

```jsx
import React from 'react';

const Saludo = (props) => {
    return (
        <p>
            Hello {props.mensaje} !
        </p>
    );
};

export default Saludo;
```

## Uso del componente

### Ejemplo de uso

Puedes utilizar el componente `Saludo` en tu aplicación de React de la siguiente manera:

```jsx
import React from 'react';
import Saludo from './Saludo'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <h1>Componente de Saludo</h1>
      <Saludo mensaje="World" />  {/* Salida: Hello World! */}
      <Saludo mensaje="React Developer" />  {/* Salida: Hello React Developer! */}
    </div>
  );
};

export default App;
```

### Propiedades

- `mensaje`: Es una propiedad de tipo **string** que contiene el mensaje personalizado que se incluirá en el saludo.

## Tecnologías utilizadas

- **React**

## Cómo usar el proyecto

1. Clona el repositorio o copia el código del componente en tu proyecto.
2. Asegúrate de tener instalado React. Si no lo tienes instalado, puedes iniciar un nuevo proyecto con:
   ```bash
   npx create-react-app mi-app
   ```
3. Usa el componente `Saludo` importándolo en el archivo principal de tu aplicación.

## Futuras mejoras

- Añadir validaciones a las propiedades del componente.
- Permitir diferentes estilos de saludo basados en las propiedades.

## Autor

Este código es parte de un ejercicio de React para aprender a trabajar con **props**.
