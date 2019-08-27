import { Router } from "express";
const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ teste: "teste123" });
});

export default routes;
