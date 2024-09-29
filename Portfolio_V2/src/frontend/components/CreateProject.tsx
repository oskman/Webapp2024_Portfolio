import { FormEvent, useState } from "react";
import { project } from "./types";

type CreateProjectProps = {
    onAdd: (newProject: project) => void;
};

export default function CreateProject({ onAdd }: CreateProjectProps) {
    const [newProject, setNewProject] = useState<project>({
        id: crypto.randomUUID(),
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        technologies: [],
        repositoryURL: '',
        status: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProject((prev) => ({ ...prev, [name]: value }));
    };

    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd(newProject); 
        alert("prosjekt lagt til!")
        setNewProject({
            id: crypto.randomUUID(),
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            technologies: [],
            repositoryURL: '',
            status: ''
        });
    };

    return (
        <aside id="projectFormAside">
            <h3>Legg til et nytt prosjekt</h3>
            <form id="projectForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Navn:</label>
                <input type="text" id="name" name="name" value={newProject.name} onChange={handleChange} required/>
                
                <label htmlFor="description">Beskrivelse:</label>
                <input type="text" id="description" name="description" value={newProject.description} onChange={handleChange}/>
                
                <label htmlFor="startDate">StartDato:</label>
                <input type="text" id="startDate" name="startDate" value={newProject.startDate} onChange={handleChange} required/>
                
                <label htmlFor="endDate">SluttDato:</label>
                <input type="text" id="endDate" name="endDate" value={newProject.endDate} onChange={handleChange}/>
                
                <label htmlFor="technologies">Teknologier:</label>
                <input type="text" id="technologies" name="technologies" value={newProject.technologies} onChange={handleChange} required/>
                
                <label htmlFor="repositoryURL">Repo URL:</label>
                <input type="text" id="repositoryURL" name="repositoryURL" value={newProject.repositoryURL} onChange={handleChange} required/>
                
                <label htmlFor="status">Status:</label>
                <input type="text" id="status" name="status" value={newProject.status} onChange={handleChange} required/>
                
                <button type="submit">Legg til</button>
            </form>
        </aside>
    );
}