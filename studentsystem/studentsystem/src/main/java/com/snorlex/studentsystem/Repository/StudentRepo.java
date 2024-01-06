package com.snorlex.studentsystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.snorlex.studentsystem.Model.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
    
}
