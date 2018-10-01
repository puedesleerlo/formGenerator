import * as mongoose from "mongoose"

var Schema = mongoose.Schema;

  var memberSchema = new Schema({
    firstName: String,
    lastName: String,
    about: String
  });

  memberSchema
  .virtual('name')
  .get(function () {
    return this.firstName +" " + this.lastName;
  });

const Member = mongoose.model('Member', memberSchema);

export {Member}