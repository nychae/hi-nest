import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
// AppModule -> 모든것의 Root Module
// Controller -> url을 가져오고 함수를 실행, express의 router같은 존재
// Service -> 비즈니스 로직 수행

export class AppModule {}
