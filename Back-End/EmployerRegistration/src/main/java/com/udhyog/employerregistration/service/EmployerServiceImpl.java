package com.udhyog.employerregistration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.udhyog.employerregistration.dto.EmployerDTO;
import com.udhyog.employerregistration.exception.UserAlreadyExistsException;
import com.udhyog.employerregistration.exception.UserNotFoundException;
import com.udhyog.employerregistration.model.Employer;
import com.udhyog.employerregistration.repository.EmployerRepository;

import java.util.Optional;

	@Service
	public class EmployerServiceImpl implements  EmployerService{



	    private EmployerRepository userRepository;


	    @Autowired
	    public EmployerServiceImpl(EmployerRepository userRepository)
	    {

	        this.userRepository=userRepository;
	    }


	    @Override
	    public Employer register(Employer user) throws UserAlreadyExistsException {

	        Optional<Employer> isUserExists= userRepository.findByEmailId(user.getEmailId());

	        if(isUserExists.isPresent())
	        throw new UserAlreadyExistsException("User Already Exists.....");
	        else
	        {
	          String encyrptedPassword=  BCrypt.hashpw(user.getPassword(),BCrypt.gensalt());

	          user.setPassword(encyrptedPassword);

	          Employer newUser=  userRepository.save(user);
	        return newUser;
	        }

	    }

	  
	    @Override
	    public Employer login(EmployerDTO userDTO) throws UserNotFoundException {

	    	Employer userFound=null;
	        Optional<Employer> isUserExists= userRepository.findByEmailId(userDTO.getEmailId());

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
	    	
	    @Override
	    public String getCompanyNameByCompanyId(String emailId) {
	        Optional<Employer> companyOptional = userRepository.findById(emailId);
	        return companyOptional.map(Employer::getCompanyname).orElse(null);
	    }


		
	}


