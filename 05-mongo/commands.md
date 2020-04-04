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

mostrar todas las colecciones
```javascript
show collections
```

crear una coleccion
```javascript
use <db-name>
db.createCollection(<collection>)
// or
db.<collection>.insertOne({ document })
```

eliminar una coleccion
```javascript
use <db-name>
db.<collection>.drop()
```

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

#### Queries simples

mostrar uno o varios documentos
```javascript
db.<collection>.findOne({<filter>},{<projection>})
db.<collection>.find({<filter>},{<projection>}).<agregation>()
// <agregation>() = sort(), limit()
// <projection> = {field1:1, field2:0} muestra u oculta campos de una consulta
```
[filtros de busqueda](https://docs.mongodb.com/manual/reference/operator/query/#query-selectors)


#### Administracion de usuarios

crear cuanta de administrador
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

cargar una base de datos desde un archivo .js

```javascript
mongo <file-name>.js
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
