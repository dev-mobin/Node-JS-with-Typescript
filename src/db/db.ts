import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const ConnectDB = async () => {
  try {
    const connectInstances = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(connectInstances.connection.host, "ConnectionIntances");
  } catch (err) {
    console.log("MONGODB ERROR", err);
    process.exit(1);
  }
};

export default ConnectDB;
