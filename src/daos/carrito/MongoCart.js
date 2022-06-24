import MongoClass from "../../contenedores/MongoClass.js";

export class MongoCart extends MongoClass {
  //modelo de datos en carrito
  constructor() {
    super("carritos", {
      timestamp: {
        type: Date,
        default: Date.now(),
      },
      products: [],
    });
  }
}
