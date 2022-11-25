import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category.entity";


@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private readonly produtoRepository: Repository<Category>,
    ) { }

    public findAll(): Promise<Category[]> {
        return this.produtoRepository.find();
    }

    public findById(id: number): Promise<Category> {
        return this.produtoRepository.findOneBy({ id });
    }

    public salvar(Categoria: Category): Promise<Category> {
        return this.produtoRepository.save(Categoria);
    }

    public async excluir(id: number): Promise<void> {
        await this.produtoRepository.delete(id);
    }
}