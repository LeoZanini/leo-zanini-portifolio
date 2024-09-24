/*
  Warnings:

  - You are about to drop the column `nutrionistId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `nutrionistId` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the `Nutrionist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nutritionistId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nutritionistId` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_nutrionistId_fkey";

-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_nutrionistId_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "nutrionistId",
ADD COLUMN     "nutritionistId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "nutrionistId",
ADD COLUMN     "nutritionistId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Nutrionist";

-- CreateTable
CREATE TABLE "Nutritionist" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nutritionist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nutritionist_email_key" ON "Nutritionist"("email");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "Nutritionist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "Nutritionist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
