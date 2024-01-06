package com.snorlex.studentsystem.Service;

import java.util.List;

import com.snorlex.studentsystem.Model.Student;

public interface StudentService {
    // CRUD create read update delete
    // create
    public Student saveStudent(Student student);

    // read
    public List<Student> getStudents();

}
