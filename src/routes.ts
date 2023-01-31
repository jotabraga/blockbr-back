import { Router } from 'express';
import { UserController } from './controllers/UserController';

const routes = Router();

//to-do - implements an module for controller dependencies injection
//to avoid multiple instances of service and controller classes

routes.post('/users', new UserController().createUser);
routes.get('/users', new UserController().listUsers);
routes.delete('/users/:id/user', new UserController().deleteUser);
routes.put('/users/:id/user', new UserController().updateUser);

export { routes }