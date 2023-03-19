import {Controller, Get, Post, UsePipes} from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation} from "@nestjs/swagger";
import {CreateParkSchema} from "./shared/validator/create-park.validator";
import {JoiValidationPipe} from "./shared/validator/joi-validation-pipe";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
