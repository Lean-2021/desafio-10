import { firebaseConfig } from "./firebaseConfig.js";
import { mongoConfig } from "./mongoConfig.js";

export default {
  mongoDB: {
    connection: mongoConfig(),
  },
  firebaseDB: {
    connect: firebaseConfig(),
  },
};
