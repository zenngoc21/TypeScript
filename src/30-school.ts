
class Student {
  constructor(public name: string, public grade: number) {}
}

class Teacher {
  constructor(public name: string, public subject: string) {}
}

class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("Danh sach hoc sinh:");
    this.students.forEach((s) => console.log(`- ${s.name} (Lop ${s.grade})`));

    console.log("Danh sach giao vien:");
    this.teachers.forEach((t) => console.log(`- ${t.name} (Mon ${t.subject})`));
  }
}

const school = new School();
school.addStudent(new Student("Nguyen Van A", 10));
school.addTeacher(new Teacher("Co Lan", "Toan"));
school.displayInfo();

export {};
