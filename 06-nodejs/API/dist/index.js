"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importar modulos
const express_1 = __importDefault(require("express"));
// iniciamos la constante app que ejecutara todo
const app = express_1.default();
// realizamos configuraciones para el post
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// especificamos el puerto
const port = 3000;
// escuchamos peticiones del puerto
app.listen(port, () => {
    console.log(`el servidor se ejecuta en el puerto: ${port}`);
});
// ejecutamos los metodos
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'peticion get realizada exitosamente'
    });
});
// create
app.post('/', (req, res) => {
    const dataRecibida = req.body;
    if (!dataRecibida) {
        res.status(200).json({
            ok: false,
            message: 'error al recibir los datos'
        });
    }
    res.status(200).json({
        ok: true,
        message: 'datos recibidos',
        dataRecibida: dataRecibida
    });
});
// update
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const dataRecibida = req.body;
    if (!dataRecibida || !id) {
        res.status(200).json({
            ok: false,
            message: 'error al recibir los datos o el id'
        });
    }
    res.status(200).json({
        ok: true,
        message: 'datos recibidos',
        dataRecibida: dataRecibida,
        id: id
    });
});
// delete
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(200).json({
            ok: false,
            message: 'error al recibir el id'
        });
    }
    res.status(200).json({
        ok: true,
        message: 'id recibido',
        id: id
    });
});
