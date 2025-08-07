import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CursoService } from './curso/curso.service';
import { CursoModule } from './curso/curso.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, CursoModule, PrismaModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, CursoService],
})
export class AppModule {}
