-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SELLER', 'CUSTOMER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CUSTOMER';
