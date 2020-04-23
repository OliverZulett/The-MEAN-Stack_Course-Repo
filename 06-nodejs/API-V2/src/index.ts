import app from "./app";
import './database';


app.listen(app.get('port'));
console.log(`el servidro se ejecuta en el puerto: ${app.get('port')}`);
