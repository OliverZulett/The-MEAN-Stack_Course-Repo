// importacion de modulos
import express, {Request, Response} from 'express';

// importacion de rutas
import customerRouter from './routes/customers.routes';

// inicializacion 
const app = express();

// configuraciones
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.get('/', (req: Request, res: Response) => {
    res.send(`Puedes realizar peticiones en: http://localhost:${app.get('port')}/URI`);
});
app.use('/customers',customerRouter);

export default app;
