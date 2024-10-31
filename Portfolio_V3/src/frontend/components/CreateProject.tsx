import { FormEvent, useState } from "react";
import { project } from "./types";
import {useForm} from "../hooks/useForm"


type CreateProjectProps = {
    onAdd: (newProject: project) => void;
};

const initialProjectValues: project = {
    id: crypto.randomUUID(),
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    technologies: "",
    repositoryURL: "",
    status: "",
    isPublic: true
  };

  export default function CreateProject({ onAdd }: CreateProjectProps) {
    const { formVals, handleChange, handleSubmit } = useForm({
        initialValues: initialProjectValues,
        onSubmit: async (data) => { 
          onAdd(data);
          alert("Prosjekt lagt til");
        },
      });

    

    return (
        <aside>
            <h3>Legg til et nytt prosjekt</h3>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Navn:</label>
                <input type="text" id="name" name="name" value={formVals.name} onChange={handleChange("name")} required/>
                
                <label htmlFor="description">Beskrivelse:</label>
                <input type="text" id="description" name="description" value={formVals.description} onChange={handleChange("description")}/>
                
                <label htmlFor="startDate">StartDato: yyyy-mm-dd</label>
                <input type="text" id="startDate" name="startDate" value={formVals.startDate} onChange={handleChange("startDate")} required/>
                
                <label htmlFor="endDate">SluttDato: yyyy-mm-dd</label>
                <input type="text" id="endDate" name="endDate" value={formVals.endDate} onChange={handleChange("endDate")}/>
                
                <label htmlFor="technologies">Teknologier:</label>
                <input type="text" id="technologies" name="technologies" value={formVals.technologies} onChange={handleChange("technologies")} required/>
                
                <label htmlFor="repositoryURL">Repo URL:</label>
                <input type="text" id="repositoryURL" name="repositoryURL" value={formVals.repositoryURL} onChange={handleChange("repositoryURL")} required/>
                
                <label htmlFor="status">Status:</label>
                <input type="text" id="status" name="status" value={formVals.status} onChange={handleChange("status")} required/>

                
                <button type="submit">Legg til</button>
            </form>
        </aside>
    );
}