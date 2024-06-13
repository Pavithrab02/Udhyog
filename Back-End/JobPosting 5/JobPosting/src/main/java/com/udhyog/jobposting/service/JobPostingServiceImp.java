package com.udhyog.jobposting.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.udhyog.jobposting.model.JobPosting;
import com.udhyog.jobposting.repository.JobPostingRepository;


@Service
public class JobPostingServiceImp implements JobPostingService{
	@Autowired
	private JobPostingRepository jobPostingRepository;



//public JobPostingServiceImp (JobPostingRepository jobPostingRepository)
//   {
//
//       this.jobPostingRepository=jobPostingRepository;
//   }

	@Override
	public JobPosting addJob(JobPosting jobposting) {
		
		return jobPostingRepository.save(jobposting);
	}
	
	@Override
	public Optional<JobPosting> getJobById(int jobId) {
		
		 return jobPostingRepository.findById(jobId);
	}
	
	@Override
	public void deleteJob(int jobId) {
		jobPostingRepository.deleteById(jobId);
	}
	
	@Override
	public void deleteJobByCompanyId(String companyId) {
		jobPostingRepository.deleteById(companyId);
	}
	
	@Override
	public List<JobPosting> getJobByCompanyId(String companyId) {
		
        return jobPostingRepository.findByCompanyId(companyId);
    }
	
	@Override
	public JobPosting  updateJobPosting(int jobId, JobPosting updatedJobPosting) {
        Optional<JobPosting> existingJobPostingOptional = jobPostingRepository.findById(jobId);
        if (existingJobPostingOptional.isPresent()) {
            JobPosting existingJobPosting = existingJobPostingOptional.get();
            // Update the values of the existing job posting with the values from updatedJobPosting
            // For example:
            
            existingJobPosting.setCompanyId(updatedJobPosting.getCompanyId());
            existingJobPosting.setDescription(updatedJobPosting.getDescription());
            existingJobPosting.setCompanyname(updatedJobPosting.getCompanyname());
            existingJobPosting.setSalary(updatedJobPosting.getSalary());
            existingJobPosting.setExperience(updatedJobPosting.getExperience());
            existingJobPosting.setLocation(updatedJobPosting.getLocation());
            existingJobPosting.setJobrole(updatedJobPosting.getJobrole());
            existingJobPosting.setRequiredqualification(updatedJobPosting.getRequiredqualification());
            existingJobPosting.setRequiredskills(updatedJobPosting.getRequiredskills());
            existingJobPosting.setApplicationdeadline(updatedJobPosting.getApplicationdeadline());
            existingJobPosting.setPostDate(updatedJobPosting.getPostDate());
           
            
            // Update other fields as needed
            // Then, save the updated job posting
            return jobPostingRepository.save(existingJobPosting);
        } else {
            // Handle case where job posting with the specified ID is not found
            // For example, throw an exception or log an error
        	return null;
        }
    }
	@Override
	public List<JobPosting> getAllJobPostings() {
        return jobPostingRepository.findAll();
    }
	

	}

