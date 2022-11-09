## Tabla de contenido

1. [Instalar y correr la aplicación](#Instalar-y-correr-la-aplicación)
2. [Manejo de estado](#Manejo-de-estado)
3. [Rutas](#Rutas)
4. [Estilo](#Estilo)
5. [Llamado a la API](#Llamado-a-la-API)

# Instalar y correr la aplicación

#### Instalar Bakend (Node) y Frontend (React)

1. En el carpeta `$ root` debes correr ` $ npm install`,
   para instalar todas las dependencias del bakend.
2. Luego se mueve hacia la carpeta `$ front` y nuevamente
   `$ npm install` para de todas las dependencias del frontend.
3. Una vez finalizada la instalación de todas las dependencias,
   vuelve a la carpeta `$ root` del bakend donde, existe un script que inicializa el servidor
   de node y el frontend con React para ello, corre el comando
   `$ npm run dev` y de manera local en http://localhost:3000/ estará
   el frontend y en http://localhost:5000/ el servidor.

# Manejo de estado

Se uso Redux(toolkit) para controlar el estado de manera global
creando el store y un solo slicer llamado **productsSlice** en donde
estan todos las funciones que permiten manipular el estado incluyendo el llamado a la API. El estado inicial es un objeto con un array vacio para los `productos` y otro para el `carrito de compras`.

#### Los reducers de este slice son:

- **setProducts**: Recibe y actualiza la lista de productos.

- **reduceStock**: Recibe el id del producto que fue agregado y le
  resta a la cantidad disponible lo que se esta agregando al carrito de compras, para actualizar la lista de producto.

- **setCart**: Recibe el producto que fue añadido y se le agrega una propieda `amount` inicializada en 1 que es la cantidad del producto agregando al carrito, pero si se agrega el mismo se busca en el estado del `carrito de compras` para verificar que ya exista y si es asi siemplemente se le suma a la propiedad `amout` 1, para finalmente
  actualizar el estado del `carrito de compras`.

- **removeProductFromCart**: Recibe el index del producto para localizarlo en el estado del `carrito de compras` y removerlo.

# Rutas

Se tienen tres rutas para la navegación en el archivo `app/AppUI.js`, en la carpeta `front`.

- **path='/'**: En esta ruta se renderiza el catalogo de productos.
- **path='/cart-list'**: Esta ruta renderiza la lista de productos
  agregados al `carrito de compras.`
- **path='/product-details/:id'**: Finalmente esta la ruta
  donde se observa toda la información referente al producto que se
  eligió desde el catálogo. Esta ruta recibe el id del producto que se desea ver, para ser localizado y renderizar únicamente ese prodcuto.

# Estilo

Se hizo uso del preprocesador SASS, para tener centralizado los estilos en una archivo `main.scss` importados y separados según el componente que se desea estilizar.

# Llamado a la API

Se utilizó `Axios` y en la carpeta `api` se exportó la función `fetchAllProducts` para ser usada en el componente del catálogo(Dashboard) y se obtuvieron los productos para actualizar el storage.
