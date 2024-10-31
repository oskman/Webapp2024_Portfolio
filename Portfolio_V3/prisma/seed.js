import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        name: "Portefølje Applikasjon",
        description: "En webapplikasjon for å vise frem mine prosjekter.",
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-06-01"),
        technologies: "HTML, CSS, JavaScript",
        repositoryURL: "http://github.com/example/portfolio",
        status: "Fullført",
        isPublic: true
      },
      {
        name: "Portefølje Applikasjon 2",
        description: "En webapplikasjon for å vise frem mine prosjekter.",
        startDate: new Date("2023-03-06"),
        endDate: new Date("2023-07-02"),
        technologies: "Python, HTML, CSS, PHP",
        repositoryURL: "http://github.com/example/portfolio",
        status: "Fullført",
        isPublic: true
      },
      {
        name: "Portefølje Applikasjon 3",
        description: "En Skjult webapplikasjon kun for admins.",
        startDate: new Date("2023-03-06"),
        endDate: new Date("2023-07-02"),
        technologies: "Python, HTML, CSS, PHP",
        repositoryURL: "http://github.com/example/portfolio",
        status: "Fullført",
        isPublic: false
      }
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });