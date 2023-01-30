import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";

export interface ICreateUser {
    name: string;
    email: string;
    cpf: string;
    birthDay: string;
    salary: string;
}

export class UserService {
    public async create(userData: ICreateUser) {
        const { name, email, cpf, birthDay, salary } = userData;
        const newUser = userRepository.create({
            name,
            email,
            cpf,
            birthDay,
            salary,
        });
        await userRepository.save(newUser);
        return newUser;
    }

    public async list() {
        const allUsers = await userRepository.find({ order: { id: "DESC" } });
        return allUsers;
    }
}
