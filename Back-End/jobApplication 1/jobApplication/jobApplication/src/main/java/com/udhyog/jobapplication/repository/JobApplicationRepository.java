package com.udhyog.jobapplication.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.udhyog.jobapplication.model.Application;

import jakarta.annotation.Resource;

@Repository
public interface JobApplicationRepository extends MongoRepository<Application, String>{

	List<Application> findByCompanyId(String id);
	Optional<Application> getJobById(String id);
	List<Application> findAllById(String id);
	List<Application> findByCandidateId(String candidateId);
	Optional<Application> findById(String Id);
	
	
	



	
	
}
