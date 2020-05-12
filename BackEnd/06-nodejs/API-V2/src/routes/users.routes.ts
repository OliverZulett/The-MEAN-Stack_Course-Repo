import { Router} from 'express';
import { usersList, createUser, getUserById, updateUser, deleteUserById } from '../controllers/user.controller';
import passport from 'passport';

const userRouter = Router();

userRouter.get('/', usersList);
userRouter.post('/', createUser);
userRouter.get('/:id',passport.authenticate('jwt', {session: false}), getUserById);
userRouter.put('/:id',passport.authenticate('jwt', {session: false}), updateUser);
userRouter.delete('/:id',passport.authenticate('jwt', {session: false}), deleteUserById);

export default userRouter;
