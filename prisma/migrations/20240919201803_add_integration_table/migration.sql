-- AlterTable
ALTER TABLE "patient" ADD COLUMN     "transcript" TEXT;

-- CreateTable
CREATE TABLE "integration" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nutritionistId" TEXT NOT NULL,

    CONSTRAINT "integration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "integration" ADD CONSTRAINT "integration_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "nutritionist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
