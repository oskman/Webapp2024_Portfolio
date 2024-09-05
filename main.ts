
const projectList = document.getElementById("projectListAside") as HTMLUListElement;

type project = {
  id : number;
  name : string
  description : string
  startDate : string
  endDate : string
  technologies : string[]
  repositoryURL : string
  status : string
}
const projects = new Array<project>;

function updateProjList() {
  projectList.innerHTML = "";

  projects.forEach((project: any) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="/">${project.name}</a>
      <p>${project.description}</P>
      <p>${project.startDate}</P>
      <p>${project.endDate}</P>
      <p>${project.technologies.join(", ")}</P>
      <a href="${project.repositoryURL}">gå til repo</a>
      <p>${project.status}</P>
      `;
    projectList?.appendChild(li);
})

}

const fetchProjects = async () => {
  try {
    const respons = await fetch("http://localhost:3999/get_temp");
    const data = await respons.json();
    projects.push(...data);
    updateProjList();
  } catch (error) {
    console.error("Klarte ikke å hente liste fra server.")
  }
};

const fetchProjectsJSON = async () => {
  try {
    const respons = await fetch("http://localhost:3999/json");
    const data = await respons.json();
    projects.push(...data);
    updateProjList();
  } catch (error) {
    console.error("Klarte ikke hente json fil fra server.")
  }
};

const form = document.getElementById("projectForm") as HTMLFormElement;

form.addEventListener("submit",async(event) => {
  event.preventDefault();
  
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const description = (document.getElementById("description") as HTMLTextAreaElement).value;
  const startDate = (document.getElementById("startDate") as HTMLInputElement).value;
  const endDate = (document.getElementById("endDate") as HTMLInputElement).value;
  const technologies = (document.getElementById("technologies") as HTMLInputElement).value.split(',');
  const repositoryURL = (document.getElementById("repositoryURL") as HTMLInputElement).value;
  const status = (document.getElementById("status") as HTMLInputElement).value;

  const genNewProject = {
    name,description,startDate,endDate,technologies,repositoryURL,status,
  };
  

  const response = await fetch("http://localhost:3999/add", {
    method: "POST",
    headers: {"Content-Type": "application/json",
    },
    body: JSON.stringify(genNewProject),

  } );

  if (response.status === 201) {
    alert("Prosjekt er lagt til.")
    fetchProjects();
    form.reset();
  }
  else {
    console.log("klarte ikke legge til")
    alert("Klarte ikke å legge til prosjekt.")
  }

});

fetchProjectsJSON();



