import { Router } from "express";
import * as projectController from "../controller/projectController";
import { Request, Response, NextFunction } from "express";

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);
const router = Router();

router.get("/projects", projectController.getProjects);
router.get("/projects/:id", projectController.getProject);
router.post("/projects", asyncHandler(projectController.createProject));
router.put("/projects/:id", asyncHandler(projectController.updateProject));
router.delete("/projects/:id", projectController.deleteProject);

export default router;