import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

export const firebaseConfig = () => {
  const PRIVATE_KEY_ID = process.env.PRIVATE_KEY_ID;
  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  const TYPE = process.env.TYPE;
  const PROYECT_ID = process.env.PROYECT_ID;
  const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
  const CLIENT_ID = process.env.CLIENT_ID;
  const AUTH_URI = process.env.AUTH_URI;
  const TOKEN_URI = process.env.TOKEN_URI;
  const AUTH_PROVIDER = process.env.AUTH_PROVIDER;
  const CLIENT_CERT = process.env.CLIENT_CERT;

  admin.initializeApp({
    credential: admin.credential.cert({
      type: TYPE,
      project_id: PROYECT_ID,
      private_key_id: PRIVATE_KEY_ID,
      private_key: PRIVATE_KEY,
      client_email: CLIENT_EMAIL,
      client_id: CLIENT_ID,
      auth_uri: AUTH_URI,
      token_uri: TOKEN_URI,
      auth_provider_x509_cert_url: AUTH_PROVIDER,
      client_x509_cert_url: CLIENT_CERT,
    }),
  });
};
