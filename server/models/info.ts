import * as mongoose from "mongoose"
var Schema = mongoose.Schema;

var infoSchema = new Schema({
    title: String,
    code: {
        type: String,
        unique: true
    },
    about: String
  });

  const Info = mongoose.model('Info', infoSchema);
  
  export {Info}