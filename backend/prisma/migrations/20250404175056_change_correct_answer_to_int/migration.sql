/*
  Warnings:

  - Changed the type of `correctAnswer` on the `questions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "questions" DROP COLUMN "correctAnswer",
ADD COLUMN     "correctAnswer" INTEGER NOT NULL;
