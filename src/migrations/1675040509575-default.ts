import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675040509575 implements MigrationInterface {
    name = 'default1675040509575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" text NOT NULL, "name" text NOT NULL, "cpf" text NOT NULL, "birthDay" text NOT NULL, "salary" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
