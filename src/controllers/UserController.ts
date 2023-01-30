import { Request, Response } from "express";
import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";

export interface ICreateUser {
    name: string;
    email: string;
    cpf: string;
    birthDay: string;
    salary: string;
}

export class UserController {
    async createUser(req: Request, res: Response) {
        const { name, email, cpf, birthDay, salary } = req.body;

        try {
            const newUser = userRepository.create({
                name,
                email,
                cpf,
                birthDay,
                salary,
            });
            await userRepository.save(newUser);
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
            const allUsers = await userRepository.find({ order: { id: "DESC" } });
            return allUsers;
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

        try {

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'There is an error in list all users' })
        }


    }
}
