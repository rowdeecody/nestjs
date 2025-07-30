import { Injectable } from '@nestjs/common';

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

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const users_by_highest_id = [...this.users.sort((a, b) => (b.id - a.id))];
    const new_user = {
      id: users_by_highest_id[0].id + 1,
      ...user,
    };

    this.users.push(new_user);

    return new_user;
  }

  update(
    id: number,
    updated_user: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updated_user,
        };
      }

      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const user = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return user;
  }
}
