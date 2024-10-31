import fs from "fs-extra";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const teachersPath = path.join(process.cwd(), "/app/data/teachers.json"); // Ensure this path is correct

async function main() {
  const teachers = await fs.readJSON(teachersPath); // Load teachers data from JSON file

  for (const teacherData of teachers) {
    const { reviews, ...teacherInfo } = teacherData;

    // Create the teacher
    const teacher = await prisma.teacher.create({
      data: {
        ...teacherInfo,
        // Assuming reviews are multiple, if single remove the array wrapping
        reviews: {
          create: [
            {
              text: reviews.text,
              rating: reviews.rating,
            },
          ],
        },
      },
    });

    console.log(`Created teacher: ${teacher.name} with ID ${teacher.id}`);
  }
}

main()
  .then(async () => {
    console.log("Seeding completed.");
    await prisma.$disconnect(); // Disconnect properly after seeding
  })
  .catch(async (error) => {
    console.error("An error occurred: ", error);
    await prisma.$disconnect(); // Ensure disconnection on error
    process.exit(1); // Exit the process in case of error
  });
