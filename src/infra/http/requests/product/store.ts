import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class StoreProduct {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Name of product",
        example: "Product 1",
    })
    name: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description: "Price of product",
        example: 10.99,
    })
    price: number

    @ApiProperty({
        description: "Description of product",
        example: "Description test"
    })
    description?: string | null
}