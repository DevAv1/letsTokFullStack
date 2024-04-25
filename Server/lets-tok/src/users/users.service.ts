import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import axios from 'axios';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async initiateStartingUsersData() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const users = response.data;

      for (const user of users) {
        this.usersRepository.create({
          fullName: user.username,
          address: user.address.city,
          paymentMethod: 'CC',
          password: '123123',
          createdAt: new Date(),
        });
      }
      return await this.usersRepository.save(users);
    } catch (error) {
      console.error('Error initializing dummy data:', error.message);
    }
  }
  async createUser(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create({
      ...createUserDto,
      createdAt: new Date(),
    });
    return await this.usersRepository.save(user);
  }

  async getAllUsers() {
    return await this.usersRepository.find({
      where: {
        deletedAt: null,
      },
    });
  }

  async findUser(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });
    return user;
  }

  async editUser(user: CreateUserDto) {
    const userToUpdate = {
      ...user,
      updatedAt: new Date(),
    };
    const response = await this.usersRepository.update(user.id, userToUpdate);
    if (response.affected === 0) {
      throw Error();
    } else {
      return this.usersRepository.findOne({
        where: { id: user.id },
      });
    }
  }

  async deleteUser(id: string) {
    return await this.usersRepository.delete(id);
  }
}
