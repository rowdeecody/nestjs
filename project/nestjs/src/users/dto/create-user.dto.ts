import { IsDefined, IsNotEmpty, IsString, IsEmail, IsEnum } from 'class-validator';
import { RoleEnum, ROLES } from 'src/common/enums/role.enum';

export class CreateUserDto {
    @IsDefined({ message: 'name field is required' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDefined({ message: 'email field is required' })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsDefined({ message: 'role field is required' })
    @IsString()
    @IsNotEmpty()
    @IsEnum(RoleEnum, {
        message: `Role must be one of the following: ${ROLES.join(', ')}`
    })
    role: RoleEnum
}