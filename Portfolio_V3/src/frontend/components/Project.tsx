import { PropsWithChildren } from "react"
import { project } from "./types"
import { format } from "date-fns";


export default function Project(props: Readonly<PropsWithChildren<project>>) {
    const {children, id, name,description,startDate,endDate,technologies,repositoryURL,status,isPublic} = props
    const formattedStartDate = format(new Date(props.startDate), "dd.MM.yyyy");
    const formattedEndDate = props.endDate ? format(new Date(props.endDate), "dd.MM.yyyy") : "";
    return (
        <li className="card">
            
            <a className="title" href="/">{name}</a>
            <p className="content">{description}</p>
            <p>{formattedStartDate}</p>
            <p>{formattedEndDate}</p>
            <p>{technologies}</p>
            <a href={repositoryURL}>gå til repo</a>
            <p>{status}</p>
            {children}
        </li>
    )
}