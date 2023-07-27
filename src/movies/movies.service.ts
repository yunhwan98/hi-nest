import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    //DB 파트

    private movies :Movie[] = [];

    getAll(): Movie[]{
        return this.movies
    }


    getOne(id:string):Movie{

        const movie = this.movies.find(movie=>movie.id=== +id);
        //예외 처리
        if(!movie){
            throw new NotFoundException(`Movie with Id ${id} not found`)
        }
        
        return movie;
    }

    deleteOne(id:string){
         this.getOne(id)
         this.movies = this.movies.filter(movie=>movie.id!==+id)
    }

    create(movieData){
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        })
    }


    update(id:string, updateData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie,...updateData})

    }
}
