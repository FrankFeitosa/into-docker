import { ApiProperty } from '@nestjs/swagger';
import { descriptionType, levelType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateCursoDto {
    @ApiProperty({ example: 'BackEnd' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'TECNOLOGIA' })
    @IsEnum(() => descriptionType)
    @IsNotEmpty()
    description: descriptionType

    @ApiProperty({ example: 'BÁSICO', description: 'Modalidade do Curso' })
    @IsEnum(() => levelType)
    @IsNotEmpty()
    level: levelType
}

