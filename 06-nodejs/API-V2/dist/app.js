"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importacion de modulos
const express_1 = __importDefault(require("express"));
// importacion de rutas
const customers_routes_1 = __importDefault(require("./routes/customers.routes"));
// inicializacion 
const app = express_1.default();
// configuraciones
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// routes
app.get('/', (req, res) => {
    res.send(`Puedes realizar peticiones en: http://localhost:${app.get('port')}/URI`);
});
app.use('/customers', customers_routes_1.default);
exports.default = app;
