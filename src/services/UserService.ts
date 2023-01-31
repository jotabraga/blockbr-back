import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";

export interface ICreateUser {
    name: string;
    email: string;
    cpf: string;
    birthDay: string;
    salary: string;
}
export async function create(userData: ICreateUser) {
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

export async function list() {
    const allUsers = await userRepository.find({ order: { id: "DESC" } });
    return allUsers;
}

export async function remove(id: number) {
    const userToDelete = await findOne(Number(id));
    if (!userToDelete)
        throw new Error('Error in delete user, this user do not exist in database');
    else await userRepository.remove(userToDelete);
}

export async function findOne(id: number) {
    const user = await userRepository.findOne({ where: { id } });
    return user;
}

export async function update(id: number, newDataUser: ICreateUser) {
    const userToUpdate = await findOne(Number(id));
    if (!userToUpdate) throw new Error('Error in update user, this user do not exist in database');
    const updatedUser = userRepository.save({ ...userToUpdate, ...newDataUser })
    return updatedUser;
}
