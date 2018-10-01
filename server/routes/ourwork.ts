import * as express from 'express';
import {OurWorkList} from "../controllers"
var router = express.Router();

router.get("/", OurWorkList)

export {router as OurWorkRouter}

