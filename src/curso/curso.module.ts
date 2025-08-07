import { Module } from '@nestjs/common';
import { CursoController } from './curso.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CursoService } from './curso.service';

@Module({
  imports: [PrismaModule],
  controllers: [CursoController],
  providers: [CursoService]
})
export class CursoModule {}
