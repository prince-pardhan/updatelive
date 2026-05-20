import mongoose from "mongoose";

const newsSchema =
  new mongoose.Schema(
    {
      title: String,

      description: String,

      avtar: String,

      category: String,

      author: String,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.models
  .News ||
  mongoose.model(
    "News",
    newsSchema
  );