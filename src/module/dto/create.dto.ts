import { Transform } from "class-transformer";
import { IsString } from "class-validator";
import { IsNotEmpty, IsNumber, IsOptional, Length } from 'class-validator';

export class CreateDto {
    @Length(3)
    @Transform(({ value }) => value?.trim())
    @IsString()
    @IsNotEmpty()
    readonly userName:string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    readonly userAge:number;
}