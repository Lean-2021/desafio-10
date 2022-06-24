import FirebaseClass from "../../contenedores/FirebaseClass.js";

export class FirebaseCart extends FirebaseClass {
  constructor() {
    super("carrito");
  }

  async create(data, id) {
    //estructura de datos carrito Firebase
    let newCart = {
      timestamp: Date.now(),
      products: [],
    };
    //actualizar carrito con productos agregados
    if (data !== undefined) {
      try {
        const doc = this.query.doc(id);
        await doc.update(data);
      } catch (error) {
        throw new Error(error);
      }
    } else {
      //crear carrito sin productos
      try {
        const doc = this.query.doc();
        const idDoc = doc._path.segments[1];
        await doc.create(newCart);
        return { id: idDoc };
      } catch (error) {
        throw new Error(error);
      }
    }
  }
}
