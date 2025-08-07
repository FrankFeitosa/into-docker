import { ApiProperty } from '@nestjs/swagger';
import { descriptionType, levelType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum CursoType {
    TECNOLOGIA = 'TECNOLOGIA',
    FINANCAS = 'FINANÇAS',
    HERMENEUTICA = 'HERMENEÚTICA',
    GRAMATICA = 'GRAMÁTICA',
    LIBRAS = 'LIBRAS',
    PEDAGOGIA = 'PEDAGOGIA',
    TEOLOGIA = 'TEOLOGIA',
    FILOSOFIA = 'FILOSOFIA',
    MATEMATICA = 'MATEMÁTICA'
}

export class CreateCursoDto {
    @ApiProperty({ example: 'BackEnd' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'TECNOLOGIA' })
    @IsEnum(CursoType)
    @IsNotEmpty()
    description: CursoType

    @ApiProperty({ example: 'BÁSICO', description: 'Modalidade do Curso' })
    @IsEnum(() => levelType)
    @IsNotEmpty()
    level: levelType
}

