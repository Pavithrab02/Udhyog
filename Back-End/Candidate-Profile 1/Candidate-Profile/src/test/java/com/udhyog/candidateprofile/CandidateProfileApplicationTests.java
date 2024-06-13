package com.udhyog.candidateprofile;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

//@SpringBootTest
//class CandidateProfileApplicationTests {
//
//	@Test
//	void contextLoads() {
//	}
//
//}

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import java.io.IOException;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;

import com.udhyog.candidateprofile.controller.CandidateProfileController;
import com.udhyog.candidateprofile.model.CandidateProfile;
import com.udhyog.candidateprofile.service.CandidateProfileService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.io.IOException;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mock.web.MockMultipartFile;

import com.udhyog.candidateprofile.model.CandidateProfile;
import com.udhyog.candidateprofile.repository.CandidateProfileRepository;
import com.udhyog.candidateprofile.service.CandidateProfileServiceImp;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import java.io.IOException;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;

import com.udhyog.candidateprofile.controller.CandidateProfileController;
import com.udhyog.candidateprofile.model.CandidateProfile;
import com.udhyog.candidateprofile.service.CandidateProfileService;

class CandidateProfileApplicationTests {

    @Mock
    private CandidateProfileService candidateProfileService;

    @InjectMocks
    private CandidateProfileController candidateProfileController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testSaveCandidateSuccess() throws IOException {
        // Mocking the service method
        when(candidateProfileService.saveCandidate(anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), any())).thenReturn(new CandidateProfile());

        // Creating a mock image file
        MockMultipartFile image = new MockMultipartFile("image", "test.jpg", "image/jpeg", "test image".getBytes());

        // Calling the controller method
        ResponseEntity<String> response = candidateProfileController.saveCandidate("John", "Doe", "john.doe@example.com", "Male", "Address", "1234567890", "Java, Spring", "Other skills", "Certifications", "john.doe@example.com", image);

        // Assertions
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Candidate saved successfully", response.getBody());
    }
    
    @Test
    void testSaveCandidate_Success() throws IOException {
        // Mocking the service method
        when(candidateProfileService.saveCandidate(anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), any())).thenReturn(new CandidateProfile());

        // Creating a mock image file
        MockMultipartFile image = new MockMultipartFile("image", "test.jpg", "image/jpeg", "test image".getBytes());

        // Calling the controller method
        ResponseEntity<String> response = candidateProfileController.saveCandidate("John", "Doe", "john.doe@example.com", "Male", "Address", "1234567890", "Java, Spring", "Other skills", "Certifications", "john.doe@example.com", image);

        // Assertions
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Candidate saved successfully", response.getBody());
    }

    @Test
    void testSaveCandidate_Failure() throws IOException {
        // Mocking the service method to throw an exception
        when(candidateProfileService.saveCandidate(anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), anyString(), any())).thenThrow(IOException.class);

        // Creating a mock image file
        MockMultipartFile image = new MockMultipartFile("image", "test.jpg", "image/jpeg", "test image".getBytes());

        // Calling the controller method
        ResponseEntity<String> response = candidateProfileController.saveCandidate("John", "Doe", "john.doe@example.com", "Male", "Address", "1234567890", "Java, Spring", "Other skills", "Certifications", "john.doe@example.com", image);

        // Assertions
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Error saving candidate", response.getBody());
    }


    // Add more test cases for other controller methods
}
