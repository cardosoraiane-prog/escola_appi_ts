import{Injectable,NotFoundException,ConflictException } from '@nestjs/common';
import{randomUUID} from 'crypto';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import{ ALUNO }from './entities/alunos.entity.js';
@Injectable()
export class AlunoService {
    private alunos:ALUNO[]=[];
    //create
 create(createAlunoDto:CreateAlunoDto): ALUNO{
    const matrículaExistente = this.alunos.find(
        (a)=>a.matricula === createAlunoDto.matricula
        );
        if(matrículaExistente){
            throw new ConflictException('Já existe um aluno com esta matricula');   
        }
        const novoAluno: ALUNO ={
            id: randomUUID(),
            ...createAlunoDto,
            criadoEm: new Date(),
        }
        this.alunos.push(novoAluno);
        return novoAluno;
    }
    //READ (todos)
    findAll(): ALUNO[]{
        return  this.alunos;
    }
    //DELETE
    remove(id:string): {message:string}{
        const index = this.alunos.findIndex((a)=>a.id === id);
        if(index === -1){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado.`)
        }
        this.alunos.splice(index, 1);
        return{ message:`Aluno com ID ${id} removido com sucesso.`}
    }
        
}
