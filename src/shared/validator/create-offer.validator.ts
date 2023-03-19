import * as Joi from 'joi';
import {ElectricityOrigin} from "../enum/electricity-origin.enum";
import {MarketType} from "../enum/market-type.enum";

export const CreateOfferSchema = Joi.object({
  marketType: Joi.string().valid(...Object.values(MarketType)),
  name: Joi.string().allow('', null),
}).options({
  abortEarly: false,
});

