import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import projects from "../static/projects.json"



const app = new Hono();


app.use("/*", cors());


app.use("/static/*", serveStatic({ root: "../" }));


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
const tempProjects = new Array<project>;


app.get("/json", async (c) => {
  return c.json(projects.projects);
});


app.post("/add", async (c) => {
  const addProject = await c.req.json();
  
  tempProjects.push({ id: tempProjects.length+1, ...addProject });


  return c.json(tempProjects, { status: 201 });
});


app.get("/get_temp", (c) => {
  return c.json(tempProjects);
});

const port = 3999;

console.log(`Server kjører på: ${port}`);


serve({
  fetch: app.fetch,
  port,
});