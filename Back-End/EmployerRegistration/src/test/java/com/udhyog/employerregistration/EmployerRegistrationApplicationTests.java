package com.udhyog.employerregistration;

import static org.hamcrest.CoreMatchers.any;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.when;


import java.util.Optional;

import org.aspectj.lang.annotation.Before;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.udhyog.employerregistration.controller.EmployerController;
import com.udhyog.employerregistration.dto.EmployerDTO;
import com.udhyog.employerregistration.exception.UserAlreadyExistsException;
import com.udhyog.employerregistration.exception.UserNotFoundException;
import com.udhyog.employerregistration.model.Employer;
import com.udhyog.employerregistration.repository.EmployerRepository;
import com.udhyog.employerregistration.service.EmployerService;
//
//@SpringBootTest
//class EmployerRegistrationApplicationTests {
//
//	@Test
//	void contextLoads() {
//	}
//
//}

@RunWith(MockitoJUnitRunner.class)
public class EmployerRegistrationApplicationTests {

    @Mock
    private EmployerService employerService;

    @InjectMocks
    private EmployerController employerController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testRegister() {
        // Mock data
        Employer user = new Employer();
        user.setEmailId("test@example.com");
        user.setPassword("password");
        // Mock behavior
        try {
			when(employerService.register(user)).thenReturn(user);
		} catch (UserAlreadyExistsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        // Call the endpoint
        ResponseEntity<?> responseEntity = employerController.register(user);
        // Verify response
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(user, responseEntity.getBody());
    }


    @Test
    public void testLogin() {
        // Mock data
        EmployerDTO userDTO = new EmployerDTO();
        userDTO.setEmailId("test@example.com");
        userDTO.setPassword("password");
        // Mock behavior
        try {
			when(employerService.login(Mockito.any(EmployerDTO.class))).thenReturn(new Employer());
		} catch (UserNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        // Call the endpoint
        ResponseEntity<?> responseEntity = employerController.login(userDTO);
        // Verify response
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
    }
    
    @Test
    public void testLogin1() {
        // Mock data
        EmployerDTO userDTO = new EmployerDTO();
        userDTO.setEmailId("user@example.com");
        userDTO.setPassword("abc");
        // Mock behavior
        try {
			when(employerService.login(Mockito.any(EmployerDTO.class))).thenReturn(new Employer());
		} catch (UserNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        // Call the endpoint
        ResponseEntity<?> responseEntity = employerController.login(userDTO);
        // Verify response
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
    }
    
    
}
