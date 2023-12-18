-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailAccounts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "EmailAccounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailMessages" (
    "id" BIGSERIAL NOT NULL,
    "emailAccountId" INTEGER NOT NULL,

    CONSTRAINT "EmailMessages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmailAccounts" ADD CONSTRAINT "EmailAccounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailMessages" ADD CONSTRAINT "EmailMessages_emailAccountId_fkey" FOREIGN KEY ("emailAccountId") REFERENCES "EmailAccounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
