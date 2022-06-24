import { Router } from "express";
import { daosProducts as api } from "../daos/index.js";
import { adminClient } from "../middleware/adminClient.js";

export const router = Router();

router.get("/", async (req, res) => {
  //mostrar todos los productos
  try {
    const allProducts = await api.getAll();
    res.json(allProducts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    //obtener producto por ID
    const { id } = req.params;
    const getProduct = await api.getById(id);
    res.json(getProduct);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", adminClient, async (req, res) => {
  // guardar un nuevo producto
  try {
    const newProduct = req.body;
    const saveProduct = await api.create(newProduct);
    res.json(saveProduct);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", adminClient, async (req, res) => {
  // actualizar producto por ID
  try {
    const { id } = req.params;
    const updateProduct = req.body;
    await api.update(id, updateProduct);
    res.json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", adminClient, async (req, res) => {
  //eliminar producto por ID
  const { id } = req.params;
  try {
    const deleteProduct = await api.deleteById(id);
    res.json({ message: "producto eliminado correctamente" });
  } catch (error) {}
});
