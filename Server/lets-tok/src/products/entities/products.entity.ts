import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  name: string;

  @Column({
    type: 'text',
  })
  brand: string;

  @Column({
    type: 'text',
  })
  price: string;

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
