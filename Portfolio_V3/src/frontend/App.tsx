import { useState, type FormEvent, useEffect } from "react";
import { project,experience } from "./components/types";
import CreateProject from "./components/CreateProject";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import CreateContact from "./components/CreateContact";
import { useProjects } from "./hooks/useProjects";
import Layout from "./components/Layout";
import {getRoleFromCookies} from "./cookieHelper"

function App() {
  
  const role = getRoleFromCookies();
  const student = 'Oskar Manstad'
  const degree = 'Bachelor IT'
  const points = 180
  const experiencesArray = ['Figma UI for customer X ',' Website for customer Y']
  const email = 'student@hiof.no'

  const [experiences, setExperiences] = useState<experience[]>([
    {id: crypto.randomUUID(), studentName: student, degree: degree, studentPoints: points, experiences: experiencesArray, email: email}
  ]);
  
  

  const { data: projects, add, remove, status, error } = useProjects();


  return (
    <>
     <Layout>
      <section>
        <Experiences experiences={experiences}></Experiences>
      </section>
      <aside id="projectListAside">
        {status === "loading" && <p>Laster prosjekter...</p>}
        {status === "error" && <p className="error">{error}</p>}
        {role === "admin" ? (
        <p>Du har tilgang til alle prosjektene (Admin-visning)</p>
      ) : (
        <p>Du ser kun offentlige prosjekter.</p>
      )}
        {status === "success" && <Projects projects={projects} />}
      </aside>
      <aside className="asideForm">
        <CreateContact /> 
        <CreateProject onAdd={add} />
        </aside>
        </Layout> 
    </>
  );
}

export default App
