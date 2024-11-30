package com.student_management.backend.student;

import com.student_management.backend.user.UserModel;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "students")
public class StudentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "users", referencedColumnName = "id") // Referencing the User entity's id
    @NotNull(message = "User cannot be null")
    private UserModel userId;

    @NotNull(message = "First Name cannot be null")
    private String firstName;

    @NotNull(message = "Last Name cannot be null")
    private String lastName;

    @Enumerated(EnumType.STRING) // Store the gender as a string in the database
    @NotNull(message = "Gender cannot be null")
    private Gender gender;

    @NotNull(message = "Roll Number cannot be null")
    @Column(unique = true)
    private String rollNumber;

    @Column(unique = true)
    @NotNull(message = "Register Number cannot be null")
    private String registerNumber;

    @NotNull(message = "Phone Number cannot be null")
    private String phoneNumber;

    @NotNull(message = "Address cannot be null")
    private String address;

    @NotNull(message = "Department cannot be null")
    private String departmentId;

    @NotNull(message = "Date of Birth cannot be null")
    private LocalDate dob;

    @NotNull(message = "Admission Year cannot be null")
    private int admissionYear;

    @NotNull(message = "Graduation Year cannot be null")
    private int graduationYear;

    private String profilePictureUrl;

}
