import { Entity, Column, PrimaryGeneratedColumn, OneToOne,JoinColumn } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  purchaseDate: Date;

  @OneToOne(() => User, (purchaser) => purchaser.id)
  @JoinColumn()
  purchaser: User;

  @Column()
  total: number;
}
