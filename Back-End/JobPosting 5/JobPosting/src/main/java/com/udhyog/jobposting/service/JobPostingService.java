package com.udhyog.jobposting.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.PathVariable;

import com.udhyog.jobposting.model.JobPosting;

public interface JobPostingService {

//	    public User register(User user) throws UserAlreadyExistsException;
//
//	    public User login(UserDTO user) throws UserNotFoundException;

	public JobPosting addJob(JobPosting jobposting);
	
	

	
   List<JobPosting> getJobByCompanyId(String companyId);
   
   public List<JobPosting> getAllJobPostings();

   Optional<JobPosting> getJobById(int jobId);
      void deleteJob(int jobId);


     JobPosting updateJobPosting(int jobId, JobPosting updatedJobPosting);

	void deleteJobByCompanyId(String companyId);


		
	
}