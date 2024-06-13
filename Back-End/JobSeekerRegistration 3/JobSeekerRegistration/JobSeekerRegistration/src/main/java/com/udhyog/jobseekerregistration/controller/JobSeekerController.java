package com.udhyog.jobseekerregistration.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.udhyog.jobseekerregistration.dto.JobSeekerDTO;
import com.udhyog.jobseekerregistration.exception.UserAlreadyExistsException;
import com.udhyog.jobseekerregistration.exception.UserNotFoundException;
import com.udhyog.jobseekerregistration.model.JobSeeker;
import com.udhyog.jobseekerregistration.service.JobSeekerService;
import com.udhyog.jobseekerregistration.util.JwtUtils;


@RestController
@RequestMapping("/udhyog")
//@CrossOrigin(origins ="http://localhost:3000") 

public class JobSeekerController {

	


	    private JobSeekerService userService;

	    @Autowired
	    JobSeekerController(JobSeekerService userService)
	    {
	        this.userService=userService;
	    }

	    @PostMapping("/users/candregister")
	    public ResponseEntity<?>  register(@RequestBody  JobSeeker user)
	    {

	        try {
	        	JobSeeker newUser= userService.register(user);

	          return new ResponseEntity<JobSeeker>(newUser, HttpStatus.CREATED); //201
	        }

	        catch(UserAlreadyExistsException  exe)
	        {
	            return new ResponseEntity<String>(exe.getMessage(), HttpStatus.CONFLICT); //409

	        
	        
	        }
	        
	        
	        
	        ///Global Expection Handler

	    }

	    @PostMapping("/users/candlogin")
	    public ResponseEntity<?>  login(@RequestBody JobSeekerDTO userDTO)
	    {

	        try {
	        	JobSeeker newUser= userService.login(userDTO);

	            Map<String,String> tokenGenerated= JwtUtils.generateToken(userDTO.getEmailId());

	            return new ResponseEntity<Map<String,String>>(tokenGenerated, HttpStatus.OK) ;//200
	        }

	        catch(UserNotFoundException exe)
	        {
	            return new ResponseEntity<String>(exe.getMessage(), HttpStatus.NOT_FOUND); //404
	        }

	    }
	    
	}

