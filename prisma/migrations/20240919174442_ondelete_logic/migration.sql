-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_nutritionistId_fkey";

-- DropForeignKey
ALTER TABLE "patient" DROP CONSTRAINT "patient_nutritionistId_fkey";

-- AlterTable
ALTER TABLE "patient" ALTER COLUMN "nutritionistId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "patient" ADD CONSTRAINT "patient_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "nutritionist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "nutritionist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
