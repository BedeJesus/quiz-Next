/*
  Warnings:

  - You are about to drop the column `group` on the `questions` table. All the data in the column will be lost.
  - Added the required column `quizId` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "questions" DROP COLUMN "group",
ADD COLUMN     "quizId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "quizzes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "questionNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quizzes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quizzes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
