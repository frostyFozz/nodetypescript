import { BaseDTO } from "../../config/base.dto";
import { IsNotEmpty } from "class-validator"

export class UserDTO extends BaseDTO {

    @IsNotEmpty()
    name!: string;

   @IsNotEmpty()
    lastname!: string;

    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    Password!: string;

    @IsNotEmpty()
    city!: string;

    @IsNotEmpty()
    Province!: string;
}