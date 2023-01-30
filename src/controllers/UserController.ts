import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";

export interface ICreateUser {
    name: string;
    email: string;
    cpf: string;
    birthDay: string;
    salary: string;
}

