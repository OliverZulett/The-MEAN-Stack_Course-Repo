# Comandos basicos 

ingresar a mongodb
```javascript
mongo -u <user-name> -p <password> --authenticationDatabase <db-name>
```

salir de mongodb
```javascript
1. exit
2. quit()
```

#### Base de datos

listar todas las bases de datos
```javascript
show dbs
```

crear base de datos
```javascript
use <db-name>
// es necesario insertar al menos un documento para 
// guaradar la base de datos
```

mostrar la base de datos actual
```javascript
db
```

eliminar base de datos
```javascript
use <db-name>
db.dropDatabase()
```

#### Colecciones

crear una coleccion
```javascript
use <db-name>
db.createCollection("<collection>")
// or
db.<collection>.insertOne({ document })
```

mostrar todas las colecciones
```javascript
show collections
```

eliminar una coleccion
```javascript
use <db-name>
db.<collection>.drop()
```

[metodos de colecciones](https://docs.mongodb.com/manual/reference/method/js-collection/)

#### CRUD

insertar uno o varios documentos
```javascript
db.<collection>.insertOne({ document })
// or
db.<collection>.insertMany([{ document 1 },{ document 2 },...])
// or 
db.<collection>.insert( documentos )
```

actualizar uno o varios documentos
```javascript
// el parametro upsert define que de no encontrarse el documento a actualizar upsert : true lo creara y upsert : false no 
db.<collection>.udpate({<filer>}, {$set:{ <update document>} }, {upsert: true o false})
```

eliminar uno o varios documentos
```javascript
db.<collection>.deleteOne({<filer>})
db.<collection>.deleteMany({<filer>})
```

#### Consultas simples

mostrar uno o varios documentos
```javascript
db.<collection>.findOne({<filter>},{<projection>})
db.<collection>.find({<filter>},{<projection>}).<agregation>()
// <agregation>() = sort(), limit()
// <projection> = {field1:1, field2:0} muestra u oculta campos de una consulta
```
[filtros de busqueda](https://docs.mongodb.com/manual/reference/operator/query/#query-selectors)

#### Consultas avanzadas

**agregacion simple**

| Operadores                            | Descripcion   |
| ------------------------------------- |:-------------:|
| db.collection.count( query, options ) </br> db.collection.find( query ).count() |[Cuenta el numero de documentos basados en una consulta](https://docs.mongodb.com/manual/reference/method/db.collection.count/)|
| db.inventory.distinct( field ) | [Busca valores distintos de documentos de una coleccion](https://docs.mongodb.com/manual/reference/method/db.collection.distinct/)|

**agregacion por tuberia**

consiste en utilizar el metodo
```javascript
  db.colection.aggregate( pipeline, options )
```
que agrega secuencia de operaciones sobre una coleccion
estas operaciones se denominan *etapas de la tuberia de agregacion* 

#### Administracion de usuarios y seguridad

En una instalacion limpia de mongodb server la ejecucion del cliente de mongo *mongod* carece de seguridad por lo que es vital tomar acciones basicas de seguridad como ser: 
1. crear una cuanta de administrador para evitar intrusiones.
2. cada vez que creemos una nueva base de datos asingar un asuario que se encargara de la misma.

crear cuenta de administrador
```javascript
use admin
db.createUser(
  {
    user: "root",
    pwd: "root",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
```

crear un nuevo usuario para una base de datos
```javascript
db.createUser(
    {
        user: "josh",
        pwd: "josh",
        roles: [ { role: <rol>, db: <db-name> } ]
    }
)
// rol: readWrite, read, write, dbOwner
```

actualizar usuario
```javascript
db.updateUser(
   "josh",
   {
     roles : [
       { role: "dbOwner", db: "hospitalDB" },
     ]
   }
)
```

#### Shell scripts

En mongoDB es posible crear un conjunto de operaciones dentro de un archivo .js y ejecutar su contenido de manera dinamica (dentro o fuera de shell)

Ejecutar operaciones dentro de un archivo .js desde fuera de la Shell

```javascript
mongo path/<file-name>.js
```

Ejecutar operaciones dentro de un archivo .js desde dentro de la Shell

```javascript
use <db-name>
db.find("path/<file-name>.js")
```

#### references

[Enable mongodb authentication with docker](https://medium.com/rahasak/enable-mongodb-authentication-with-docker-1b9f7d405a94)

[Getting Started with MongoDB – Setting up admin and user accounts](https://zocada.com/setting-mongodb-users-beginners-guide/)

[MongoDB: Create Database and User – Mongo Shell](https://www.shellhacks.com/mongodb-create-database-and-user-mongo-shell/)

[Modify The Default MongoDB Root Password](https://docs.bitnami.com/bch/apps/lets-chat/administration/change-reset-password/)

[mongo Docker Official Images](https://hub.docker.com/_/mongo)

[Getting Started With MongoDB As A Docker Container Deployment](https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/)

[Built-In Roles](https://docs.mongodb.com/manual/reference/built-in-roles/index.html)

[db.updateUser()](https://docs.mongodb.com/manual/reference/method/db.updateUser/#db-updateuser)
