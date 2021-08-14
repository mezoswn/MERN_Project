const planControllers= require("../controllers/plan.controller") 

module.exports = app => {
  app.get("/api/plan/", planControllers.findAllPlan);
  app.post("/api/plan/new/:id", planControllers.createNewPlan);
};