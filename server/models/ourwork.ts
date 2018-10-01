import * as mongoose from "mongoose"
var Schema = mongoose.Schema;

var ourworkSchema = new Schema({
    title: String,
    code: String,
    about: String,
    video: String
  });

  const OurWork = mongoose.model('OurWork', ourworkSchema);

  export {OurWork}