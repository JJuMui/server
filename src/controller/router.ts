import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("WELCOME TO Main Page!!");
});

export default router;

// MAIN ROUTER
