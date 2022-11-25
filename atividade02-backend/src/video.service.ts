import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Video } from "./video.entity";


@Injectable()
export class VideoService {

    constructor(
        @InjectRepository(Video)
        private readonly produtoRepository: Repository<Video>,
    ) { }

    public findAll(): Promise<Video[]> {
        return this.produtoRepository.find();
    }

    public findById(id: number): Promise<Video> {
        return this.produtoRepository.findOneBy({ id });
    }

    public salvar(video: Video): Promise<Video> {
        return this.produtoRepository.save(video);
    }

    public async excluir(id: number): Promise<void> {
        await this.produtoRepository.delete(id);
    }
}