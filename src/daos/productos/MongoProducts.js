import MongoClass from "../../contenedores/MongoClass.js";

export class MongoProducts extends MongoClass {
  //modelo de datos en productos Mongo
  constructor() {
    super("productos", {
      timestamp: {
        type: Date,
        default: Date.now(),
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      code: {
        type: Number,
        required: true,
        unique: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
        default: 0,
      },
    });
  }
}
