-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(191) NOT NULL,
    "password" VARCHAR(191) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_email_key" UNIQUE("email")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(191) NOT NULL,
    "artist" VARCHAR(191) NOT NULL,
    "duration" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES "User"("id")
);
