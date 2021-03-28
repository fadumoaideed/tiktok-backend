import mongoose from "mongoose";

//create schema to tell db what kind of data struture to expect

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

//Collection inside DB
export default mongoose.model("tiktokVideos", tiktokSchema);
