import { useState, type FormEvent, useEffect } from "react";
import { project,experience } from "./components/types";
import {ofetch} from "ofetch"
import CreateProject from "./components/CreateProject";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import CreateContact from "./components/CreateContact";


function App() {
  const student = 'Oskar Manstad'
  const degree = 'Bachelor IT'
  const points = 180
  const experiencesArray = ['Figma UI for customer X','Website for customer Y']
  const email = 'student@hiof.no'


  const [experiences, setExperiences] = useState<experience[]>([
    {id: crypto.randomUUID(), studentName: student, degree: degree, studentPoints: points, experiences: experiencesArray, email: email}
  ]);
  
  const [projects, setProjects] = useState<project[]>([]);

  const add = (newProject: project) => {
    setProjects((prevProjects) => {
      const projectExists = prevProjects.some((proj) => proj.name === newProject.name);
      
      if (!projectExists) {
        return [...prevProjects, newProject];
      }
      return prevProjects;
    });
  };

  const remove = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const initializeProjects = () => {
    ofetch("http://localhost:3999/projects").then(
      (fetchedProjects:project[]) => {
        fetchedProjects.forEach((proj) => {
          
          add(proj)
        })
      }
    )
  }

  useEffect(() => {
    initializeProjects();
  },[]);

  return (
    <>
      <section>
        <Experiences experiences={experiences}></Experiences>
      </section>
      <aside id="projectListAside">
        <Projects projects={projects} /> 
      </aside>
      <CreateProject onAdd={add} />
      <CreateContact /> 
      
    </>
  );
}

export default App
