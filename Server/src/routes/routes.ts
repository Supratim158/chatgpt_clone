import { Router } from "express";
import helloRouter from "./hello_router";
import openAIRouter from "./open_ai_router";

const router = Router();
router.use("/hello", helloRouter);
router.use("/generate_response", openAIRouter);
export default router;
