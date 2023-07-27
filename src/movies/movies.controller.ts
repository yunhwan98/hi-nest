import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies"
    }


    @Get('search')
    search(@Query("year") searchingYear:string){
        return `we are searching for a movie with title made after: ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param("id") id:string){
        return `This will return one movie: ${id}`
    }

    @Post()
    creat(@Body() movieData){
        console.log(movieData)
        return movieData

    }

    @Delete("/:id")
    remove(@Param("id") id:string){
        return `This will delete a movie: ${id}`
    }

    @Patch('/:id')
    patch(@Param("id") id:string,@Body() updateData){
        return{
            updatedMovie: id,
            ...updateData
        }

    }


}
