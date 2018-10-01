import * as express from 'express';
import {MemberList} from "../controllers/members"
var router = express.Router();

router.get("/", MemberList)

export {router as MemberRouter}

