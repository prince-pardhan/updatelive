import mongoose from "mongoose";

export const connectDB =
  async () => {
    try {
      if (
        mongoose.connections[0]
          .readyState
      ) {
        return;
      }

      await mongoose.connect(
        process.env
          .MONGODB_URI as string
      );

      console.log(
        "MongoDB Connected"
      );
    } catch (error) {
      console.log(error);
    }
  };