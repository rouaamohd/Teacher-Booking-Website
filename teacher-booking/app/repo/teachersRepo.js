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
}
export default new TeachersRepo();
