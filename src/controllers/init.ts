import {getManager} from "typeorm";
import {User} from "../entity/User";
import {Blogs} from "../entity/Blogs";

export const init = async(request, response) => {
    const req = await request;
    const entityManager = getManager();
    const user = new User();
    user.firstName = 'Vlad' + req.query.id
    user.lastName = 'Kolesnikov'
    entityManager.save(user)

    const blog = new Blogs()
    blog.title = 'Blog Vlada ' + req.query.id
    blog.date_creation = new Date();
    entityManager.save(blog);
    response.send('OK!')
};