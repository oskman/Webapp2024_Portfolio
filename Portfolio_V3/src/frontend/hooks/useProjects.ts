import { useState, useEffect, useCallback } from "react";
import { project } from "../components/types";
import { fetchProjects, createProject, deleteProject } from "../services/apiService";

type Status = "idle" | "loading" | "error" | "success";

export const useProjects = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState<project[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setStatus("loading");
      const fetchedProjects = await fetchProjects();
      setData(fetchedProjects);
      setStatus("success");
    } catch (error) {
      setError("Feilet ved henting av prosjekter");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const add = async (newProject: project) => {
    try {
      console.log(newProject);
      const createdProject = await createProject(newProject); 
      setData((prevProjects) => [...prevProjects, createdProject]);
    } catch (error) {
      console.log("errors:", error); 
      setError("Feilet ved opprettelse av prosjekt");
    }
  };

  const remove = async (id: string) => {
    try {
      await deleteProject(id);
      setData((prevProjects) => prevProjects.filter((project) => project.id !== id));
    } catch (error) {
      setError("Feilet ved sletting av prosjekt");
    }
  };

  return {
    data,
    add,
    remove,
    status,
    error,
  };
};