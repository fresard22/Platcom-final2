import dotenv from "dotenv";
import mongoose, { Document, model, Model } from "mongoose";

import { Aporte, User } from "../../interfaces";
import { AporteSchema } from "./Aporte";
import { UserSchema } from "./User";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

declare global {
  namespace NodeJS {
    interface Global {
      dbConnected?: true;
    }
  }
}
if (!global.dbConnected) {
  global.dbConnected = true;
  mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/platcom", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

mongoose.models = {};

export const UserModel: Model<User & Document> = model("User", UserSchema);
export const AporteModel: Model<Aporte & Document> = model(
  "Aporte",
  AporteSchema
);
