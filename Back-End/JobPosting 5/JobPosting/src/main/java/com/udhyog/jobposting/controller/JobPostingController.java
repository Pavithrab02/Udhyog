package com.udhyog.jobposting.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.udhyog.jobposting.model.JobPosting;
import com.udhyog.jobposting.service.JobPostingService;


@RestController
@RequestMapping("/api")
//@CrossOrigin(origins ="http://localhost:3000") 
public class JobPostingController {
	
	    @Autowired
		private JobPostingService jobPostingService;
		
		@PostMapping("/jobposting")
		public JobPosting addJob(@RequestBody JobPosting job ) {
	
			return jobPostingService.addJob(job);
			
		}
		
		@GetMapping("/jobpostings")
	    public List<JobPosting> getAllJobPostings() {
	        return jobPostingService.getAllJobPostings();
	    }
		
		
//		@GetMapping("/job/{jobId}")
//		public ResponseEntity<?> getJobById(@PathVariable int jobId) {
//		    try {
//		        Optional<JobPosting> job = jobPostingService.getJobById(jobId);
//		        if (job.isPresent()) {
//		            return ResponseEntity.ok(job.get());
//		        } else {
//		            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Job with ID " + jobId + " not found");
//		        }
//		    } catch (Exception ex) {
//		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to retrieve ");
//		    }
//		}
//		
		@DeleteMapping("/deletejob/{jobId}")
		public ResponseEntity<String> deleteJobById(@PathVariable int jobId) {
		    Optional<JobPosting> jobOptional = jobPostingService.getJobById(jobId);
		    if (jobOptional.isPresent()) {
		        try {
		            jobPostingService.deleteJob(jobId);
		            return new ResponseEntity<>("Job with ID " + jobId + " deleted successfully", HttpStatus.OK);
		        } catch (Exception e) {
		            return new ResponseEntity<>("Failed to delete job with ID " + jobId, HttpStatus.INTERNAL_SERVER_ERROR);
		        }
		    } else {
		        return new ResponseEntity<>("Job with ID " + jobId + " not found", HttpStatus.NOT_FOUND);
		    }
		}
		
		@GetMapping("/getjobs/{companyId}")
		public List<JobPosting>  getJobByCompanyId(@PathVariable String companyId) {
			return jobPostingService. getJobByCompanyId(companyId);
			
		}
		
		@GetMapping("/job/{jobId}")
		public Optional<JobPosting>  getJobById(@PathVariable int jobId) {
			return jobPostingService. getJobById(jobId);
			
		}

		
		
		
		@PutMapping("/updatejob/{jobId}")
		public ResponseEntity<String> updateJobPosting(@PathVariable int jobId, @RequestBody JobPosting job) {
		    try {
		        JobPosting updatedJob = jobPostingService.updateJobPosting(jobId, job);
		        if (updatedJob != null) {
		            return ResponseEntity.ok("Job with ID " + jobId + " updated successfully");
		        } else {
		            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Job with ID " + jobId + " not found");
		        }
		    } catch (Exception ex) {
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update job posting: " + ex.getMessage());
		    }
		}
		
		
//		@PutMapping("/updatejob/{jobId}")
//		public JobPosting updateJobPosting(@PathVariable int jobId, @RequestBody JobPosting job) {
//	
//			return jobPostingService.updateJobPosting(jobId,job);
//			
//		}

//		@PostMapping("/updatejob/{jobId}")
//		public JobPosting updateJobPosting(@PathVariable int jobId,@RequestBody JobPosting job) {
//			return jobPostingService.updateJobPosting(jobId,job);
//		}

		
//		@GetMapping("/job/{jobId}")
//		public Optional<JobPosting> getJobById(@PathVariable int jobId) {
//			return jobPostingService.getJobById(jobId);
//			
//		}
//		@DeleteMapping("/deletejob/{jobId}")
//	    public ResponseEntity<String> deleteJobById(@PathVariable int jobId) {
//	        try {
//	            jobPostingService.deleteJob(jobId);
//	            return new ResponseEntity<>("Job with ID " + jobId+ " deleted successfully", HttpStatus.OK);
//	        } catch (Exception e) {
//	            return new ResponseEntity<>("Failed to delete job with ID " + jobId, HttpStatus.INTERNAL_SERVER_ERROR);
//	        }
//	    }
}

