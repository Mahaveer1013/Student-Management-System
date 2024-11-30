package com.student_management.backend.advice;

import com.student_management.backend.exception.InvalidEnumException;
import com.student_management.backend.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.dao.DataIntegrityViolationException;
//import org.springframework.security.access.AccessDeniedException;
//import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class ApplicationExceptionHandler {

    // Handle generic exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("An unexpected error occurred: " + e.getMessage());
    }

    // Handle UserNotFoundException (custom exception, replace with your actual exception class)
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(InvalidEnumException.class)
    public ResponseEntity<String> handleInvalidEnumException(InvalidEnumException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

//    // Handle UnauthorizedException (for handling authentication failures)
//    @ExceptionHandler(AuthenticationException   .class)
//    public ResponseEntity<String> handleAuthenticationException(AuthenticationException ex) {
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                .body("Unauthorized access: " + ex.getMessage());
//    }
//
//    // Handle AccessDeniedException (for handling authorization failures)
//    @ExceptionHandler(AccessDeniedException.class)
//    public ResponseEntity<String> handleAccessDeniedException(AccessDeniedException ex) {
//        return ResponseEntity.status(HttpStatus.FORBIDDEN)
//                .body("Access denied: " + ex.getMessage());
//    }

    // Handle DataIntegrityViolationException (for JPA constraint violations)
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Data integrity violation: " + ex.getMessage());
    }

    // Handle IllegalArgumentException (e.g., for invalid input data)
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid argument: " + ex.getMessage());
    }

    // Handle MethodArgumentNotValidException (for validation errors in request body)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Validation error: " + ex.getBindingResult().getFieldErrors());
    }

    // Handle NullPointerException (for handling null pointer exceptions)
    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<String> handleNullPointerException(NullPointerException ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Null pointer exception: " + ex.getMessage());
    }

}
