import { Request, Response } from "express";

export const generateOpenAiResponseController = (
    req: Request,
    res: Response
): Response => {
    try {
        const prompt = req.body.prompt;
        return res.json({ data: prompt });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ data: error });
    }
};

