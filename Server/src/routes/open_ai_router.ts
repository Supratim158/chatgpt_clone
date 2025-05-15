import { Router, Request, Response } from "express";
import { generateOpenAiResposnseController } from "../controllers/generate_openai_controllers";

const openAIRouter = Router();

openAIRouter.post("/", generateOpenAiResposnseController);

export default openAIRouter;
