import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './features/users/users.module';
import { MoviesModule } from './features/movies/movies.module';

@Module({
  // imports: [UsersModule, MoviesModule],
  imports: [

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
