# nodejs
## Comandos

ejecutar un archivo .js con node:


```javascript
node <file-name>.js
```

indicarle a un directorio node que se instalaran dependencias:

```javascript
npm init -y
```

iniciar proyecto con typescript:

```javascript
npm tsc --init
```

## Instalaciones

instalamos: express, cors y mongoose para dependencias
```javascript
npm i express cors mongoose morgan bcrypt
```

instalamos: express, cors y mongoose para dependencias de desarrollo
```javascript
npm i -D typescript tsc-watch @types/express @types/cors @types/mongoose @types/morgan @types/bcrypt
```
## configuraciones

- creamos el gitignore para no subir el node_modules a github
```javascript
touch .gitignore
```

- configuramos el tsconfig.json
- creamos la estructura de la api en el /src
- configuramos los script de ejecucion en el packege.json

## http module 

[referencia](https://flaviocopes.com/node-make-http-requests/)
[ejemplo](http://zetcode.com/javascript/http/)

## Referencias

[node documentation](https://nodejs.dev/introduction-to-nodejs)
