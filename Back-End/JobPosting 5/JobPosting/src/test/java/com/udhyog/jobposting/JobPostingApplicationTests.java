package com.udhyog.jobposting;

import static org.hamcrest.CoreMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.udhyog.jobposting.controller.JobPostingController;
import com.udhyog.jobposting.model.JobPosting;
import com.udhyog.jobposting.service.JobPostingService;

//@SpringBootTest
//class JobPostingApplicationTests {
//
//	@Test
//	void contextLoads() {
//	}
//
//}
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.udhyog.jobposting.controller.JobPostingController;
import com.udhyog.jobposting.model.JobPosting;
import com.udhyog.jobposting.service.JobPostingService;

class JobPostingApplicationTests {

    @Mock
    private JobPostingService jobPostingServiceMock;

    @InjectMocks
    private JobPostingController jobPostingController;

    private List<JobPosting> testData;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        // Initialize test data
        testData = new ArrayList<>();
        JobPosting job1 = new JobPosting(1, "companyId1", "Company 1", "Job Role 1", "Description 1", "Skills 1",
                "Qualification 1", "Location 1", "Salary 1", "Experience 1", "Deadline 1", "Post Date 1");
        JobPosting job2 = new JobPosting(2, "companyId2", "Company 2", "Job Role 2", "Description 2", "Skills 2",
                "Qualification 2", "Location 2", "Salary 2", "Experience 2", "Deadline 2", "Post Date 2");
        testData.add(job1);
        testData.add(job2);
    }

    @Test
    void testAddJob() {
        JobPosting job = testData.get(0);

        when(jobPostingServiceMock.addJob(job)).thenReturn(job);

        JobPosting addedJob = jobPostingController.addJob(job);

        assertEquals(job, addedJob);
        verify(jobPostingServiceMock, times(1)).addJob(job);
    }

    @Test
    void testGetAllJobPostings() {
        when(jobPostingServiceMock.getAllJobPostings()).thenReturn(testData);

        List<JobPosting> retrievedJobs = jobPostingController.getAllJobPostings();

        assertEquals(testData, retrievedJobs);
        verify(jobPostingServiceMock, times(1)).getAllJobPostings();
    }

    @Test
    void testDeleteJobById() {
        int jobId = 1;
        Optional<JobPosting> jobOptional = Optional.of(testData.get(0));
        when(jobPostingServiceMock.getJobById(jobId)).thenReturn(jobOptional);

        ResponseEntity<String> response = jobPostingController.deleteJobById(jobId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Job with ID " + jobId + " deleted successfully", response.getBody());
        verify(jobPostingServiceMock, times(1)).deleteJob(jobId);
    }

    @Test
    void testDeleteJobById_NotFound() {
        int jobId = 3;
        Optional<JobPosting> jobOptional = Optional.empty();
        when(jobPostingServiceMock.getJobById(jobId)).thenReturn(jobOptional);

        ResponseEntity<String> response = jobPostingController.deleteJobById(jobId);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("Job with ID " + jobId + " not found", response.getBody());
        verify(jobPostingServiceMock, never()).deleteJob(jobId);
    }

    // Add more test cases for other controller methods
}