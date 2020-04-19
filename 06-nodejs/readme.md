# nodejs
## Comandos

iniciar proyecto con node:

```javascript
npm init -y
```

iniciar proyecto con node:

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
