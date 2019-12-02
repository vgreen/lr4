import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Blogs} from "./Blogs";
import {User} from "./User";

@Entity()
export class Articles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    date_creation: Date;

    @Column()
    text: string;

    @Column()
    img_link: string;

    @ManyToOne(type => Blogs, blog => blog.articles)
    blog: Blogs;

    @ManyToOne(type => User, user => user.articles)
    user: User;
}