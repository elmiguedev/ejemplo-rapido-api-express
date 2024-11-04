import express from "express";
import CosaController from "./controllers/CosaController";
import PingController from "./controllers/PingController";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/ping", PingController);
app.use("/cosa", CosaController);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});