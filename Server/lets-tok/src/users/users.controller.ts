import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getSingleUser(@Param('id') id: string) {
    return this.usersService.findUser(+id);
  }

  @Post()
  createNewUser(@Body() createNewUser: CreateUserDto) {
    return this.usersService.createUser(createNewUser);
  }

  @Put()
  editUser(@Body() createNewUser: CreateUserDto) {
    return this.usersService.editUser(createNewUser);
  }

  @Delete(':id')
  deleteUser(@Param() id: string) {
    return this.usersService.deleteUser(id);
  }
}
