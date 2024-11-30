package com.student_management.backend.user;

import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IUserService {
    String addUser(UserDto userDto);

    UserResponseDto getUser(Integer id);

    List<UserResponseDto> getAllUser(Pageable pageable);

    String updateUser(Integer id, UserDto userDto);

    String deleteUser(Integer id);
}
