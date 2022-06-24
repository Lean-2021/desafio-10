export const adminClient = (req, res, next) => {
  //middleware que permite controlar usuarios administradores o no
  const isAdmin = true;
  if (!isAdmin) {
    res.json({
      message: "No tiene permisos suficientes para realizar esta acción",
    });
  } else {
    next();
  }
};
