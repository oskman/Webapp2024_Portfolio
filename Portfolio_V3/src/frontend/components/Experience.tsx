import { PropsWithChildren } from "react"
import { experience } from "./types"

export default function Experience(props: Readonly<PropsWithChildren<experience>>) {
    const {children, id, studentName,degree,studentPoints,experiences,email} = props
    return (
        <li className="card">
            {children}
            <a className="title" href="/">{studentName}</a>
            <p>{degree}</p>
            <p>points:{studentPoints}</p>
            <p className="content">{experiences}</p>
            <p>{email}</p>
        </li>
    )
}