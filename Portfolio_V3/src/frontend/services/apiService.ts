import { project } from "../components/types";
import {ofetch} from "ofetch"
import {API_URL} from "../config"

export const fetchProjects = async (): Promise<project[]> => {
  return await ofetch(API_URL);
};
export const createProject = async (newProject: project) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProject),
  });
  if (!response.ok) {
    throw new Error("Feilet ved opprettelse av prosjekt");
  }
  return response.json();
};

export const deleteProject = async (id: string) => {
  const response = await fetch(`http://localhost:3999/api/projects/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Feilet ved sletting av prosjekt");
  }
};