import {Member} from "../models/members"

var MemberList = function memberList(req, res, next) {
    Member.find()
        .sort([['lastName', 'ascending']])
        .exec(function (err, members) {
            if (err) { return next(err); }
            // Successful, so render.
            res.send(members);
        });
}
export {MemberList}