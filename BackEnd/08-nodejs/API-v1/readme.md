# notas sobre la API v1

este es un modelo sencillo de una API que se puede limitar a realizar peticiones que cumplan con realizar las operaciones CRUD dentro de una base de datos en mongoDB sirve a la perfeccion para procesar preticiones simples y sin validaciones ideal si se esta desarrollando solo un Front End y se requiere una conexion simple a una base de datos. Sin embargo no es para nada recomendable utilizar este modelo para proyectos avanzados o para hospedar en algun servicio en la nube.

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

* `http://localhost:3000/customers` ->  listar todos los clientes en la DB (GET)
* `http://localhost:3000/customers/id` -> obtener un cliente por su _id (GET)
* `http://localhost:3000/customers` -> crear un nuevo cliente pasando los parametros por el cuerpo de la peticion (POST)
* `http://localhost:3000/customers/id` -> actualizr un cliente pasando los parametros por el cuerpo de la peticion y por su _id en la url (PUT)
* `http://localhost:3000/customers/id` -> eliminar un cliente por su _id (DELETE)