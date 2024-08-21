import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from '../../client/entities/client.entity';
import { Payment } from '../../payment/entities/payment.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, client => client.orders)
  @JoinColumn({ name: 'clientId' })
  client: Client;

  @Column()
  clientId: number;

  @Column()
  bookingBy: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amountService: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @ManyToOne(() => Payment)
  @JoinColumn({ name: 'paymentMethodId' })
  paymentMethod: Payment;

  @Column()
  paymentMethodId: number;
}