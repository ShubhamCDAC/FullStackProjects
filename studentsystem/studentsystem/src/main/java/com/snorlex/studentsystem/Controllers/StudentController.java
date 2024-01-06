package com.snorlex.studentsystem.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.snorlex.studentsystem.Model.Student;
import com.snorlex.studentsystem.Service.StudentService;

@RestController
@RequestMapping("/")
public class StudentController {
    
    @Autowired
    public StudentService studentService;

    //create
    @PostMapping("/add")
    public String addStudent(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student is Added";
    }

    //read
    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentService.getStudents();       
    }


}