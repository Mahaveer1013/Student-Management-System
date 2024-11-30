package com.student_management.backend.user;

import com.student_management.backend.exception.InvalidEnumException;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {

    // Converts UserDto to User entity
    public UserModel userDto_to_user(UserDto dto) {
        var user = new UserModel();

        if (dto.email() != null) user.setEmail(dto.email());
        if (dto.password() != null) user.setPassword(dto.password());
        if (dto.role() != null) {
            try {
                user.setRole(UserRole.valueOf(dto.role().toUpperCase()));
            } catch (IllegalArgumentException e) {
                throw new InvalidEnumException("Invalid role provided: " + dto.role());
            }
        }

        return user;
    }

    // Converts User entity to UserDto
    public UserResponseDto user_to_userDto(UserModel user) {
        return new UserResponseDto(
                user.getId(),
                user.getEmail(),
                user.getRole().name()
        );
    }
}
