import { IsString ,IsNumber} from "class-validator";

export class CreatemovieDto{
    
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;

    //하나씩 유효성검사
    @IsString({each:true})
    readonly genres: string[];
}

