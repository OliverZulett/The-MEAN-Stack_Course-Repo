# Notas sobre la API v2

este es un modelo avavnzado de una API que realizar peticiones que cumplan con realizar las operaciones CRUD dentro de una base de datos en mongoDB. Esta API posee validaciones con Json Web Tokens para el manejo de peticiones.  Esta API posee una arquitectura basada en modelos de mongoose por lo que es sencilla escalar su complejidad.

## requerimientos

Para funcionar correctamente esta API necesita de:

- [Nodejs](https://nodejs.org/es/https://nodejs.org/es/)
- [mongoDB](https://www.mongodb.com/es)

mongoDB debe funcionar en el puerto: `27018`

**opcionales**

- [mongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Heroku](https://www.heroku.com/)

## intalaciones

esta API trabaja con los siguientes modulos 

- [express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://jwt.io/)
- [passport](http://www.passportjs.org/packages/passport-jwt/)
- [cors](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)

para instalar todos los modulos simplemente ejecute el comando:
```javascript
npm install
```
desde la carpeta raiz de la api 

## ejecucion

para poner en marcha el servidor express para desarrollo, ejecute el comando:
```javascript
nodemon run dev
// la diferencia es que este comando compila el codigo en typescipt
```

para poner en marcha el servidor express para produccion, ejecute el comando:
```javascript
nodemon run start
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
* `http://localhost:3000/login` -> logearse en el sistema y crear un token (POST)