import app from "./app";
import './database';


app.listen(app.get('port'));
console.log(`el servidor se ejecuta en el puerto: ${app.get('port')}`);
