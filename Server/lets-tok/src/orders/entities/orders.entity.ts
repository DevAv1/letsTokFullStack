import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  status: string;

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
