import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminUser } from './entities/adminUsers.entity';
import { Repository } from 'typeorm';
import { AdminUserDto } from './dto/adminUser.dto';

@Injectable()
export class AdminUsersService {
  constructor(
    @InjectRepository(AdminUser)
    private readonly adminUserRepository: Repository<AdminUser>,
  ) {}

  async getAuthLogin(adminUserDto: AdminUserDto) {
    const user = await this.adminUserRepository.findOne({
      where: {
        username: adminUserDto.username,
        password: adminUserDto.password,
      },
    });
    if (user) {
      return user;
    } else {
      return false;
    }
  }

  async createAdminUser(adminUserDto: AdminUserDto) {
    const adminUser = this.adminUserRepository.create({
      ...adminUserDto,
      createdAt: new Date(),
    });
    return await this.adminUserRepository.save(adminUser);
  }

  async getAllAdminUsers() {
    return await this.adminUserRepository.find();
  }
}
