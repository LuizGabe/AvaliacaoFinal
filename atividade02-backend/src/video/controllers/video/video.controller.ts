/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AddVideoDto } from '../../dtos/AddVideo.dto';
import { VideoService } from '../../services/video/video.service';

@Controller('video')
export class VideoController {

  constructor(private videoService: VideoService) {}

  @Get()
  getVideos() {}

  @Post()
  addVideo(@Body() addVideoDto) {
    return this.videoService.addVideo(addVideoDto);
  }
}
