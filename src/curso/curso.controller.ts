    import { Body, Controller, Get, Param, Post } from '@nestjs/common';
    import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
    import { CursoService } from './curso.service';
    import { CreateCursoDto } from './dto/create-curso.dto';

    @ApiTags('Curso')
    @Controller('curso')
    export class CursoController {
        constructor(
            private cursoService: CursoService
        ) { }
        @Get('all')
        @ApiOperation({ summary: 'Listar todos os cursos' })
        @ApiResponse({ status: 200, description: 'Lista de todos os cursos cadastrados' })
        @ApiResponse({ status: 400, description: 'Curso não encontrado' })
        @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
        async getAllCurso() {
            return this.cursoService.findAll();
        }

        @Get(':id')
        @ApiOperation({ summary: 'Lista curso por ID' })
        @ApiParam({ name: 'id', description: 'Identificador do curso, por exemplo: Backend, Frontend' })
        @ApiResponse({ status: 200, description: 'MOstra o curso do ID informado' })
        @ApiResponse({ status: 400, description: 'ID não encontrado' })
        @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
        async findCursoByID(@Param('id') id: number) {
            return this.cursoService.findId(id)
        }

        @Post('create')
        @ApiOperation({ summary: 'Criar um novo Curso' })
        @ApiResponse({ status: 201, description: 'Curso adicionado com sucesso' })
        @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
        @ApiConsumes('multipart/form-data')
        @ApiBody({ type: CreateCursoDto })
        async createCurso(@Body() createCursoDto: CreateCursoDto){
            return this.cursoService.create(createCursoDto)
        }
    }
