import { Router, Request, Response } from "express";
import { generateOpenAiResponseController } from "../controllers/generate_openai_controllers";

const openAIRouter = Router();

openAIRouter.post("/", generateOpenAiResponseController); // <-- this is okay

export default openAIRouter;
