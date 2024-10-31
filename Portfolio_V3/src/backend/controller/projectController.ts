import { Request, Response } from "express";
import * as projectService from "../service/projectService";
import { projectSchema } from "../validation/projectSchema";
import { z } from "zod";

export const getProjects = async (req: Request, res: Response) => {
  const projects = await projectService.fetchAllProjects();
  res.json(projects);
};

export const getProject = async (req: Request, res: Response) => {
  const project = await projectService.fetchProjectById(req.params.id);
  res.json(project);
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const validatedData = projectSchema.parse(req.body); 
    const newProject = await projectService.addProject(validatedData); 
    res.json(newProject);
  } catch (error) {
    if (error instanceof z.ZodError) {
      
      return res.status(400).json({ errors: error.errors });
    }
    console.log(error)
    res.status(500).json({ message: "Noe feilet..." });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    
    const validatedData = projectSchema.parse(req.body);

    const updatedProject = await projectService.modifyProject(req.params.id, validatedData);
    res.json(updatedProject);
  } catch (error) {
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Noe feilet..t" });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  await projectService.removeProject(req.params.id);
  res.status(204).send();
};