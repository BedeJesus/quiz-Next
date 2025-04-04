-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "firsrtAnswer" TEXT NOT NULL,
    "secondAnswer" TEXT NOT NULL,
    "thirdAnswer" TEXT NOT NULL,
    "fourthAnswer" TEXT NOT NULL,
    "CorectAnswer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "questions_title_key" ON "questions"("title");


ALTER TABLE "questions" RENAME COLUMN "firsrtAnswer" TO "firstAnswer";
ALTER TABLE "questions" RENAME COLUMN "CorectAnswer" TO "correctAnswer";
