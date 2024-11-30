package com.student_management.backend.user;

import jakarta.validation.constraints.NotNull;

public record UserDto(
        Integer id,

        @NotNull(message = "Email cannot be null")
        String email,

        String password,

        @NotNull(message = "Role cannot be null")
        String role
) {
}



