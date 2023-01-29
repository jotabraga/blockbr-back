import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    OneToMany,
} from "typeorm";

@Entity("users")
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ nullable: true })
    pictureUrl: string;

    @OneToOne(() => HotelReservation, (hotelReservation) => hotelReservation.user)
    hotelReservation: HotelReservation;

    @OneToOne(() => Booking, (booking: Booking) => booking.user)
    booking: Booking;

    @OneToMany(() => Activity_User, (activity: Activity_User) => activity.user, {
        eager: true,
    })
    activity: Activity_User;

    static async createNew(email: string, password: string) {
        await this.validateDuplicateEmail(email);
        const hashedPassword = this.hashPassword(password);

        const newUser = this.create({ email, password: hashedPassword });
        await newUser.save();

        return newUser;
    }

    async changePassword(newPassword: string) {
        this.password = User.hashPassword(newPassword);
        await this.save();
    }

    static hashPassword(password: string) {
        return bcrypt.hashSync(password, 12);
    }

    static async validateDuplicateEmail(email: string) {
        const user = await this.findOne({ email });

        if (user) {
            throw new EmailNotAvailableError(email);
        }
    }

    static async findByEmailAndPassword(email: string, password: string) {
        const user = await this.findOne({ email });

        if (user && bcrypt.compareSync(password, user.password)) {
            return user;
        }

        return null;
    }

    static async addPicture(picture: string, userId: number) {
        const user = await this.findOne({ where: { id: userId } });
        if (!user) throw new Unauthorized();
        if (!picture || picture === "") throw new InvalidData("Foto", ["url vazia"]);
        user.pictureUrl = picture;
        await user.save();
    }

    static async verifyEmail(email: string) {
        const user = await this.findOne({ email });
        if (!user) throw new InvalidEmailError(email);
        return user;
    }
}
