export class CreateUserProductsDto {
  id: number;
  userId: number;
  productId: number;
  orderId: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
