import { Column, Entity, JoinColumn, ManyToOne, OneToMany, } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CategoryEntity } from '../../category/entities/category.entity';
import { purchaseProductEntity } from '../../custom/entitis/purchases-products.entity';


@Entity({ name:"product" })
export class ProducteEntity extends BaseEntity {
    @Column()
    productName!: string;

    @Column()
    Description!: string;

    @Column()
    price!: number;

    @ManyToOne(()=> CategoryEntity, (category)=> category.products)
    @JoinColumn({name: 'Category_id'})
    category!: CategoryEntity
    
    @OneToMany(()=> purchaseProductEntity, (purchaseProduct)=> purchaseProduct.product  )purchaseProduct!:purchaseProductEntity[];
   
   
}