import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1, "Navn er påkrevd"),
  description: z.string(),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Ugyldig datoformat",
  }),
  endDate: z.string().nullable().optional()
    .refine((date) => date === null || date === undefined || !isNaN(Date.parse(date)), {
    message: "Ugyldig datoformat",
  }),
  technologies: z.string(),
  repositoryURL: z.string().url("Ugyldig URL"),
  status: z.string(),
  isPublic: z.boolean(),
});