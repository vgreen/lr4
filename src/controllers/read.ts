import {Request, Response} from "express";
import {getManager, getRepository} from "typeorm";
import {Articles} from "../entity/Articles";

export const getNews = async (req: Request, response: Response) => {
    try {
        const request = await req;
        console.log(request);


        const articlesRepo = getRepository(Articles); // you can also get it via getConnection().manager
        //search a article

        const article = request.query.id ? await articlesRepo.findOne(request.query.id) : await articlesRepo.find();
        console.log(article);
        response.json(article);
    } catch (e) {
        console.log(e.message)
    }
};