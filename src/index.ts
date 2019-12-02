import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express'
import {createNews} from "./controllers/create";
import {getNews} from "./controllers/read";
import {deleteNews} from "./controllers/delete";
import {updateNews} from "./controllers/update";
import {init} from "./controllers/init";

createConnection().then(async connection => {

    const cors = require('cors');
    const server = express();
    server.use(cors());
    server.use(express.json());
    server.get('/init', init);
    server.post('/news/create', createNews);
    server.post('/news/update', updateNews);
    server.get('/news/get', getNews);
    server.delete('/news/delete', deleteNews);
    server.listen(3005, () => console.log(`Backend running on 3005`));

}).catch(error => console.log(error));
