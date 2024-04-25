import { Module } from '@nestjs/common';
import { AdminUsersController } from './admin-users.controller';
import { AdminUsersService } from './admin-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUser } from './entities/adminUsers.entity';

@Module({
  controllers: [AdminUsersController],
  providers: [AdminUsersService],
  imports: [TypeOrmModule.forFeature([AdminUser])],
})
export class AdminUsersModule {}
