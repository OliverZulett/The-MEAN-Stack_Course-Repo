import { Router} from 'express';
import { customersList, createCustomer, getCustomerById, updateCustomer, deleteCustomerById } from '../controllers/customer.controller';

const customerRouter = Router();

customerRouter.get('/', customersList);
customerRouter.post('/', createCustomer);
customerRouter.get('/:id', getCustomerById);
customerRouter.put('/:id', updateCustomer);
customerRouter.delete('/:id', deleteCustomerById);

export default customerRouter;
