import FirebaseClass from "../../contenedores/FirebaseClass.js";

export class FirebaseProducts extends FirebaseClass {
  constructor() {
    super("productos");
  }
  async create(product) {
    //guardar productos con la estructura de datos Firebase
    try {
      const { name, description, price, code, stock, thumbnail } = product;
      const doc = this.query.doc();
      const idDoc = doc._path.segments[1];
      const newProduct = {
        timestamp: Date.now(),
        name,
        description,
        code,
        thumbnail,
        price,
        stock,
      };
      const addProduct = { _id: idDoc, ...newProduct };
      await doc.create(addProduct);
      return addProduct;
    } catch (error) {
      throw new Error(error);
    }
  }
}
