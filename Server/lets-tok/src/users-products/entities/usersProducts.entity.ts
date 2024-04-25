import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usersProducts' })
export class UserProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  userId: number;

  @Column({
    type: 'int',
  })
  productId: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  orderId: number;

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
