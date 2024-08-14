/*
  Warnings:

  - Changed the type of `release_year` on the `music` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `music` DROP COLUMN `release_year`,
    ADD COLUMN `release_year` YEAR NOT NULL;
