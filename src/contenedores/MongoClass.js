import mongoose from "mongoose";

class MongoClass {
  constructor(collectionName, colSchema) {
    this.collection = mongoose.model(collectionName, colSchema);
  }
  async getAll() {
    //obtener todos los datos
    try {
      const all = await this.collection.find({});
      return all;
    } catch (error) {
      throw new Error("Error:", error);
    }
  }
  // obtener dato por ID
  async getById(id) {
    try {
      const getProduct = await this.collection.findById(id);
      return getProduct;
    } catch (error) {
      throw new Error("Error:", error);
    }
  }
  async create(product) {
    //guardar datos
    try {
      const newProduct = await this.collection.create(product);
      return newProduct;
    } catch (error) {
      throw new Error("Error:", error);
    }
  }
  async update(id, newProduct) {
    //actualizar datos por ID
    try {
      const updateProduct = await this.collection.findByIdAndUpdate(
        id,
        newProduct
      );
      return updateProduct;
    } catch (error) {
      throw new Error("Error:", error);
    }
  }
  async deleteById(id) {
    //borrar dato por ID
    try {
      const deleteProduct = await this.collection.findByIdAndDelete(id);
      return deleteProduct;
    } catch (error) {
      throw new Error("Error:", error);
    }
  }
}

export default MongoClass;
