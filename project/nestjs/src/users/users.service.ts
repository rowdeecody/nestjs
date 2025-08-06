import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllUserDto } from './dto/find-all-user.dto';
import { FindOneUserDto } from './dto/find-one-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'ENGINEER',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Charlie White',
      email: 'charlie.white@example.com',
      role: 'INTERN',
    },
  ];

  findAll(findAllUserDto: FindAllUserDto) {
    const { role } = findAllUserDto;

    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(findOneUserDto: FindOneUserDto) {

    const { id } = findOneUserDto;
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const users_by_highest_id = [...this.users.sort((a, b) => (b.id - a.id))];
    const new_user = {
      id: users_by_highest_id[0].id + 1,
      ...createUserDto,
    };

    this.users.push(new_user);

    return new_user;
  }

  update(
    findOneUserDto: FindOneUserDto,
    updateUserDto: UpdateUserDto
  ) {

    const { id } = findOneUserDto;
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }

      return user;
    });

    return this.findOne(findOneUserDto);
  }

  delete(findOneUserDto: FindOneUserDto) {
    const { id } = findOneUserDto;
    const user = this.findOne(findOneUserDto);
    
    this.users = this.users.filter((user) => user.id !== id);

    return user;
  }
}
