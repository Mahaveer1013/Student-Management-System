package com.student_management.backend.user;

import jakarta.validation.constraints.NotNull;

public record UserResponseDto(
        Integer id,

        @NotNull(message = "Email cannot be null")
        String email,

        @NotNull(message = "Role cannot be null")
        String role
) {
}