import { Request, Response } from "express";

export const generateOpenAiResposnseController = (
    req: Request,
    res: Response
) => {
    try {
    const reqBody = req.body;
    const prompt = reqBody["prompt"];
    } catch (error) {

    }
};
