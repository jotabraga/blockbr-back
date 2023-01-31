import { Request, Response } from "express";
import { create, findOne, list, remove, update } from '../services/UserService'

export class UserController {

    async createUser(req: Request, res: Response) {
        try {
            const newUser = await create(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ message: "There is an error in create new user" });
        }
    }

    async listUsers(req: Request, res: Response) {
        try {
            const allUsers = await list();
            return res.status(200).json(allUsers);
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ message: "There is an error in list all users" });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await remove(Number(id));
            return res.status(200).json({ message: 'User removed' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'There is an error in delete user' })
        }
    }

    async getUserById(id: number) {
        try {
            const user = findOne(id);
            return user;
        } catch (error) {
            console.error(error);
            throw new Error('There is an error in get user by id');
        }
    }

    async updateUser(req: Request, res: Response) {
        const newDataUser = req.body;
        const { id } = req.params;
        try {
            const updatedUser = await update(Number(id), newDataUser);
            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'There is an error in update user' })
        }
    }
}
