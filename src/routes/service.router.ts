import express from "express";
import ServiceController from "../controllers/service.controller";

const router = express.Router();

router.get("/", async (req, res) => {
    const controller = new ServiceController();
    const response = await controller.getServices();
    return res.send(response);
  });
  
  router.post("/", async (req, res) => {
    const controller = new ServiceController();
    const response = await controller.createService(req.body);
    return res.send(response);
  });
  
  router.get("/:id", async (req, res) => {
    const controller = new ServiceController();
    const response = await controller.getService(req.params.id);
    if (!response) res.status(404).send({ message: "No service found" });
    return res.send(response);
  });
  
  export default router;