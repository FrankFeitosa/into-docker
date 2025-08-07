-- CreateEnum
CREATE TYPE "public"."descriptionType" AS ENUM ('TECNOLOGIA', 'FINANCAS', 'HERMENEUTICA', 'GRAMATICA', 'LIBRAS', 'PEDAGOGIA', 'TEOLOGIA', 'FILOSOFIA', 'MATEMATICA');

-- CreateEnum
CREATE TYPE "public"."levelType" AS ENUM ('BASICO', 'INTERMEDIARIO', 'AVANCADO');

-- CreateTable
CREATE TABLE "public"."Curso" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" "public"."descriptionType" NOT NULL,
    "level" "public"."levelType" NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Aula" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "teacher" TEXT NOT NULL,
    "school" TEXT,
    "subject" TEXT NOT NULL,
    "cursoId" INTEGER NOT NULL,

    CONSTRAINT "Aula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Aula" ADD CONSTRAINT "Aula_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "public"."Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
