import { Document, Schema } from "mongoose";

import { Aporte } from "../../interfaces";

export const AporteSchema = new Schema<Aporte & Document>(
  {
    ramo: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    autor: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);
