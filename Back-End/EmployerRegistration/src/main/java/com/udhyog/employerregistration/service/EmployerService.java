package com.udhyog.employerregistration.service;

import com.udhyog.employerregistration.dto.EmployerDTO;
import com.udhyog.employerregistration.exception.UserAlreadyExistsException;
import com.udhyog.employerregistration.exception.UserNotFoundException;
import com.udhyog.employerregistration.model.Employer;

public interface EmployerService {

	
	    public Employer register(Employer user) throws UserAlreadyExistsException;

	    public Employer login(EmployerDTO user) throws UserNotFoundException;
	    String getCompanyNameByCompanyId(String emailId);

	}

