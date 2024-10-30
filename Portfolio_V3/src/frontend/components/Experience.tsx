import { PropsWithChildren } from "react"
import { experience } from "./types"

export default function Experience(props: Readonly<PropsWithChildren<experience>>) {
    const {children, id, studentName,degree,studentPoints,experiences,email} = props
    return (
        <li>
            {children}
            <a href="/">{studentName}</a>
            <p>{degree}</p>
            <p>points:{studentPoints}</p>
            <p>{experiences}</p>
            <p>{email}</p>
        </li>
    )
}