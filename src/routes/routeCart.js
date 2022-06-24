import { Router } from "express";
import { daosCart as api } from "../daos/index.js";
import { daosProducts as products } from "../daos/index.js";

export const router = Router();

router.post("/", async (req, res) => {
  //crear un carrito
  try {
    const createCart = await api.create();
    res.json({ id: createCart.id });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  //eliminar carrito por ID
  try {
    const { id } = req.params;
    await api.deleteById(id);
    res.json({ message: "Carrito eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id/productos", async (req, res) => {
  //mostrar los productos en el carrito según el ID del carrito
  try {
    const { id } = req.params;
    const getCart = await api.getById(id);
    res.json(getCart.products);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:id/productos/:idProduct", async (req, res) => {
  //agregar productos al carrito segun el Id del carrito y el ID del producto
  try {
    const { id, idProduct } = req.params;
    const getCart = await api.getById(id);
    const getProduct = await products.getById(idProduct);
    getCart.products.push(getProduct);
    await api.create(getCart, id);
    res.json({ message: "Producto agregado correctamente" });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id/productos/:idProduct", async (req, res) => {
  // eliminar producto del carrito por ID de carrito y de producto
  try {
    const { id, idProduct } = req.params;
    const getCart = await api.getById(id);
    const newProd = getCart.products.filter(
      (element) => element._id != idProduct
    );
    getCart.products = newProd;
    await api.update(id, getCart);
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
});
