import fs from 'fs';
import path from 'path';

class TeachersRepo {
  constructor() {
    // Path to the JSON file
    this.teachersFilePath = path.join(process.cwd(), '/app/data/teachers.json');
  }

  // Helper function to load and parse JSON file
  async loadTeachers() {
    try {
      const data = fs.readFileSync(this.teachersFilePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading teachers JSON file:", error);
      return { error: error.message };
    }
  }

  // Retrieve all teachers
  async getTeachers() {
    return await this.loadTeachers();
  }

  // Search teachers by filter text in various fields
  async getSearchedTeachers(filter) {
    filter = filter.toLowerCase();
    const teachers = await this.loadTeachers();
    return teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(filter) ||
      teacher.subjectCode.toLowerCase().includes(filter) ||
      teacher.qualifications.toLowerCase().includes(filter) ||
      teacher.courseOverview.toLowerCase().includes(filter)
    );
  }

  // Retrieve teachers by subject
  async getTeachersBySubject(subject) {
    subject = subject.toLowerCase();
    const teachers = await this.loadTeachers();
    return teachers.filter((teacher) =>
      teacher.qualifications.toLowerCase().includes(subject) ||
      teacher.courseOverview.toLowerCase().includes(subject)
    );
  }

  // Get reviews for a teacher by ID
  async getTeacherReview(teacherId) {
    const teachers = await this.loadTeachers();
    const teacher = teachers.find(t => t.id === teacherId);
    return teacher ? teacher.reviews : { error: "Teacher not found" };
  }
}

export default new TeachersRepo();
