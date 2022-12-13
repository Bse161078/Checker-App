import { NextFunction, Request, Response } from "express";
export default function StringToArray(field: string, type?: string): {
    new (): {
        use(req: Request, res: Response, next: NextFunction): void;
    };
};
