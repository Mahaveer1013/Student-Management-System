package com.student_management.backend.student;

import com.student_management.backend.exception.InvalidEnumException;
import com.student_management.backend.exception.UserNotFoundException;
import com.student_management.backend.user.UserModel;
import com.student_management.backend.user.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentMapper {

    private final UserRepository userRepository;

    public StudentMapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    // Converts StudentDto to Student entity
    public StudentModel toEnity(StudentDto dto) {
        var student = new StudentModel();

        UserModel user = userRepository.findById(dto.userId())
                .orElseThrow(() -> new UserNotFoundException("User Not Found"));

        student.setUserId(user);
        student.setFirstName(dto.firstName());
        student.setLastName(dto.lastName());
        student.setGender(dto.gender() != null ? Gender.valueOf(dto.gender().toUpperCase()) : null);
        if (dto.gender() != null) {
            try {
                student.setGender(Gender.valueOf(dto.gender().toUpperCase()));
            } catch (IllegalArgumentException e) {
                throw new InvalidEnumException("Invalid Gender provided: " + dto.gender());
            }
        }
        student.setRollNumber(dto.rollNumber());
        student.setRegisterNumber(dto.registerNumber());
        student.setPhoneNumber(dto.phoneNumber());
        student.setAddress(dto.address());
        student.setDepartmentId(dto.departmentId());
        student.setDob(dto.dob());
        student.setAdmissionYear(dto.admissionYear());
        student.setGraduationYear(dto.graduationYear());

        return student;
    }

    // Converts Student entity to StudentDto
    public StudentDto toDto(StudentModel student) {
        return new StudentDto(
                student.getUserId().getId(),
                student.getFirstName(),
                student.getLastName(),
                student.getGender().name(),
                student.getRollNumber(),
                student.getRegisterNumber(),
                student.getPhoneNumber(),
                student.getAddress(),
                student.getDepartmentId(),
                student.getDob(),
                student.getAdmissionYear(),
                student.getGraduationYear()
        );
    }
}
