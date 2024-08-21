import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ default: 0 })
  totalOrder: number;

  @Column()
  joinDate: Date;

  @Column({ nullable: true })
  lastOrder: Date;

  @OneToMany(() => Order, order => order.client)
  orders: Order[];
}