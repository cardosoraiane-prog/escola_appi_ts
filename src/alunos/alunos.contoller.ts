import{Controller, Get,Post,Delete,Body,Param,HttpCode,HttpStatus}from '@nestjs/common';
import { AlunoService } from './aluno.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';

@Controller('alunos')
export class AlunosController{
    constructor(private readonly  alunosService:AlunoService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()createAlunoDto:CreateAlunoDto){
        return this.alunosService.create(createAlunoDto);
    }
    @Get()
    findAll(){
        return this.alunosService.create(createAlunoDto);
    }
}