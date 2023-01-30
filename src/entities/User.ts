import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    email: string

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text' })
    cpf: string

    @Column({ type: 'text' })
    birthDay: string

    @Column({ type: 'text' })
    salary: string;
}