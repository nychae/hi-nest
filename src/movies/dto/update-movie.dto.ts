import { IsNumber, IsString } from 'class-validator';
import {fromEventPattern} from 'rxjs';
import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}