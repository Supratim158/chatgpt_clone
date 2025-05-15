"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generate_openai_controllers_1 = require("../controllers/generate_openai_controllers");
const openAIRouter = (0, express_1.Router)();
openAIRouter.post("/", generate_openai_controllers_1.generateOpenAiResposnseController);
exports.default = openAIRouter;
