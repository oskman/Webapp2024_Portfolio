import express from "express";
import cors from "cors";
import router from "./routes/projectsRoutes"; 


const app = express();
const port = 3999;


app.use(cors());
app.use(express.json()); 


app.use("/static", express.static( "../" ));


app.use("/api", router); 


app.listen(port, () => {
  console.log(`Server kjører på: http://localhost:${port}`);
});