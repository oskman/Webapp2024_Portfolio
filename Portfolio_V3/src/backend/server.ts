import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import {project} from "../frontend/components/types"
import projects from "./projects.json"

const app = new Hono();

app.use("/*", cors());

app.use("/static/*", serveStatic({ root: "../" }));

const projectArray: Omit<project,"id">[] = projects.projects;

app.get("/projects", async (c) => {
  const projectArrayWithUuid: project[] = projectArray.map((proj) => ({
    ...proj,
    id: crypto.randomUUID(),
  }))
  return c.json(projectArrayWithUuid);
});

const port = 3999;

console.log(`Server kjører på: ${port}`);

serve({
  fetch: app.fetch,
  port,
});