package com.udhyog.jobseekerregistration.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.udhyog.jobseekerregistration.dto.JobSeekerDTO;
import com.udhyog.jobseekerregistration.exception.UserAlreadyExistsException;
import com.udhyog.jobseekerregistration.exception.UserNotFoundException;
import com.udhyog.jobseekerregistration.model.JobSeeker;
import com.udhyog.jobseekerregistration.repository.JobSeekerRepository;


@Service
public class JobSeekerServiceImpl implements  JobSeekerService{
	
		 private JobSeekerRepository userRepository;


		    @Autowired
		    JobSeekerServiceImpl(JobSeekerRepository userRepository)
		    {

		        this.userRepository=userRepository;
		    }

	        @Override
		    public JobSeeker register(JobSeeker user) throws UserAlreadyExistsException {

		        Optional<JobSeeker> isUserExists= userRepository.findByEmailId(user.getEmailId());

		        if(isUserExists.isPresent())
		        throw new UserAlreadyExistsException("User Already Exists.....");
		        else
		        {
		          String encyrptedPassword=  BCrypt.hashpw(user.getPassword(),BCrypt.gensalt());

		          user.setPassword(encyrptedPassword);

		          JobSeeker newUser=  userRepository.save(user);
		        return newUser;
		        }

		    }

		  
		    @Override
		    public JobSeeker login(JobSeekerDTO userDTO) throws UserNotFoundException {

		    	JobSeeker userFound=null;
		        Optional<JobSeeker> isUserExists= userRepository.findByEmailId(userDTO.getEmailId());

		        if(isUserExists.isPresent())
		        {
		            userFound=isUserExists.get();
		            //check the password encrpted password stored in the datase with the password sent throug DTO

		           boolean isValid= BCrypt.checkpw(userDTO.getPassword(),userFound.getPassword());

		           if(isValid)
		               return userFound;
		           else
		               throw new UserNotFoundException("User Not Found...");
		        }
		        else
		            throw new UserNotFoundException("User Not Found...");
		    }
		    	
		    


			
		}





