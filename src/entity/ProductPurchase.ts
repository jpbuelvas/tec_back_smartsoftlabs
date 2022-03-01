import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Product } from "./Product";
import { Purchase } from "./Purchase";

@Entity()
export class ProductPurchase {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToOne(() => Product, (product) => product.id)
  @JoinColumn()
  idProduct: Product;

  @OneToOne(() => Purchase, (purchase) => purchase.id)
  @JoinColumn()
  idPurchase: Purchase;

  @Column()
  quantity: number;

  @Column()
  unitPrice: number;
}
