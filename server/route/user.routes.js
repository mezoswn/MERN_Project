const userControllers = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/user/", userControllers.findAllusers);
  app.get("/api/user/:id", userControllers.findOneSingleuser);
  // app.post("/api/user/new", userControllers.createNewuser);
  // app.put("/api/user/update/:id", userControllers.updateExistinguser);
  // app.delete("/api/user/delete/:id", userControllers.deleteAnExistinguser);
  app.post("/api/register/new", userControllers.register);
  app.post("/api/login", userControllers.login);
  app.get("/api/logout", userControllers.logout);
};
