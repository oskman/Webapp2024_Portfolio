import { PropsWithChildren } from "react"
import { project } from "./types"

export default function Project(props: Readonly<PropsWithChildren<project>>) {
    const {children, id, name,description,startDate,endDate,technologies,repositoryURL,status} = props
    return (
        <li>
            {children}
            <a href="/">{name}</a>
            <p>{description}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p>{technologies}</p>
            <a href={repositoryURL}>gå til repo</a>
            <p>{status}</p>
        </li>
    )
}