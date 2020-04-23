// importacion de modulos
import express, {Request, Response} from 'express';
import cors from 'cors';
import passport from 'passport';

// importacion de rutas
import customerRouter from './routes/customers.routes';

// importacion de middlewares
import passportMiddleware from './middlewares/passport';

// inicializacion 
const app = express();

// configuraciones
app.set('port', process.env.PORT || 3000);
app.use(cors());

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get('/', (req: Request, res: Response) => {
    res.send(`Puedes realizar peticiones en: http://localhost:${app.get('port')}/URI`);
});
app.use('/customers',customerRouter);
app.use('/login',customerRouter);

export default app;
