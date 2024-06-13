package com.udhyog.jobseekerregistration.service;

import com.udhyog.jobseekerregistration.dto.JobSeekerDTO;
import com.udhyog.jobseekerregistration.exception.UserAlreadyExistsException;
import com.udhyog.jobseekerregistration.exception.UserNotFoundException;
import com.udhyog.jobseekerregistration.model.JobSeeker;

public interface JobSeekerService {
	 public JobSeeker register(JobSeeker user) throws UserAlreadyExistsException;

	    public JobSeeker login(JobSeekerDTO user) throws UserNotFoundException;
	    


}


