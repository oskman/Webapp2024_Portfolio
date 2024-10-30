export type Id = ReturnType<typeof crypto.randomUUID>;

export type project = {
    id : Id;
    name : string
    description : string
    startDate : string
    endDate : string
    technologies : string[]
    repositoryURL : string
    status : string
}

export type experience = {
    id : Id
    studentName : string
    degree : string
    studentPoints : number
    experiences : string[]
    email : string
}

export type ContactForm = {
    id : Id
    senderName : string
    message : string
}