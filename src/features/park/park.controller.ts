import {ParkService} from "./park.service";
import {Body, Controller, Post, UsePipes} from "@nestjs/common";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {JoiValidationPipe} from "../../shared/validator/joi-validation-pipe";
import {CreateParkSchema} from "../../shared/validator/create-park.validator";
import {ParkCreationPayload} from "./park.payload";

@Controller('park')
@ApiTags('park')
export class ParkController {
    constructor(private readonly parkService: ParkService) {
    }

    /**
     * electricity generating parks
     */
    @Post()
    @ApiOperation({ summary: 'Create new electricity generating park' })
    @UsePipes(new JoiValidationPipe(CreateParkSchema))
    addElecGeneratingPark(@Body() payloadCreate: ParkCreationPayload) {
        return this.parkService.createPark(payloadCreate);
    }

}
