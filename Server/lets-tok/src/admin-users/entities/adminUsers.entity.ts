import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'adminUsers' })
export class AdminUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  username: string;

  @Column({
    type: 'text',
  })
  password: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  email: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  updatedAt: Date;

  @Column({
    type: 'date',
    nullable: true,
  })
  createdAt: Date;

  @Column({
    type: 'date',
    nullable: true,
  })
  deletedAt: Date;
}
