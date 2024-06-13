package com.udhyog.employerregistration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.udhyog.employerregistration.dto.EmployerDTO;
import com.udhyog.employerregistration.exception.UserAlreadyExistsException;
import com.udhyog.employerregistration.exception.UserNotFoundException;
import com.udhyog.employerregistration.model.Employer;
import com.udhyog.employerregistration.service.EmployerService;
import com.udhyog.employerregistration.util.JwtUtils;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
//@CrossOrigin(origins ="http://localhost:3000") 
public class EmployerController {

    private EmployerService userService;

    @Autowired
    public  EmployerController(EmployerService userService)
    {
        this.userService=userService;
    }

    @PostMapping("/users/register")
    public ResponseEntity<?>  register(@RequestBody  Employer user)
    {

        try {
        	Employer newUser= userService.register(user);

          return new ResponseEntity<Employer>(newUser, HttpStatus.CREATED); //201
        }

        catch(UserAlreadyExistsException  exe)
        {
            return new ResponseEntity<String>(exe.getMessage(), HttpStatus.CONFLICT); //409
        }

    }

    @PostMapping("/users/login")
    public ResponseEntity<?>  login(@RequestBody EmployerDTO userDTO)
    {

        try {
        	Employer newUser= userService.login(userDTO);

            Map<String,String> tokenGenerated= JwtUtils.generateToken(userDTO.getEmailId());

            return new ResponseEntity<Map<String,String>>(tokenGenerated, HttpStatus.OK) ;//200
        }

        catch(UserNotFoundException exe)
        {
            return new ResponseEntity<String>(exe.getMessage(), HttpStatus.NOT_FOUND); //404
        }

    }
//    @GetMapping("/companies/{emailId}")
//    public ResponseEntity<String> getCompanyName(@PathVariable String emailId) {
//        String companyName = userService.getCompanyNameByCompanyId(emailId);
//        if (companyName != null) {
//            return ResponseEntity.ok(companyName);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
}
