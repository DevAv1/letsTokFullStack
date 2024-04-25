import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  fullName: string;

  @Column({
    type: 'text',
  })
  address: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  paymentMethod: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  password: string;

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
