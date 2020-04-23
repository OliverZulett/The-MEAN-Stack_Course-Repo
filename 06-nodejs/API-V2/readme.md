# notas sobre la API v2

este es un modelo avavnzado de una API que realizar peticiones que cumplan con realizar las operaciones CRUD dentro de una base de datos en mongoDB sirve a la perfeccion para procesar preticiones simples. Esta API posee validaciones con Json Web Tokens para el para el manejo de peticiones Sin embargo no es para nada recomendable utilizar este modelo para proyectos avanzados o para hospedar en algun servicio en la nube.

## requerimientos

Para funcionar correctamente esta API necesita de:

- [Nodejs](https://nodejs.org/es/https://nodejs.org/es/)
- [mongoDB](https://www.mongodb.com/es)

mongoDB debe funcionar en el puerto: `27018`

## intalaciones

esta API trabaja con los siguientes modulos 

- [express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)

para instalar todos los modulos simplemente ejecute el comando:
```javascript
npm install
```
desde la carpeta raiz de la api 

## ejecucion

para poner en marcha el servidor express, ejecute el comando:
```javascript
nodemon run init-server
```
desde la carpeta raiz de la api 

## peticiones 

las peticiones se realizan por el puerto `3000` desde la url:

`http://localhost:3000`

las peticiones que se pueden realizar son: 

* `http://localhost:3000/users` ->  listar todos los usuarios en la DB (GET)
* `http://localhost:3000/users/id` -> obtener un usuario por su _id (GET)
* `http://localhost:3000/users` -> crear un nuevo usuario pasando los parametros por el cuerpo de la peticion (POST)
* `http://localhost:3000/users/id` -> actualizr un usuario pasando los parametros por el cuerpo de la peticion y por su _id en la url (PUT)
* `http://localhost:3000/users/id` -> eliminar un usuario por su _id (DELETE)