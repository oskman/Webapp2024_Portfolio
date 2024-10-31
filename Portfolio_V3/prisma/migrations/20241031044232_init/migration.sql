-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "technologies" TEXT NOT NULL,
    "repositoryURL" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT true
);
