import { Column, Entity, OneToMany} from 'typeorm';
import { BaseEntity } from '../../config/base.entity'
import { ProducteEntity } from '../../product/entities/product.entity';

@Entity({name:"category"})
export class CategoryEntity extends BaseEntity{
    

    @Column()
    categoryName!: string;

    @OneToMany(()=> ProducteEntity, (product )=>product.category)
    products!: ProducteEntity[];

}