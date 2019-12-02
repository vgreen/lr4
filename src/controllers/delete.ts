import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Articles} from "../entity/Articles";

export const deleteNews = async (req: Request, response: Response) => {
    try {
        const request = await req;
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Articles)
            .where("id = :id", { id:request.query.id })
            .execute();
        response.send('deleted')
    } catch (e) {
        console.log(e.message)
    }
};