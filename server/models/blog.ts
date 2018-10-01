import * as mongoose from "mongoose"
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    content: String,
    author: String,
    createAt: Date
  });

  const Blog = mongoose.model('Blog', blogSchema);

  export {Blog}