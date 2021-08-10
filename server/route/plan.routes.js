const planControllers= require("../controllers/plan.controller") 

module.exports = app => {
  app.get("/api/plan/", planControllers.findAllPlan);
  app.get("/api/plan/:id", planControllers.findOnePlan);
  app.post("/api/plan/new", planControllers.createNewPlan);
  app.put("/api/plan/update/:id", planControllers.updatePlan);
  app.delete("/api/plan/delete/:id", planControllers.deleteplan);
};