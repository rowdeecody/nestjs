import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class FormRequestPipe implements PipeTransform {
  constructor(private readonly dtoClass: any) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    const object = plainToInstance(this.dtoClass, value);
    const errors = await validate(object, { stopAtFirstError: true });

    if (errors.length > 0) {
      const formatted_errors = {};

      for (const error of errors) {
        const messages = Object.values(error.constraints || {}).map((msg) => {
          return 'The ' + msg + '.';
        });

        formatted_errors[error.property] = messages;
      }

      throw new BadRequestException({
        message: 'Validation failed.',
        errors: formatted_errors,
      });
    }

    return object;
  }
}
