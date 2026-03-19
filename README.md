# PRÁCTICA 3 - FRONT

En esta práctica he creado una aplicación con Next.js y TypeScript que obtiene información de productos utilizando la API pública DummyJSON. La aplicación muestra un listado de productos con su imagen, nombre, categoría y precio. Además, incluye un buscador que permite filtrar los productos por nombre o categoría. Cuando se pulsa sobre un producto, se navega a una página de detalle dinámica donde se muestra información más completa del producto seleccionado.

## COMANDOS

Los comandos necesarios son los siguientes:

Comando para instalar todas las dependencias necesarias: `npm install`  
Comando para poder arrancar el proyecto: `npm run dev`

## CREACIÓN DEL PROYECTO

Ir a la carpeta donde quiero crear el proyecto (por ejemplo, Escritorio): `cd Escritorio`  
Crear el proyecto con Next.js: `npx create-next-app@latest practica3_front`  
Elegir las diferentes opciones cuando lo pida  
Instalar las dependencias y ejecutar el proyecto: puesto en el apartado anterior de **COMANDOS**  
Instalar Axios para poder hacer peticiones a la API: `npm install axios`  
Ejecutar el proyecto con `npm run dev`. Una vez ejecutado, se abrirá en `http://localhost:3000`

## FUNCIONAMIENTO GENERAL

Al iniciar la aplicación, se cargan todos los productos desde la API.  
Los productos se muestran en una cuadrícula con su imagen, nombre, categoría y precio.  
El usuario puede escribir en el buscador para filtrar los productos por nombre o categoría.  
Al pulsar sobre un producto, se accede a una página de detalle con más información.  
En la página de detalle hay un botón “Volver” que permite regresar a la página principal.

## ESTRUCTURA DEL PROYECTO Y EXPLICACIÓN

### lib/api/axios.ts

En este archivo he configurado la conexión con la API utilizando Axios. Aquí se define la URL base de la API DummyJSON para poder realizar las peticiones desde el resto del proyecto.

### lib/api/product.ts

En este archivo he creado las funciones que se encargan de hacer las peticiones a la API. Las principales funciones son:

`getProducts()`: obtiene todos los productos de la API.  
`getProductById(id)`: obtiene la información completa de un producto concreto para mostrarla en la página de detalle.

### types/product.ts

Aquí defino la estructura de un producto utilizando TypeScript. Esto permite que TypeScript conozca qué propiedades tiene cada producto, como por ejemplo: id, title, description, category, price, rating, stock, brand, weight, dimensions, thumbnail e images.

### types/index.ts

Este archivo sirve para exportar los tipos y poder utilizarlos fácilmente en otros archivos del proyecto.

### app/page.tsx

Este archivo es la página principal de la aplicación. Aquí se cargan todos los productos desde la API. Los productos se muestran en una cuadrícula con su imagen, nombre, categoría y precio. También incluye un buscador para poder buscar productos por nombre o categoría. Además, se muestra un contador con el número de resultados encontrados.

### app/product/[id]/page.tsx

Este archivo corresponde a la página de detalle de cada producto. Cuando el usuario pulsa sobre un producto, se abre esta página con más información. Para obtener el producto seleccionado se utiliza el parámetro dinámico `id`. Después se llama a `getProductById()` para obtener los datos desde la API. También hay un botón “Volver” para regresar a la página principal.

### app/components/SectionContainer.tsx

Este componente actúa como un contenedor general de secciones. Se utiliza para envolver el contenido mediante `children` y mantener una estructura más ordenada.

### app/components/SearchBar.tsx

Este componente contiene el input de búsqueda. Permite al usuario escribir texto y actualizar el estado del buscador en la página principal.

### app/components/ProductCard.tsx

Este componente representa cada tarjeta de producto. Muestra la imagen, la categoría, el título, el precio y un enlace para ver los detalles del producto.

### app/components/ProductGrid.tsx

Este componente se encarga de recorrer la lista de productos y mostrar una tarjeta por cada uno de ellos utilizando el componente `ProductCard`.

### app/components/ContainerBackHome.tsx

Este componente contiene el botón “Volver”. Se utiliza en la página de detalle para volver a la página principal usando navegación con `useRouter()`.

### app/layout.tsx

Este archivo define la estructura general de la aplicación. Aquí se importan los estilos globales y se configura la metadata de la página, como el título y la descripción.

### app/globals.css

En este archivo he definido los estilos globales de la aplicación. Aquí se configuran el fondo de la página, la tipografía, el buscador, la cuadrícula de productos, las tarjetas y la página de detalle.

## ESTRUCTURA DEL PROYECTO

```bash
src/
├── app/
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── SearchBar.tsx
│   │   ├── SectionContainer.tsx
│   │   └── ContainerBackHome.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── api/
│       ├── axios.ts
│       └── product.ts
└── types/
    ├── product.ts
    └── index.ts



    