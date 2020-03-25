import express from "express";

import { common } from "../../src/server/middleware";
import { AporteModel } from "../../src/server/models";
import { validation } from "../../src/server/utils/validation";

const app = express();

app.use(common);

app.use(
  validation({
    ramo: {
      isLength: {
        options: {
          min: 3,
          max: 100
        }
      },
      isString: true,

      errorMessage: "Ramo es invalido"
    },
    titulo: {
      isLength: {
        options: {
          min: 3,
          max: 100
        }
      },
      isString: true,
      errorMessage: "Titulo es invalido"
    },
    descripcion: {
      isLength: {
        options: {
          min: 0,
          max: 200
        }
      },
      isString: true,

      errorMessage: "descripcion invalida"
    },
    url: {
      isURL: true
    },
    autor: {
      isLength: {
        options: {
          min: 2,
          max: 50
        }
      }
    }
  }),
  async (req, res) => {
    const aporte = await AporteModel.create(req.body);

    res.send(aporte);
    // res.send(await AporteModel.find({}));
  }
);

export default app;
