import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Articles} from "./Articles";

@Entity()
export class Blogs {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    date_creation: Date;

    @OneToMany(type => Articles, article => article.blog)
    articles: Articles[];

}