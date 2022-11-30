/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddVideoParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { Video } from '../../../typeorm/entities/Video';

@Injectable()
export class VideoService {
  constructor(@InjectRepository(Video) private videoRepository: Repository<Video>) {}

  findVideo() {}

  addVideo(videoDetails: AddVideoParams) {
    const newVideo = this.videoRepository.create({...videoDetails})
    return this.videoRepository.save(newVideo)
  }
}