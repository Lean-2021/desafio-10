import config from "../configDB.js";
const db = "firebaseDB";
let daosProducts;
let daosCart;

//importar según la base de datos que se elija en DB_NAME
if (db === "mongoDB") {
  //opcion MongoDB
  config.mongoDB.connection;
  import("./productos/MongoProducts.js")
    .then(({ MongoProducts }) => {
      daosProducts = new MongoProducts();
    })
    .catch((err) => console.log(err));
  import("./carrito/MongoCart.js")
    .then(({ MongoCart }) => {
      daosCart = new MongoCart();
    })
    .then(() => console.log("conectado a mongo DB"))
    .catch((err) => console.log(err));
} else if (db === "firebaseDB") {
  //opcion firebase
  config.firebaseDB.connect;
  import("./productos/FirebaseProducts.js")
    .then(({ FirebaseProducts }) => {
      daosProducts = new FirebaseProducts();
    })
    .then(() => console.log("conectado a Firebase DB"))
    .catch((err) => console.log(err));
  import("./carrito/FirebaseCart.js")
    .then(({ FirebaseCart }) => {
      daosCart = new FirebaseCart();
    })
    .catch((err) => console.log(err));
} else {
  // si no se escoge base de datos mostrar por consola para seleccionar una
  console.log(
    "conecte una base de datos en .env DB_NAME=mongoDB ó DB_NAME=firebaseDB"
  );
}

export { daosProducts, daosCart };
