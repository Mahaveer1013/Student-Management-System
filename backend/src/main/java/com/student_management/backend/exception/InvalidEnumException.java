package com.student_management.backend.exception;

public class InvalidEnumException extends RuntimeException {
    public InvalidEnumException(String message) {
        super(message);
    }
}
