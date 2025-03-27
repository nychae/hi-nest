import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
// AppModule -> 모든것의 Root Module
// Controller -> url을 가져오고 함수를 실행, express의 router같은 존재
// Service -> 비즈니스 로직 수행

export class AppModule {}
