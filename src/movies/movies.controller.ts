import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreatemovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {


    //생성자 가져오기
    constructor(private readonly moviesService: MoviesService){}


    @Get()
    getAll() : Movie[]{
        return this.moviesService.getAll()
    }


    @Get('search')
    search(@Query("year") searchingYear:string){
        return `we are searching for a movie with title made after: ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param("id") id:number):Movie{
        return this.moviesService.getOne(id);
    }

    @Post()
    creat(@Body() movieData:CreatemovieDto){
        console.log(movieData)
        return this.moviesService.create(movieData)

    }

    @Delete("/:id")
    remove(@Param("id") id:number){
       return this.moviesService.deleteOne(id)
    }

    @Patch('/:id')
    patch(@Param("id") id:number,@Body() updateData){
        return this.moviesService.update(id,updateData)

    }


}
