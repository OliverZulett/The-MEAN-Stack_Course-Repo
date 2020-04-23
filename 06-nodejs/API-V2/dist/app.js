"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importacion de modulos
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
// importacion de rutas
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
// importacion de middlewares
const passport_2 = __importDefault(require("./middlewares/passport"));
// inicializacion 
const app = express_1.default();
// configuraciones
app.set('port', process.env.PORT || 3000);
app.use(cors_1.default());
// middlewares
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
// routes
app.get('/', (req, res) => {
    res.send(`Puedes realizar peticiones en: http://localhost:${app.get('port')}/URI`);
});
app.use('/users', users_routes_1.default);
app.use('/login', auth_routes_1.default);
exports.default = app;
