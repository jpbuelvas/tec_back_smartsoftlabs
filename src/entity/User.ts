import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from "typeorm";
import { Purchase } from './Purchase';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  password: string;
  
  @Column()
  username: string;

  @Column()
  money: number;
  
  @OneToMany(() => Purchase, (purchases) => purchases.purchaser)
  purchases: Purchase[];

}
