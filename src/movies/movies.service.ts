import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreatemovieDto } from './dto/create-movie.dto';
import { UpdatemovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    //DB 파트

    private movies :Movie[] = [];

    getAll(): Movie[]{
        return this.movies
    }


    getOne(id:number):Movie{

        const movie = this.movies.find(movie=>movie.id=== +id);
        //예외 처리
        if(!movie){
            throw new NotFoundException(`Movie with Id ${id} not found`)
        }
        
        return movie;
    }

    deleteOne(id:number){
         this.getOne(id)
         this.movies = this.movies.filter(movie=>movie.id!==id)
    }

    create(movieData:CreatemovieDto){
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        })
    }


    update(id:number, updateData:UpdatemovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie,...updateData})

    }
}
