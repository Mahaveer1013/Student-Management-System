package com.student_management.backend.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentModel, Integer> {

    StudentModel findByRegisterNumber(String registerNumber);

}
