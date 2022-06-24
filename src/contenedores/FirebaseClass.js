import admin from "firebase-admin";

const db = admin.firestore();

export default class FirebaseClass {
  constructor(colectionName) {
    this.query = db.collection(colectionName);
  }
  async getAll() {
    //mostrar todos los datos
    try {
      const getDoc = await this.query.get();
      const all = getDoc.docs;
      const allData = all.map((doc) => ({
        id: doc.id,
        timestamp: doc.data().timestamp,
        name: doc.data().name,
        description: doc.data().description,
        code: doc.data().code,
        thumbnail: doc.data().thumbnail,
        price: doc.data().price,
        stock: doc.data().stock,
      }));
      return allData;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getById(id) {
    //mostrar datos por ID
    try {
      const doc = this.query.doc(id);
      const getDoc = await doc.get();
      const dataDoc = getDoc.data();
      return dataDoc;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, newObj) {
    //actualizar datos según ID
    const { name, description, price, code, stock, thumbnail } = newObj;
    try {
      const doc = this.query.doc(id);
      const updateDoc = doc.update(newObj);
      return updateDoc;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteById(id) {
    // eliminar datos según ID
    try {
      const doc = this.query.doc(id);
      const deleteDoc = doc.delete();
      return deleteDoc;
    } catch (error) {
      throw new Error(error);
    }
  }
}
