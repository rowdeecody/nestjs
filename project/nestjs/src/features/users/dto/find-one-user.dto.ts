import { IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindOneUserDto {
  @Transform(({ value }) => Number(value))
  @IsInt({ message: 'id must be an integer' })
  @Min(1, { message: 'id must be a positive number' })
  id: number;
}
