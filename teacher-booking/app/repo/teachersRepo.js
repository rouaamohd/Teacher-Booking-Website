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

  async getTeachersByName(name) {
    try {
    } catch (error) {}
  }

  async getTeachersBySubject(subject) {
    try {
    } catch (error) {}
  }

  async getTeacherReview(teacherId){
    try{
      return prisma.review.findFirst({
        where: {teacherId}
      })
    }catch (error){
      return { error: error.message };
    }
  }
}
export default new TeachersRepo();
