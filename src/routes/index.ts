import express from "express";
import PingController from "../controllers/ping";
import ServiceRouter from "./service.router";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/services", ServiceRouter);

export default router;