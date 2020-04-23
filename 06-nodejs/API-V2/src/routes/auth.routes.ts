import { Router } from 'express';
import { singUp, singIn } from '../controllers/user.controller';


const router = Router();

router.post('/signup', singUp);
router.post('/signin', singIn);
export default router;