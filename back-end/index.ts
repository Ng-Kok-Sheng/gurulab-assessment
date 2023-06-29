import express from "express";
import bodyParser from "body-parser";
import config from "./src/configs";
import router from "./src/routes";
import cors from "cors";

const { port } = config;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
