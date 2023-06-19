import { Column, Entity, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../config/base.entity';
import { CustomerEntity } from '../costumers/entities/customers.entity';
import { purchaseProductEntity } from '../custom/entitis/purchases-products.entity';

@Entity({ name:"purchase" })
export class PurchaseEntity extends BaseEntity {
    @Column()
    status!: string;

    @Column()
    paymentMethod!: string;

    @ManyToOne(()=> CustomerEntity, (customer)=> customer.purchases)
    @JoinColumn({name: 'customer_id'})
    costumer!: CustomerEntity;
    
 
    @OneToMany(
        ()=> purchaseProductEntity, 
        (purchaseProduct) => purchaseProduct.purchase)
        purchaseProduct!:purchaseProductEntity[];
   
   
   
}