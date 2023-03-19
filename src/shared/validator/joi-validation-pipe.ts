import { ObjectSchema } from 'joi';

import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema, private requestType: 'body' | 'query' = 'body') {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === this.requestType) {
      const { error } = this.schema.validate(value);
      if (error) {
        throw new BadRequestException({
          errorMessage: 'Invalid body',
          errorCode: 10,
          functionName: 'type ' + metadata?.metatype?.name,
          message: error.message,
        });
      }
    }
    return value;
  }
}
