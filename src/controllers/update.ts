import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Articles} from "../entity/Articles";

export async function updateNews(req: Request, response: Response){
    try{
        const request = await req;
        const { title, text, img_link} = request.body;
        const { id } = request.query;
        response.json(request.body);

        const entityManager = getManager(); // you can also get it via getConnection().manager
        //create a article
        const article = await entityManager.findOne(Articles, id);
        article.title = title;
        article.text = text;
        article.img_link = img_link;
        await entityManager.save(article);

        console.log('updated article id = ' + id);
    }
    catch (e) {
        console.log(e.message)
    }
};