import { IsString, IsOptional } from 'class-validator';

export class EventPayloadDto {
  @IsString()
  type: string;

  @IsOptional()
  data?: any;
}
