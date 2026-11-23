import { IsEmail,IsNotEmpty,IsOptional,IsString } from "class-validator";

export class CreateAlunoDto{
@IsString()
@IsNotEmpty({message:'o nome é obrigatório'})
nome: string;

@IsEmail({},{message: 'informe um e-mail válido '})
email: string;

@IsString()
@IsNotEmpty({message: 'A matrícula é obrigatória'})
matricula: string;

@IsString()
@IsOptional()
dataNascimento?:string;
}