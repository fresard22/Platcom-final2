import express from "express";

import { common } from "../../src/server/middleware";
import { AporteModel } from "../../src/server/models";

const app = express();

app.use(common);

app.use(async (req, res) => {
  console.log(req.body);
  res.send(await AporteModel.find({}));
});

export default app;
