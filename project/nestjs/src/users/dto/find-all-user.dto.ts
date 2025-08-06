import { Transform } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';
import { RoleEnum, ROLES } from 'src/common/enums/role.enum';

export class FindAllUserDto {
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsOptional()
  @IsEnum(RoleEnum, {
    message: `Role must be one of the following: ${ROLES.join(', ')}`
  })
  role?: RoleEnum
}
