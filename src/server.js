import express from "express";
import morgan from "morgan";
import { router as routeProduct } from "./routes/routeProducts.js";
import { router as routeCart } from "./routes/routeCart.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan("dev"));
app.use(express.json()); //usar formato JSON
app.use("/api/productos", routeProduct); //ruta api productos
app.use("/api/carrito", routeCart); //ruta carrito

app.listen(PORT, () => {
  //puerto de escucha 8080
  console.log(`Server on port ${PORT}...`);
});
