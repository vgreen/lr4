import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Articles} from "./Articles";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(type => Articles, article => article.user)
    articles: Articles[];

}
