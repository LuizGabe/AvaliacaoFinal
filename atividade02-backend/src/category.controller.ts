/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Put, Param, Delete } from "@nestjs/common";
import { CategoryService } from './category.service'
import { Category } from "./category.entity";

@Controller()
export class CategoryController {
    
    constructor (
        private CategoryService: CategoryService
    ) {}

    @Get('/categoria') 
    async listavideo():Promise<Category[]> {
        return await this.CategoryService.findAll();
    }

    @Get('/category/:id')
    async buscarPorCodigo(@Param() parametro) {
        return await this.CategoryService.findById(parametro.id);
    }

    @Delete("/category/:id")
    async excluircategory(@Param() parametro) {
        await this.CategoryService.excluir(parametro.id);
        return "Deletado!"
    }

    @Put("/category")
    async salvarcategory(@Body() category) {
        await this.CategoryService.salvar(category);
        return "Ok!"
    }
    @Get('/category/remover/todos')
    async removerTodos() {
      
      return 'Lista Removida com Sucesso!'
    }
}