import { Router} from 'express';
import { customersList, createCustomer, getCustomerById, updateCustomer, deleteCustomerById } from '../controllers/customer.controller';
import passport from 'passport';

const customerRouter = Router();

customerRouter.get('/', customersList);
customerRouter.post('/',passport.authenticate('jwt', {session: false}), createCustomer);
customerRouter.get('/:id',passport.authenticate('jwt', {session: false}), getCustomerById);
customerRouter.put('/:id',passport.authenticate('jwt', {session: false}), updateCustomer);
customerRouter.delete('/:id',passport.authenticate('jwt', {session: false}), deleteCustomerById);

export default customerRouter;
