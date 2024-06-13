package com.udhyog.candidateprofile;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.io.IOException;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;

import com.udhyog.candidateprofile.model.CandidateProfile;
import com.udhyog.candidateprofile.repository.CandidateProfileRepository;
import com.udhyog.candidateprofile.service.CandidateProfileServiceImp;

class CandidateProfileServiceTests {
	
	

    @Mock
    private CandidateProfileRepository candidateProfileRepository;

    @InjectMocks
    private CandidateProfileServiceImp candidateProfileService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testSaveCandidate_Success() throws IOException {
        // Mocking repository save method
        when(candidateProfileRepository.save(any())).thenReturn(new CandidateProfile());

        // Creating a mock image file
        MockMultipartFile image = new MockMultipartFile("image", "test.jpg", "image/jpeg", "test image".getBytes());

        // Calling the service method
        CandidateProfile savedCandidate = candidateProfileService.saveCandidate("John", "Doe", "john.doe@example.com", "Male", "Address", "1234567890", "Java, Spring", "Other skills", "Certifications", "john.doe@example.com", image);

        // Assertions
        assertNotNull(savedCandidate);
        // Add more assertions as needed
    }
    
    @Test
    void testSaveCandidateSuccess() throws IOException {
        // Mocking repository save method
        when(candidateProfileRepository.save(any())).thenReturn(new CandidateProfile());

        // Creating a mock image file
        MockMultipartFile image = new MockMultipartFile("image", "test.jpg", "image/jpeg", "test image".getBytes());

        // Calling the service method
        CandidateProfile savedCandidate = candidateProfileService.saveCandidate("John", "Doe", "john.doe@example.com", "Male", "Address", "1234567890", "Java, Spring", "Other skills", "Certifications", "john.doe@example.com", image);

        // Assertions
        assertNotNull(savedCandidate);
        // Add more assertions as needed
    }

   

    @Test
    void testGetCandidateById_Success() {
        // Mocking the repository findById method
        CandidateProfile candidate = new CandidateProfile();
        candidate.setId(1);
        when(candidateProfileRepository.findById(anyInt())).thenReturn(Optional.of(candidate));

        // Calling the service method
        Optional<CandidateProfile> retrievedCandidate = candidateProfileService.getCandidate(1);

        // Verifying that the candidate is retrieved
        assertTrue(retrievedCandidate.isPresent());
        assertEquals(1, retrievedCandidate.get().getCandidateId());
    }

    @Test
    void testGetCandidateById_NotFound() {
        // Mocking the repository findById method to return empty optional
        when(candidateProfileRepository.findById(anyInt())).thenReturn(Optional.empty());

        // Calling the service method
        Optional<CandidateProfile> retrievedCandidate = candidateProfileService.getCandidate(1);

        // Verifying that the candidate is not found
        assertFalse(retrievedCandidate.isPresent());
    }

}

    // Add more test cases for other service methods
