package com.student_management.backend.user;

import com.student_management.backend.exception.UserNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(
            UserRepository userRepository,
            UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public String addUser(UserDto userDto) {
        try {
            UserModel user = userMapper.userDto_to_user(userDto);
            userRepository.save(user);
            return "User Added Successfully";
        } catch (DataIntegrityViolationException e) {
            throw new RuntimeException(e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException("Error while adding user: " + e.getMessage());
        }
    }

    public UserResponseDto getUser(Integer id) {
        UserModel user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User Not Found"));
        return userMapper.user_to_userDto(user);
    }

    public List<UserResponseDto> getAllUser(Pageable pageable) {
        try {
            Page<UserModel> userPage = userRepository.findAll(pageable);
            return userPage.getContent()
                    .stream()
                    .map(userMapper::user_to_userDto)
                    .toList();
        } catch (Exception e) {
            throw new RuntimeException("Error while getting all users: " + e.getMessage());
        }
    }

    public String updateUser(Integer id, UserDto userDto) {
        try {
            UserModel user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User Not Found"));
            userRepository.findByEmail(userDto.email()).ifPresent(existingUser -> {
                throw new DataIntegrityViolationException("User already exists with the given email");
            });
            if (userDto.email() != null) {
                user.setEmail(userDto.email());
            }
            if (userDto.role() != null) {
                try {
                    user.setRole(UserRole.valueOf(userDto.role().toUpperCase()));
                } catch (IllegalArgumentException ex) {
                    throw new IllegalArgumentException("Invalid role value: " + userDto.role());
                }
            }
            userRepository.save(user);
            return "User Updated Successfully";
        } catch (Exception e) {
            throw new RuntimeException("Error while updating user: " + e.getMessage());
        }
    }

    public String deleteUser(Integer id) {
        try {
            userRepository.findById(id).ifPresentOrElse(userRepository::delete, () -> {
                throw new UserNotFoundException("User Not Found");
            });
            return "User Deleted Successfully";
        } catch (Exception e) {
            throw new RuntimeException("Error while deleting user: " + e.getMessage());
        }
    }

}
