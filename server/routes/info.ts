import * as express from 'express';
import {InfoList} from "../controllers"
var router = express.Router();

router.get("/", InfoList)

export {router as InfoRouter}

