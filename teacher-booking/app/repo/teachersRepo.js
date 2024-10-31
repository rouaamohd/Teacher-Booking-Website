import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class TeachersRepo {
  // #teachersFilePath = path.join(process.cwd(), 'app/data/teachers.json');

  async getTeachers() {
    try {
      return prisma.teacher.findMany();
    } catch (error) {
      return { error: error.message };
    }
  }
  async getSearchedTeachers(filter) {
    filter = filter.toLowerCase();  // You might want to remove this if you're not handling case insensitivity in your application logic
    try {
      return await prisma.teacher.findMany({
        where: {
          OR: [
            {name: {contains: filter}},
            {subjectCode: {contains: filter}},
            {qualifications: {contains: filter}},
            {courseOverview: {contains: filter}},
          ],
        },
      });
    } catch (error) {
      console.error("Error searching teachers:", error);
      return { error: error.message };
    }
  }
  

  async getTeachersBySubject(subjectCode) {
    try {
      return prisma.review.findFirst({
        where: { subjectCode },
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  async getTeacherReview(teacherId) {
    try {
      return prisma.review.findFirst({
        where: { teacherId },
      });
    } catch (error) {
      return { error: error.message };
    }
  }
}
export default new TeachersRepo();
