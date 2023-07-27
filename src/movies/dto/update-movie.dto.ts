import { PartialType } from "@nestjs/mapped-types";
import { IsString ,IsNumber} from "class-validator";
import { CreatemovieDto } from "./create-movie.dto";

export class UpdatemovieDto extends PartialType(CreatemovieDto){
    
}