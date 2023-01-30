import { Request, Response } from "express";
import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";
import { UserService } from '../services/UserService'

export class UserController {
    constructor(private userService: UserService) { }

    async createUser(req: Request, res: Response) {
        try {
            const newUser = this.userService.create(req.body);
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
            const allUsers = this.userService.list();
            return res.status(20).json(allUsers);
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
            const userToDelete = await this.getUserById(Number(id));
            if (!userToDelete)
                throw new Error('Error in delete user, this user do not exist in database');
            else await userRepository.remove(userToDelete);
            return res.status(200).json({ message: 'User removed' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'There is an error in delete user' })
        }
    }

    async getUserById(id: number) {
        try {
            const user = await userRepository.findOne({ where: { id } });
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
            const userToUpdate = await this.getUserById(Number(id));
            if (!userToUpdate) throw new Error('Error in update user, this user do not exist in database');
            const updatedUser = userRepository.save({ ...userToUpdate, ...newDataUser })
            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'There is an error in update user' })
        }
    }
}
