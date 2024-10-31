import { z } from "zod";

export type Id = ReturnType<typeof crypto.randomUUID>;

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  technologies: z.array(z.string()),
  repositoryURL: z.string().url(),
  status: z.string(),
  isPublic: z.boolean()
});

export type Project = z.infer<typeof ProjectSchema>;



export type project = {
    id : string;
    name : string
    description : string
    startDate : string
    endDate? : string
    technologies : string
    repositoryURL : string
    status : string
    isPublic : boolean
}

export type experience = {
    id : Id
    studentName : string
    degree : string
    studentPoints : number
    experiences : string[]
    email : string
}

export type ContactForm = {
    id : Id
    senderName : string
    message : string
}