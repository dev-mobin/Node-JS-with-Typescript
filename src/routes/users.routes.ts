import { Router } from 'express';
import UserController from '../controllers/users.contoller';

const router = Router();

router.post('/saveUser', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
