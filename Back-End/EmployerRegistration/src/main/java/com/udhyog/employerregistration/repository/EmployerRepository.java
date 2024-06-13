package com.udhyog.employerregistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.udhyog.employerregistration.model.Employer;

import java.util.Optional;

@Repository
public interface EmployerRepository extends JpaRepository<Employer,String> {
	    Optional<Employer>  findByEmailId(String emailId);
	}


