import Project from "./Project"
import {project} from "./types"
type ProjectProps = {
    projects:project[];
}
export default function Projects(props: Readonly<ProjectProps>) {
    const {projects=[]} = props
    return (
        <ul>
            {projects.length === 0 ? (
                <h3>Det finnes ingen prosjekter.</h3>
            ) : (
            projects.map((project) => (
                <Project
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    startDate={project.startDate}
                    endDate={project.endDate}
                    technologies={project.technologies}
                    repositoryURL={project.repositoryURL}
                    status={project.status}> 
                    </Project>
            )))}
            <h4>Totalt antall prosjekter:{projects.length}</h4>
        </ul>
    )
}