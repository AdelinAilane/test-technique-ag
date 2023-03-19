import * as Joi from 'joi';
import {ElectricityOrigin} from "../enum/electricity-origin.enum";

export const CreateParkSchema = Joi.object({
  electricityOrigin: Joi.string().valid(...Object.values(ElectricityOrigin)),
  name: Joi.string().allow('', null),
}).options({
  abortEarly: false,
});

