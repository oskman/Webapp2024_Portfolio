import * as projectRepository from "../repository/projectRepository";
import { projectSchema } from "../validation/projectSchema";
import { z } from "zod";

export const fetchAllProjects = async () => {
  return await projectRepository.getAllProjects();
};

export const fetchProjectById = async (id: string) => {
  return await projectRepository.getProjectById(id);
};

export const addProject = async (projectData: any) => {
  
  const validatedData = projectSchema.parse(projectData); 
  
  return await projectRepository.createProject(validatedData);
};

export const modifyProject = async (id: string, projectData: any) => {
  
    
  const validatedData = projectSchema.parse(projectData.body);
  return await projectRepository.updateProject(id, projectData);
    
};

export const removeProject = async (id: string) => {
  return await projectRepository.deleteProject(id);
};