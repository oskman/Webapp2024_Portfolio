import { PrismaClient } from "@prisma/client";
import { projectSchema } from "../validation/projectSchema";
import { z } from "zod";
const prisma = new PrismaClient();

export const getAllProjects = () => {
  return prisma.project.findMany();
};

export const getProjectById = (id: string) => {
  return prisma.project.findUnique({
    where: { id },
  });
};

export const createProject = (projectData: any) => {
  const validatedData = projectSchema.parse(projectData);

  
  return prisma.project.create({
    data: {
      ...validatedData,
      startDate: validatedData.startDate ? new Date(validatedData.startDate) : null,
      endDate: validatedData.endDate ? new Date(validatedData.endDate) : null,
    },
  });
};
    
    

export const updateProject = (id: string, projectData: any) => {
  try {
    
    const validatedData = projectSchema.parse(projectData.body);
    return prisma.project.update({
      where: { id },
      data: projectData,
  });} catch (error) {

    if (error instanceof z.ZodError) {
      return projectData.status(400).json({ errors: error.errors });
    }
    projectData.status(500).json({ message: "Noe feilet..." });
  }
};


export const deleteProject = (id: string) => {
  return prisma.project.delete({
    where: { id },
  });
};