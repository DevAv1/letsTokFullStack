import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminUserDto } from './dto/adminUser.dto';
import { AdminUsersService } from './admin-users.service';

@Controller('admin-users')
export class AdminUsersController {
  constructor(private readonly adminUserService: AdminUsersService) {}

  @Post('/auth-user')
  getAuth(@Body() adminUserDto: AdminUserDto) {
    return this.adminUserService.getAuthLogin(adminUserDto);
  }

  @Post('/create-user')
  createAdminUser(@Body() adminUserDto: AdminUserDto) {
    return this.adminUserService.createAdminUser(adminUserDto);
  }

  @Get()
  getTest() {
    return this.adminUserService.getAllAdminUsers();
  }
}
