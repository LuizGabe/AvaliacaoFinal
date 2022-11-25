import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoController } from './video.controller';
import { CategoryController } from './category.controller';

import { Category } from './category.entity';
import { Video } from './video.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoService } from './video.service';
import { CategoryService } from './category.service';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'senha',
    database: 'tarefa',
    entities: [
      Video,
      Category // entidades/classes
    ],
    synchronize: true
  }),
  TypeOrmModule.forFeature([Video, Category])

],
  controllers: [AppController,VideoController, CategoryController],
  providers: [AppService, VideoService. CategoryService],
})
export class AppModule {}
