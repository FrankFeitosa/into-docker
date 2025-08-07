import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Curso, descriptionType, levelType, Prisma } from '@prisma/client'
import { CreateCursoDto } from "./dto/create-curso.dto";

@Injectable()
export class CursoService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCursoDto): Promise<Curso> {
        return this.prisma.curso.create({data: {
            name: data.name,
            description: data.description,
            level: data.level
        }})
    }

    async findAll() {
        return this.prisma.curso.findMany()
    }

    async findId(id: number) {
        return this.prisma.curso.findUnique({ where: { id } })
    }

    async update(id: number,
        data: {
            name: string,
            description: descriptionType,
            level: levelType
        }
    ) {
        return this.prisma.curso.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description,
                level: data.level
            }
        })
    }
    async delete(id: number) {
        return this.prisma.curso.delete({ where: { id } })
    }
}
