# 1. Comienzo :beginner:

- **npm install** para instalar todas las dependencias necesarias

- Modificar de la carpeta daos en el archivo index.js, la const **db** por la base de datos que se quiera utilizar.
- Ejemplo : db='mongoDB' ó db='firebaseDB'

## 2. Levantar el servidor :airplane:

- **npm run dev** - correr el servidor en modo desarrollo
- **npm start** - correr el servidor en modo producción

## 3. Dirección y puerto

- **localhost:8080** ó **127.0.0.1:8080**

## 4 . Rutas y pruebas de funcionamiento

##### Recomendado usar POSTMAN ó INSOMNIA para hacer las pruebas

#### Ruta Productos :

- GET **localhost:8080/api/productos** - muestra todos los productos

- GET **localhost:8080/api/productos/idProducto** - muestra un producto según su ID. Reemplazar **idProducto** por el ID del producto

- POST **localhost:8080/api/productos** - agrega un nuevo producto. El formato para ingresar productos es JSON y los datos son los siguientes :

- **name**: tipo texto
- **description**: tipo texto
- **code** : tipo numérico
- **thumbnail** : tipo texto (dirección URL de la imágen)
- **price** : tipo numérico
- **stock** : tipo numérico

Ejemplo : {"name":"monitor","stock": 10 }

**IMPORTANTE**: En la base de datos **mongo DB** todos los datos son requeridos. sino se ingresa **stock** su valor por defecto sera **0**

- PUT **localhost:8080/api/productos/idProducto** - para modificar datos de un producto según el ID del producto. Reemplazar **idProducto** por el ID del producto. Ejemplo para modificar stock enviar : {"stock": 20 }

- DELETE **localhost:8080/api/productos/idProducto** - para eliminar un producto segun su ID. Reemplazar **idProducto** por el ID del producto.

---

#### Ruta Carrito:

- POST **localhost:8080/api/carrito** - crea un nuevo carrito de compras y nos devuleve su **ID**.

- DELETE **localhost:8080/api/carrito/idCarrito** - elimina un carrito según su **ID**.
  Reemplazar **idCarrito** por el ID del carrito.

- POST **localhost:8080/api/carrito/idCarrito/productos/idProducto** - agrega un nuevo producto al carrito - Reemplazar **idCarrito** por el ID del carrito a utilizar y **idProducto** por el ID del producto que se desee agregar.

- GET **localhost:8080/api/carrito/idCarrito/productos** - Muestra todos los productos que estan en el carrito.

- DELETE **localhost:8080/api/carrito/idCarrito/productos/idProducto** - elimina del carrito el producto según el **ID** del producto. Reemplazar **idCarrito** por el ID del carrito a utilizar y **idProducto** por el ID del producto que se desee eliminar.
