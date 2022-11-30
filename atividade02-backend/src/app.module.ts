/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoController } from './video/controllers/video/video.controller';

import { Video } from './typeorm/entities/video';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './typeorm/entities/category';

import { VideoModule } from './video/video.module';
import { VideoService } from './video/services/video/video.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senha',
      database: 'atividade',
      entities: [
        Video, Category // entidades/classes
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Video]),
    VideoModule,
    CategoryModule,
  ],
  controllers: [AppController, VideoController],
  providers: [AppService, VideoService],
})
export class AppModule {}
