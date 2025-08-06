import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int.pipe';
import { FormRequestPipe } from 'src/common/pipes/form-request.pipe';
import { FindAllUserDto } from './dto/find-all-user.dto';
import { FindOneUserDto } from './dto/find-one-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get() // GET /users or /users?role=INTERN
  findAll(
    @Query(new FormRequestPipe(FindAllUserDto)) findAllUserDto: FindAllUserDto,
  ) {
    return this.userService.findAll(findAllUserDto);
  }

  @Get(':id') // GET /users/:id
  findOne(
    @Param(new FormRequestPipe(FindOneUserDto)) findOneUserDto: FindOneUserDto,
  ) {
    return this.userService.findOne(findOneUserDto);
  }

  @Post() // POST /users
  create(
    @Body(new FormRequestPipe(CreateUserDto))
    createUserDto: CreateUserDto,
  ) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id', new FormRequestPipe(FindOneUserDto))
    findOneUserDto: FindOneUserDto,
    @Body(new FormRequestPipe(UpdateUserDto))
    updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(findOneUserDto, updateUserDto);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param(new FormRequestPipe(FindOneUserDto)) findOneUserDto: FindOneUserDto) {
    return this.userService.delete(findOneUserDto);
  }
}
