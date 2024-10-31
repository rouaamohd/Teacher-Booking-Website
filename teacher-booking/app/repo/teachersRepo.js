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
      return prisma.review.findFirst({
        where: {name}
      })
    } catch (error) {
      return { error: error.message };
    }
  }

  async getTeachersBySubject(subjectCode) {
    try {
      return prisma.review.findFirst({
        where: {subjectCode}
      })
    } catch (error) {
      return { error: error.message };
    }
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
