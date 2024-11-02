import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class TeachersRepo {
  async getTeachers() {
    try {
      return prisma.teacher.findMany();
    } catch (error) {
      return { error: error.message };
    }
  }

  async getSearchedTeachers(filter) {
    filter = filter.toLowerCase();
    try {
      return await prisma.teacher.findMany({
        where: {
          OR: [
            { name: { contains: filter } },
            { subjectCode: { contains: filter } },
            { qualifications: { contains: filter } },
            { courseOverview: { contains: filter } },
          ],
        },
      });
    } catch (error) {
      console.error("Error searching teachers:", error);
      return { error: error.message };
    }
  }

  async getTeachersBySubject(subject) {
    subject = subject.toLowerCase();
    try {
      return await prisma.teacher.findMany({
        where: {
          OR: [
            { qualifications: { contains: subject } },
            { courseOverview: { contains: subject } },
          ],
        },
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
