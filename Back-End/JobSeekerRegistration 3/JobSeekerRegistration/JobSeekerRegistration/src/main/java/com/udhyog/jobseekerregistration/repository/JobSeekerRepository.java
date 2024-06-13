package com.udhyog.jobseekerregistration.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.udhyog.jobseekerregistration.model.JobSeeker;


public interface JobSeekerRepository extends JpaRepository<JobSeeker,String> {

    Optional<JobSeeker>  findByEmailId(String emailId);
}
	

