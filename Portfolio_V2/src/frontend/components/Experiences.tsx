import Experience from "./Experience"
import {experience} from "./types"
type ExperienceProps = {
    experiences:experience[];
}
export default function Experiences(props: Readonly<ExperienceProps>) {
    const {experiences=[]} = props
    return (
        <ul>
            {experiences.map((experience) => (
                <Experience
                    id={experience.id}
                    studentName={experience.studentName}
                    degree={experience.degree}
                    studentPoints={experience.studentPoints}
                    experiences={experience.experiences}
                    email={experience.email}>
                    </Experience>
                    ))}
        </ul>
    )
}