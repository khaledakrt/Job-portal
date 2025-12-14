// backend/middleware/auth.ts
import { Request, Response, NextFunction } from "express";

// Middleware simple pour test
export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  // Pour test, on met un ID fixe de recruteur
  req.user = { id: 1 }; 
  next();
};
