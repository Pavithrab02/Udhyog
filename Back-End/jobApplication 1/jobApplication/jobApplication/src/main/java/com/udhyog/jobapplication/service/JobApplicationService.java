package com.udhyog.jobapplication.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.udhyog.jobapplication.model.Application;


@Service
public interface JobApplicationService {
	
//	Application addJob(Application jobapplication);
//
//	Optional<Application> getJobById(String id);
//
//	List<Application> getJobByCompanyId(String companyId);
//
//	List<Application> getAllApplications();
//
//	void saveJobApplication(Application jobApplication);
//
//	Object addFile(MultipartFile file);
//
//	Application downloadFile(String id);

	
//	void saveApplication(String fullName, String contactNo, String skills, String experience, String candidateId, int jobId, String companyId,String status, MultipartFile file) throws IOException;

	List<Application> getAllApplications();

	List<Application> getApplicationsByCompanyId(String companyId);

	List<Application> getApplicationsByCandidateId(String candidateId);

	void saveApplication(String fullName, String contactNo, String skills, String status, String experience,
			String candidateId, int jobId, String companyId, MultipartFile file) throws IOException;

	

	

	void updateRecordStatus(String id, String newStatus);

	

}
