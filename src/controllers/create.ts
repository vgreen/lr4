import {User} from "../entity/User";
import {getManager} from "typeorm";
import {Articles} from "../entity/Articles";
import {Request, Response, Router} from "express";
import {Blogs} from "../entity/Blogs";


export async function createNews(req: Request, response: Response){
    try{
        const request = await req;
        const { title, text, userId, img_link, blogId } = request.body;
        response.json(request.body);

        const entityManager = getManager(); // you can also get it via getConnection().manager
        //create a article
        const article = new Articles();
        article.title = title;
        article.text = text;
        article.date_creation = new Date();
        article.img_link = img_link;
        await entityManager.save(article);

        //add article to Author
        const user = await entityManager.findOne(User, userId);
        user.articles = user.articles ? [...user.articles, article] : [article];
        await entityManager.save(user);

        //add article to Blog
        const blog = await entityManager.findOne(Blogs, blogId);
        blog.articles =  blog.articles ? [...blog.articles, article] : [article];
        await entityManager.save(blog);
        console.log('done');
    }
    catch (e) {
        console.log(e.message)
    }
};
