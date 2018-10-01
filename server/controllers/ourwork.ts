import {OurWork} from "../models"

var OurWorkList = function OurWorkList(req, res, next) {
    OurWork.find()
        .sort([['title', 'ascending']])
        .exec(function (err, ourworks) {
            if (err) { return next(err); }
            // Successful, so render.
            res.render('OurWorklist', { title: 'ourworks info', ourwork: ourworks });
        });
}
export {OurWorkList}