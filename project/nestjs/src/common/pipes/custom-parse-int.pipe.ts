import { PipeTransform, Injectable, BadRequestException, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class CustomParseIntPipe implements PipeTransform {

    transform(value: any) {
        const val = parseInt(value, 10);
        if (isNaN(value)) {
            throw new BadRequestException('The parameter must be a valid integer');
        }
        return val;
    }
}