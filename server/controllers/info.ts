import {Info} from "../models"

var InfoList = function InfoList(req, res, next) {
    Info.find()
        .sort([['title', 'ascending']])
        .exec(function (err, info) {
            if (err) { return next(err); }
            // Successful, so render.
            res.render('Infolist', { title: 'ourworks info', info: info });
        });
}
export {InfoList}