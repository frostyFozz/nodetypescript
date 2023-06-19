import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity'
import { CustomerEntity } from '../../costumers/entities/customers.entity';

@Entity({name:"user"})
export class UserEntity extends BaseEntity {
    

    @Column()
    name!: string;

    @Column()
    lastname!: string;

    @Column()
    username!: string;

    @Column()
    email!: string;

    @Column()
    Password!: string;

    @Column()
    city!: string;

    @Column()
    Province!: number;

    @OneToOne(()=> CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity

}