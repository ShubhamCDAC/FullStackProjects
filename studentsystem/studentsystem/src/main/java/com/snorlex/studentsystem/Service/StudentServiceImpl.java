package com.snorlex.studentsystem.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.snorlex.studentsystem.Model.Student;
import com.snorlex.studentsystem.Repository.StudentRepo;

@Service
public class StudentServiceImpl implements StudentService {
    
    @Autowired
    private StudentRepo studentRepo; // injects studentrepo in studentservice
    
    // Add / Create
    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

    // get / Read
    @Override
    public List<Student> getStudents() {
        return studentRepo.findAll();
    }
}
