/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Put, Param, Delete } from "@nestjs/common";
import { Video } from './video.entity'
import { VideoService } from './video.service'

@Controller()
export class VideoController {
    
    constructor (
        private VideoService: VideoService
    ) {}

    @Get('/video') 
    async listavideo():Promise<Video[]> {
        return await this.VideoService.findAll();
    }

    @Get('/video/:id')
    async buscarPorCodigo(@Param() parametro) {
        return await this.VideoService.findById(parametro.id);
    }

    @Delete("/video/:id")
    async excluirvideo(@Param() parametro) {
        await this.VideoService.excluir(parametro.id);
        return "Deletado!"
    }

    @Put("/video")
    async salvarvideo(@Body() video) {
        await this.VideoService.salvar(video);
        return "Ok!"
    }
    @Get('/video/remover/todos')
    async removerTodos() {
      
      return 'Lista Removida com Sucesso!'
    }
}